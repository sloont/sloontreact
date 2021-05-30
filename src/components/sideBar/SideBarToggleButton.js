import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import './sideBar.css';

const SideBarToggleButton = (props) => (
    <button className="sideBar__toggle" onClick={props.click}><BsThreeDotsVertical /></button>
);
export default SideBarToggleButton;