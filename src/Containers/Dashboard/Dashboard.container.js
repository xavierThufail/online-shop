import React from 'react';

import DashboardComponent from './Dashboard.component';

const Dashboard = ({ selectedMenu }) => {
  return (
    <DashboardComponent selectedMenu={selectedMenu} />
  );
};

export default Dashboard;