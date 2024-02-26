import React from 'react';
import NavBar from '../components/NavBar';
import Login from '../components/user/Login';
import Notification from '../components/Notification';
import Loading from '../components/Loading';
import WithThreeColumns from './WithThreeColumns/WithThreeColumns';
import Protected from '../components/protected/Protected';
import DailyKTs from 'views/DailyKTs/DailyKTs';

const Home = () => {
  return (
    <>
      <Loading />
      <Notification />
      <Login />
      <Protected>
        <WithThreeColumns />
        {/* <NavBar /> */}
        {/* <BottomNav /> */}
        {/* <Room /> */}
        {/* <Summary /> */}
      </Protected>
    </>
  );
};

export default Home;
