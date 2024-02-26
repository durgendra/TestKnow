import fetchData from './utils/fetchData';

const url = process.env.REACT_APP_SERVER_URL + '/faq';
const urlNew = process.env.REACT_APP_SERVER_URL + '/faq/quiz';
const urlSum = process.env.REACT_APP_SERVER_URL + '/faq/summary';
const urlKeyword = process.env.REACT_APP_SERVER_URL + '/faq/keywordinfo';
const urlDoc = process.env.REACT_APP_SERVER_URL + '/faq/uploadedDoc';

export const createFAQ = async (product, currentUser, dispatch, setPage) => {
  dispatch({ type: 'RESET_RESULTAI' });
  dispatch({ type: 'START_LOADING' });
  const result = await fetchData(
    { url: url, body: product, token: currentUser?.token },
    dispatch,
  );
  if (result) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'success',
        message: 'FAQs have been generated successfully',
      },
    });
    dispatch({ type: 'RESET_PRODUCT' });
    dispatch({ type: 'RESET_PAPERS' });
    // setPage(1);
    dispatch({ type: 'UPDATE_PRODUCT', payload: result });
  }

  dispatch({ type: 'END_LOADING' });
};

export const createQuiz = async (product, currentUser, dispatch, setPage) => {
  dispatch({ type: 'RESET_RESULTAI' });
  dispatch({ type: 'START_LOADING' });
  const result = await fetchData(
    { url: urlNew, body: product, token: currentUser?.token },
    dispatch,
  );
  if (result) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'success',
        message: 'Quiz have been generated successfully',
      },
    });
    dispatch({ type: 'RESET_PRODUCT' });
    dispatch({ type: 'RESET_PAPERS' });
    dispatch({ type: 'RESET_PAGENUMBERS' });
    // setPage(1);
    dispatch({ type: 'UPDATE_PRODUCT', payload: result });
  }

  dispatch({ type: 'END_LOADING' });
};

export const createSum = async (product, currentUser, dispatch, setPage) => {
  dispatch({ type: 'START_LOADING' });
  const result = await fetchData(
    { url: urlSum, body: product, token: currentUser?.token },
    dispatch,
  );
  if (result) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'success',
        message: 'Summary have been generated successfully',
      },
    });
    dispatch({ type: 'RESET_PRODUCT' });
    // setPage(1);
    dispatch({ type: 'UPDATE_PRODUCT', payload: result });
  }

  dispatch({ type: 'END_LOADING' });
};

export const getFAQs = async (currentUser, dispatch) => {
  const result = await fetchData(
    { url, method: 'GET', token: currentUser?.token },
    dispatch,
  );
  if (result) {
    dispatch({ type: 'UPDATE_PRODUCTS', payload: result });
  }
};

export const getUploadedDocAPI = async (currentUser) => {
  const result = await fetchData({
    url: urlDoc,
    method: 'GET',
    token: currentUser?.token,
  });
  if (result) {
    return result;
  }
};

export const createKnowledge = async (keyword, currentUser, dispatch) => {
  dispatch({ type: 'START_LOADING' });
  const result = await fetchData(
    { url: urlKeyword, body: keyword, token: currentUser?.token },
    dispatch,
  );
  if (result) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'success',
        message: 'Keyword related details have been generated successfully',
      },
    });
    dispatch({ type: 'RESET_KEYWORDINFO' });
    // setPage(1);
    dispatch({ type: 'UPDATE_KEYWORDINFO', payload: result });
  }

  dispatch({ type: 'END_LOADING' });
};

export const createAssess = async (keyword, currentUser, dispatch) => {
  dispatch({ type: 'START_LOADING' });
  const result = await fetchData(
    { url: urlKeyword, body: keyword, token: currentUser?.token },
    dispatch,
  );
  if (result) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'success',
        message: 'Keyword related details have been generated successfully',
      },
    });
    dispatch({ type: 'RESET_KEYWORDINFO' });
    // setPage(1);
    dispatch({ type: 'UPDATE_KEYWORDINFO', payload: result });
  }

  dispatch({ type: 'END_LOADING' });
};

export const updateFAQStatus = async (
  updatedFields,
  objectId,
  currentUser,
  dispatch,
) => {
  dispatch({ type: 'START_LOADING' });
  const result = await fetchData(
    {
      url: `${url}/updateFAQStatus/${objectId}`,
      method: 'PATCH',
      body: updatedFields,
      token: currentUser?.token,
    },
    dispatch,
  );
  if (result) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'success',
        message: 'Assessment has been created',
      },
    });
    dispatch({ type: 'RESET_PRODUCT' });
    // setPage(1);
    dispatch({ type: 'UPDATE_PRODUCT', payload: result });
  }

  dispatch({ type: 'END_LOADING' });
};

export const getFAQSingle = async (faqId, currentUser, dispatch) => {
  // console.log(faqId);
  const result = await fetchData(
    { url: `${url}/${faqId}`, method: 'GET', token: currentUser?.token },
    dispatch,
  );
  if (result) {
    dispatch({ type: 'RESET_PRODUCT' });
    dispatch({ type: 'UPDATE_PRODUCT', payload: result });
  }
};
