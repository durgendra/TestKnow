import fetchData from './utils/fetchData';

const urlStartQuiz = process.env.REACT_APP_SERVER_URL + '/startquiz';
const urlStartQuizDaily = process.env.REACT_APP_SERVER_URL + '/startquiz/daily';

export const createStartQuiz = async (
  product,
  currentUser,
  dispatch,
  setPage,
) => {
  dispatch({ type: 'START_LOADING' });
  const result = await fetchData(
    { url: urlStartQuiz, body: product, token: currentUser?.token },
    dispatch,
  );
  if (result) {
    dispatch({ type: 'RESET_STARTQUIZID' });
    dispatch({ type: 'UPDATE_STARTQUIZID', payload: result._id });
    dispatch({ type: 'END_LOADING' });

    return result.quizBody;
  } else {
    dispatch({ type: 'END_LOADING' });
  }
};

export const createStartQuizDaily = async (
  product,
  currentUser,
  dispatch,
  setPage,
) => {
  dispatch({ type: 'START_LOADING' });
  // console.log(dailyktID);
  const result = await fetchData(
    { url: urlStartQuizDaily, body: product, token: currentUser?.token },
    dispatch,
  );
  if (result) {
    dispatch({ type: 'RESET_STARTQUIZID' });
    dispatch({ type: 'UPDATE_STARTQUIZID', payload: result._id });
    dispatch({ type: 'END_LOADING' });
    return result.quizBody;
  } else {
    dispatch({ type: 'END_LOADING' });
  }
};

export const updateStartQuiz = async (
  startQuizId,
  updatedFields,
  currentUser,
  dispatch,
) => {
  dispatch({ type: 'START_LOADING' });
  // console.log(dailyktID);
  const result = await fetchData(
    {
      url: `${urlStartQuiz}/updateStatus/${startQuizId}`,
      method: 'PATCH',
      body: updatedFields,
      token: currentUser?.token,
    },
    dispatch,
  );
  if (result) {
    dispatch({ type: 'END_LOADING' });
    return result.quizBody;
  } else {
    dispatch({ type: 'END_LOADING' });
  }
};

export const getAssessmentSingle = async (
  assessmentId,
  currentUser,
  dispatch,
) => {
  console.log(assessmentId);
  const result = await fetchData(
    {
      url: `${urlStartQuiz}/${assessmentId}`,
      method: 'GET',
      token: currentUser?.token,
    },
    dispatch,
  );
  if (result) {
    // console.log(result);
    return result;
  } else {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'error',
        message: "Server error. Result can't be fetched now",
      },
    });
  }
};
