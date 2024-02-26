import fetchData from './utils/fetchData';

const urlTextBook = process.env.REACT_APP_SERVER_URL + '/textbook';

export const createTextBook = async (
  textBook,
  currentUser,
  dispatch,
  setPage,
) => {
  dispatch({ type: 'START_LOADING' });
  const result = await fetchData(
    { url: urlTextBook, body: textBook, token: currentUser?.token },
    dispatch,
  );
  if (result) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'success',
        message: 'TextBook chapter document has been added successfully',
      },
    });
    dispatch({ type: 'RESET_TEXTBOOK' });
    dispatch({ type: 'RESET_TEXTBOOKDOCS' });
    // setPage(0);
    dispatch({ type: 'UPDATE_TEXTBOOK', payload: result });
  }

  dispatch({ type: 'END_LOADING' });
};

export const getTextBooks = async (dispatch) => {
  const result = await fetchData({ url: urlTextBook, method: 'GET' }, dispatch);
  if (result) {
    dispatch({ type: 'UPDATE_TEXTBOOKS', payload: result });
  }
};
