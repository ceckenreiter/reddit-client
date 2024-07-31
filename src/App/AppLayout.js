import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import ROUTES from "./Routes";

export default function AppLayout() {
    return (
        <div id='app-layout'>
            <nav>
                <NavLink to={ROUTES.home()}>HOME</NavLink>
                <NavLink to={ROUTES.myProfile()}>My Profile</NavLink>
                <NavLink to={ROUTES.complaintForm()}>Report Bug</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}