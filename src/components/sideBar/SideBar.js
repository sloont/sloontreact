import React from 'react';
import { NavLink } from 'react-router-dom';
import './sideBar.css';

const SideBar = (props) => {
    let sideBarClasses = 'sideBar';
    if (props.show) {
        sideBarClasses = 'sideBar open';
    }

    return (
        <nav className={sideBarClasses}>
            <ul>
                <li><NavLink exact to="/">home.</NavLink></li>
                <li><NavLink to="/projects">projects.</NavLink></li>
                <li><NavLink to="/about">about.</NavLink></li>
            </ul>
        </nav>
    );
}
export default SideBar;