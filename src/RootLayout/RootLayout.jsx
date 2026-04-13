import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar/NavBar';


const RootLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <h3>Footer</h3>
        </div>
    );
};

export default RootLayout;