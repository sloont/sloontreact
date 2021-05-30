import React from 'react';
import { NavLink } from 'react-router-dom';
import './mainNavigation.css';
import SideBarToggleButton from '../sideBar/SideBarToggleButton';

const MainNavigation = (props) => (
    <header className='main-navigation'>
        <SideBarToggleButton click={props.sideBarToggleClickHandler}/>
        <div className='main-navigation__logo'>
            <h1>sloont.</h1>
        </div>
        <div className="spacer" />
        <nav className='main-navigation__items'>
            <ul>
                <li><NavLink exact to='/'>home.</NavLink></li>
                <li><NavLink to='/projects'>projects.</NavLink></li>
                <li><NavLink to='/about'>about.</NavLink></li>
            </ul>
        </nav>
    </header>
);

export default MainNavigation;