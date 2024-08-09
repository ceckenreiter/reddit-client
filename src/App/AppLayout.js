import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function AppLayout() {
    return (
        <div id='app-layout'>
            <nav>
                <NavLink to={'/'}>HOME</NavLink>
                <NavLink to={'/me'}>My Profile</NavLink>
                <NavLink to={'/report'}>Report Bug</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}



