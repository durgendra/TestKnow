import fetchData from './utils/fetchData';

const url = process.env.REACT_APP_SERVER_URL + '/newsQuiz';
const urlQuiz = process.env.REACT_APP_SERVER_URL + '/newsQuiz/quiz';
const urlStatement =
  process.env.REACT_APP_SERVER_URL + '/newsQuiz/statementquiz';

export const createNews = async (
  newsProduct,
  currentUser,
  dispatch,
  setPage,
) => {
  dispatch({ type: 'START_LOADING' });
  const result = await fetchData(
    { url: url, body: newsProduct, token: currentUser?.token },
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
    dispatch({ type: 'RESET_NEWSQUIZ' });
    // setPage(1);
    dispatch({ type: 'UPDATE_NEWSPRODUCT', payload: result });
  }

  dispatch({ type: 'END_LOADING' });
};

// export const createQuiz = async (product, currentUser, dispatch, setPage) => {
//   dispatch({ type: 'START_LOADING' });
//   const result = await fetchData(
//     { url: urlQuiz, body: product, token: currentUser?.token },
//     dispatch,
//   );
//   if (result) {
//     dispatch({
//       type: 'UPDATE_ALERT',
//       payload: {
//         open: true,
//         severity: 'success',
//         message: 'Quiz have been generated successfully',
//       },
//     });
//     dispatch({ type: 'RESET_PRODUCT' });
//     // setPage(1);
//     dispatch({ type: 'UPDATE_PRODUCT', payload: result });
//   }

//   dispatch({ type: 'END_LOADING' });
// };

// export const createStatementQuiz = async (
//   product,
//   currentUser,
//   dispatch,
//   setPage,
// ) => {
//   dispatch({ type: 'START_LOADING' });
//   const result = await fetchData(
//     { url: urlStatement, body: product, token: currentUser?.token },
//     dispatch,
//   );
//   if (result) {
//     dispatch({
//       type: 'UPDATE_ALERT',
//       payload: {
//         open: true,
//         severity: 'success',
//         message: 'Quiz have been generated successfully',
//       },
//     });
//     dispatch({ type: 'RESET_PRODUCT' });
//     // setPage(1);
//     dispatch({ type: 'UPDATE_PRODUCT', payload: result });
//   }

//   dispatch({ type: 'END_LOADING' });
// };
