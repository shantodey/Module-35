import React from 'react';
import dolorimg from "../../assets/dollar icon.png";
import logo from "../../assets/logo.png";

const Navbar = ({ abCoine }) => {
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
              <li><a href="">Home</a></li>
              <li><a href="">Fixture</a></li>
              <li><a href="">Teams</a></li>
              <li><a href="">Schedules</a></li>
            </ul>
          </div>
          <img src={logo} alt="Website logo" className="h-10 w-auto" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">
            <li><a href="">Home</a></li>
            <li><a href="">Fixture</a></li>
            <li><a href="">Teams</a></li>
            <li><a href="">Schedules</a></li>
          </ul>
        </div>

        <div className="navbar-end">
          <button className="btn btn-ghost font-semibold">
            {abCoine} coin
            <img src={dolorimg} alt="Dollar Icon" className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;