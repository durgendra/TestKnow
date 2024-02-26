import fetchData from './utils/fetchData';
// import { v4 as uuidv4 } from 'uuid';
// import uploadFile from '../firebase/uploadFile';

const url = process.env.REACT_APP_SERVER_URL + '/user';
const urlCredit = process.env.REACT_APP_SERVER_URL + '/user/credit';

export const register = async (user, dispatch) => {
  dispatch({ type: 'START_LOADING' });

  const result = await fetchData(
    { url: url + '/register', body: user },
    dispatch,
  );
  if (result) {
    dispatch({ type: 'UPDATE_USER', payload: result });
    dispatch({ type: 'CLOSE_LOGIN' });
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'success',
        message: 'Your account has been created successfully',
      },
    });
  }

  dispatch({ type: 'END_LOADING' });
};

export const googleRegister = async (token, dispatch) => {
  dispatch({ type: 'START_LOADING' });

  const result = await fetchData(
    { url: url + '/google-register', token: token },
    dispatch,
  );
  if (result) {
    dispatch({
      type: 'UPDATE_USER',
      payload: {
        id: result.id,
        email: result.email,
        name: result.name,
        photoURL: result.photoURL,
        token,
        google: true,
      },
    });
    dispatch({ type: 'CLOSE_LOGIN' });
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'success',
        message: 'Google login successful',
      },
    });
  }

  dispatch({ type: 'END_LOADING' });
};

export const login = async (user, dispatch) => {
  dispatch({ type: 'START_LOADING' });

  const result = await fetchData({ url: url + '/login', body: user }, dispatch);
  if (result) {
    dispatch({ type: 'UPDATE_USER', payload: result });
    dispatch({ type: 'CLOSE_LOGIN' });
  }

  dispatch({ type: 'END_LOADING' });
};

export const updateProfile = async (currentUser, updatedFields, dispatch) => {
  dispatch({ type: 'START_LOADING' });

  const { name, file } = updatedFields;
  let body = { name };
  try {
    if (file) {
      // const imageName = uuidv4() + "." + file?.name?.split(".")?.pop();
      // const photoURL = await uploadFile(
      //   file,
      //   `profile/${currentUser?.id}/${imageName}`
      // );
      // body = { ...body, photoURL };
    }
    const result = await fetchData(
      {
        url: url + '/updateProfile',
        method: 'PATCH',
        body,
        token: currentUser.token,
      },
      dispatch,
    );
    if (result) {
      dispatch({ type: 'UPDATE_USER', payload: { ...currentUser, ...result } });
      dispatch({
        type: 'UPDATE_ALERT',
        payload: {
          open: true,
          severity: 'success',
          message: 'Your profile has been updated successfully',
        },
      });
      dispatch({
        type: 'UPDATE_PROFILE',
        payload: { open: false, file: null, photoURL: result.photoURL },
      });
    }
  } catch (error) {
    dispatch({
      type: 'UPDATE_ALERT',
      payload: {
        open: true,
        severity: 'error',
        message: error.message,
      },
    });
    console.error(error);
  }

  dispatch({ type: 'END_LOADING' });
};

export const getUsers = async (dispatch) => {
  // const result = await fetchData({ url, method: 'GET' }, dispatch);
  // if (result) {
  //   dispatch({ type: 'UPDATE_USERS', payload: result });
  // }
};

export const updateStatus = (updatedFields, userId, dispatch) => {
  return fetchData(
    {
      url: `${url}/updateStatus/${userId}`,
      method: 'PATCH',
      body: updatedFields,
    },
    dispatch,
  );
};

export const getCreditAPI = async (currentUser) => {
  const result = await fetchData({
    url: urlCredit,
    method: 'GET',
    token: currentUser?.token,
  });
  if (result) {
    // console.log(result);
    return result;
  }
};
