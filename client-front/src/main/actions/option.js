import fetchData from './utils/fetchData';

const url = process.env.REACT_APP_SERVER_URL + '/option';
const urlMore = process.env.REACT_APP_SERVER_URL + '/option/more';
const urlExpand = process.env.REACT_APP_SERVER_URL + '/option/expand';
const urlHistoryMore =
  process.env.REACT_APP_SERVER_URL + '/option/history-more';

export const createOptions = async (
  product,
  currentUser,
  dispatch,
  setPage,
) => {
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
        message: 'Answer has been successfully generated',
      },
    });
    dispatch({ type: 'RESET_PRODUCT' });
    // setPage(1);
    dispatch({ type: 'UPDATE_PRODUCT', payload: result });
  }

  dispatch({ type: 'END_LOADING' });
};
export const getMoreDetails = async (
  optionMore,
  currentUser,
  dispatch,
  setPage,
) => {
  dispatch({ type: 'START_LOADING' });
  const result = await fetchData(
    { url: urlMore, body: optionMore, token: currentUser?.token },
    dispatch,
  );
  if (result) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'info',
        message: result,
      },
    });
    // dispatch({ type: 'RESET_PRODUCT' });
    // // setPage(1);
    // dispatch({ type: 'UPDATE_PRODUCT', payload: result });
  }

  dispatch({ type: 'END_LOADING' });
};

export const getExpand = async (
  optionExpand,
  currentUser,
  dispatch,
  setPage,
) => {
  dispatch({ type: 'START_LOADING' });
  const result = await fetchData(
    { url: urlExpand, body: optionExpand, token: currentUser?.token },
    dispatch,
  );
  if (result) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'success',
        message: 'Answer has been successfully generated',
      },
    });
    dispatch({ type: 'RESET_PRODUCT' });
    // setPage(1);
    dispatch({ type: 'UPDATE_PRODUCT', payload: result });
  }

  dispatch({ type: 'END_LOADING' });
};

export const getHistoryExpand = async (
  optionMore,
  currentUser,
  dispatch,
  setPage,
) => {
  dispatch({ type: 'START_LOADING' });
  const result = await fetchData(
    { url: urlHistoryMore, body: optionMore, token: currentUser?.token },
    dispatch,
  );
  if (result) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'success',
        message: 'Answer has been successfully generated',
      },
    });
    dispatch({ type: 'RESET_PRODUCT' });
    // setPage(1);
    dispatch({ type: 'UPDATE_PRODUCT', payload: result });
  }

  dispatch({ type: 'END_LOADING' });
};

export const getOptions = async (currentUser, dispatch) => {
  const result = await fetchData(
    { url, method: 'GET', token: currentUser?.token },
    dispatch,
  );
  if (result) {
    dispatch({ type: 'UPDATE_PRODUCTS', payload: result });
  }
};
