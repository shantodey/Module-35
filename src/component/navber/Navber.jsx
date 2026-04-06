import React from 'react';
import dolorimg from "../../assets/dollar icon.png";
import logo from "../../assets/logo-footer.png"
const navber = () => {
    return (
        <div className="container mx-auto">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <img src={logo} alt="" />
          </div>
          <div className="flex-none ">
            <ul className='flex gap-12'>
                <li><a href="">Home</a></li>
                <li><a href="">Fixture</a></li>
                <li><a href="">Teams</a></li>
                <li><a href="">Schedules</a></li>
            </ul>
            <button className="btn btn-square btn-ghost">
              <img src={dolorimg} alt="" />
            </button>
          </div>
        </div>
      </div>
    );
};

export default navber;