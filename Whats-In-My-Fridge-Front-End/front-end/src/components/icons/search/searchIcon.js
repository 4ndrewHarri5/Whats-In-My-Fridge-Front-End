
import React, { Component } from 'react';
import './searchIcon.css'
import SearchIcon from '../../../images/SearchIcon.png';

const InputBar = (props) => {

    const Icon = {
        backgroundImage: 'url('+SearchIcon+')',
        //backgroundSize: '100% 100%',
    };


    return (
        <div className="SearchIcon" style={Icon} />
    )
}

export default InputBar
   
   