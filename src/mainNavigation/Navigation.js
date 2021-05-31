import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button
} from '@material-ui/core';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

const Navigation = () => {

    return (
        <AppBar position="fixed" color='primary'>
            <Toolbar>
                <IconButton>
                    <DirectionsWalkIcon fontSize="large"/> 
                </IconButton>
                <Typography variant="h3">
                sloont.
                </Typography>
                <div className="spacer" style={{flex: 1}} />
                <Button component={NavLink} exact to="/">home.</Button>
                <Button component={NavLink} to="/projects">projects.</Button>
                <Button component={NavLink} to="/about">about.</Button>
            
            </Toolbar>
        </AppBar>
        
    );
};

export default Navigation;