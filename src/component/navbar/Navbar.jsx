import React from 'react';
import dolorimg from "../../assets/dollar icon.png";
import logo from "../../assets/logo-footer.png"
const navber = ({abCoine}) => {
    return (
        <div className="container mx-auto">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <img src={logo} alt="Website logo" />
          </div>
          <div className="flex">
            <ul className='flex gap-12'>
                <li><a href="">Home</a></li>
                <li><a href="">Fixture</a></li>
                <li><a href="">Teams</a></li>
                <li><a href="">Schedules</a></li>
            </ul>
            <button className="btn btn-square btn-ghost">
              {abCoine} coin
              <img src={dolorimg} alt="Doler Icon" />
            </button>
          </div>
        </div>
      </div>
    );
};

export default navber;