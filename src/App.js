import React, { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';

import {  
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import MainNavigation from './components/mainNavigation/MainNavigation';
import SideBar from './components/sideBar/SideBar';
import Backdrop from './components/backdrop/Backdrop';


const App = () => {
    const [sideBarVisible, setSideBarVisible] = useState(false);

    const sideBarToggleClickHandler = () => setSideBarVisible((prevState) => !prevState);

    const backdropClickHandler = () => setSideBarVisible(false);

    let backdrop;

    if (sideBarVisible) {
        backdrop = <Backdrop click={backdropClickHandler} />

    }
    return (
        <div className="App">
            <Router>
                
                <MainNavigation sideBarToggleClickHandler={sideBarToggleClickHandler}/>
                <SideBar show={sideBarVisible}/>
                {backdrop}
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/projects' component={ProjectsPage} />
                    <Route path='/about' component={AboutPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App
