import React from 'react';
import { NavLink } from 'react-router';

const MyNav = ({to, children}) => {
    return (
        <div>
             <NavLink
        to={to}
        className={({ isActive }) =>
          ` text-2xl font-semibold ${isActive ? "text-purple-500 border-b border-purple-500" : ""}`
        }
      >
        {" "}
        {children}
      </NavLink>
        </div>
    );
};

export default MyNav;