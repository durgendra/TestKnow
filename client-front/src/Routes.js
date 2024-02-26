import React from 'react';
import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import viewsRoutes from 'views/routes';
import Dashboard from 'main/pages/dashboard/Dashboard';
import Home from 'main/pages/Home';
import DailyKTs from 'views/DailyKTs/DailyKTs';

const Routes = () => {
  return (
    <ReactRoutes>
      {viewsRoutes.map((item, i) => (
        <Route key={i} path={item.path} element={item.renderer()} />
      ))}
      <Route path="*" element={<Navigate replace to="/not-found-cover" />} />
      <Route path="faq/*" element={<Home />} />
      <Route path="dashboard/*" element={<Dashboard />} />
      {/* <Route path="dailykt/*" element={<DailyKTs />} /> */}
    </ReactRoutes>
  );
};

export default Routes;
