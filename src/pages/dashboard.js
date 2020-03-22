import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { Router } from '@reach/router';
import Layout from '../components/layout';
import Profile from '../components/profile';
import RouteBase from '../components/route-base.js';
import RouteSecret from '../components/route-secret.js';
import RouteLogin from '../components/route-login.js';

const Dashboard = ({ location }) => {
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate('/dashboard/login', { replace: true });
    }
  }, []);

  return (
    <Layout>
      <Profile />
      <Router>
        <RouteBase path='/dashboard/base' />
        <RouteSecret path='/dashboard/secret' />
        <RouteLogin path='/dashboard/login' />
      </Router>
    </Layout>
  );
};

export default Dashboard;
