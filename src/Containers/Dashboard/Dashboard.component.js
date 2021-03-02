import React, { useState } from 'react';

import { Navbar } from '../../Components';

const DashboardComponent = () => {
  const [selectedMenu, setSelectedMenu] = useState('Atasan');

  return (
    <div>
      <Navbar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      Dashboard
    </div>
  );
};

export default DashboardComponent;