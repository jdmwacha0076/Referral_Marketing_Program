// CommonLayout.js
import React from 'react';
import { FaHome, FaBox, FaSignOutAlt, FaUser, } from 'react-icons/fa';
import { NavLink, } from 'react-router-dom';
import '../styless.css';
import Footer from './footer';

const CommonLayout = ({ children }) => {
  return (
    <div className="common-container">
      <div className="upper-row">
        <div className="app-name">
          <h2 className='app-name-heading'>Referral Marketing Program</h2>
        </div>
        <div className="common-user-profile">
          <div className="profile-icon">
            <FaUser />
          </div>
          <div className="common-reward-info">
            <div className="reward-icon">

            </div>
            <span>Rewards: 10</span>
          </div>
        </div>
      </div>

      <nav className="common-navbar">
        <ul className="common-nav-list">
          <li>
            <NavLink to="/home" activeClassName="active-link" exact>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active-link">
              <FaBox /> Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active-link">
              <FaSignOutAlt /> Logout
            </NavLink>
          </li>
        </ul>
      </nav>


      <div className="common-content">{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
