import React from 'react';
import { NavLink } from 'react-router-dom';

const Paper = ({ children, minHeight, style }) => (
  <div style={{
    border: '1px 1px 1px 1px black',
    boxShadow: '3px 3px #DDD, -3px 3px 3px #DDD ', 
    backgroundColor: 'white', 
    minHeight: minHeight,
    overflow: 'auto',
    clear: 'both',
    minHeight: '93vh',
    ...style
  }}>
    {children}
  </div>
);

const Tab = ({ link, tabName, onClick }) => (
    <NavLink
      className="col-sm-2 col-xs-12 text-center"
      to={link}
      exact
      onClick={onClick}
      activeStyle={{ backgroundColor: '#28C', color: 'white', height: '6vh' }}
      style={{ textDecoration: 'none', color: '#000', height: '36px', width: '100%', fontSize: '18px', float: 'bottom' }}
    >
      {tabName}
    </NavLink>
);

const Tabs = ({ tabs }) => (
    <div className="row">{tabs.map((tab, index) => (
        <Tab key={index} link={tab.link} tabName={tab.tabName} />
    ))}</div>
);

const Menu = ({ toggleOpen, open, tabs }) => (
  <div>
    <div>{open && tabs.map((tab, index) => (
      <Tab key={index} link={tab.link} onClick={toggleOpen} tabName={tab.tabName} />
    ))}</div>
  </div>
);

export { Tabs, Paper, Menu };
