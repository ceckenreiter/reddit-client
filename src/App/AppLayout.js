import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import LoginButton from "../Components/LoginButton";

export default function AppLayout() {
    return (
        <div id='app-layout'>
            <nav>
                <NavLink to={'/'}>HOME</NavLink>
                <NavLink to={'/me'}>My Profile</NavLink>
                <NavLink to={'/report'}>Report Bug</NavLink>
                <LoginButton />
            </nav>
            <Outlet />
        </div>
    )
}



