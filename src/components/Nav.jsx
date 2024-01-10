import React, { useState } from 'react';

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState('register'); // State to manage active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="navbar">
      <div
        className={`navbar-tab ${activeTab === 'register' ? 'active' : ''}`}
        onClick={() => handleTabClick('register')}
      >
        Register
      </div>
      <div
        className={`navbar-tab ${activeTab === 'login' ? 'active' : ''}`}
        onClick={() => handleTabClick('login')}
      >
        Login
      </div>
      
    </div>
  );
};

export default NavigationBar;