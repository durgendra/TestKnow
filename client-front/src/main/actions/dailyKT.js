import fetchData from './utils/fetchData';

const url = process.env.REACT_APP_SERVER_URL + '/dailyKT';

export const createDailyKT = async (
  dailyKT,
  currentUser,
  dispatch,
  setPage,
) => {
  dispatch({ type: 'START_LOADING' });
  const result = await fetchData(
    { url, body: dailyKT, token: currentUser?.token },
    dispatch,
  );
  if (result) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'success',
        message: 'Daily Knowledge test has been added successfully',
      },
    });
    dispatch({ type: 'RESET_DAILYKT' });
    // setPage(0);
    dispatch({ type: 'UPDATE_DAILYKT', payload: result });
  }

  dispatch({ type: 'END_LOADING' });
};

export const getDailyKTs = async (dispatch) => {
  const result = await fetchData({ url, method: 'GET' }, dispatch);
  if (result) {
    dispatch({ type: 'UPDATE_DAILYKTS', payload: result });
  }
};

export const getDailyKTSingle = async (dailyktID, dispatch) => {
  const result = await fetchData(
    { url: `${url}/${dailyktID}`, method: 'GET' },
    dispatch,
  );
  if (result) {
    dispatch({ type: 'UPDATE_DAILYKT', payload: result });
  }
};
