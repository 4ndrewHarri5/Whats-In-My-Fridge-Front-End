import React, { Component } from 'react';
import InputStyles from './inputBar.css';
import Tags from "@yaireo/tagify/dist/react.tagify";

const baseTagifySettings = {
    blacklist: [],
    backspace: "edit",
    placeholder: "Enter Ingredients",
    editTags: 1,
    dropdown: {
      enabled: 0
    },
    callbacks: {}
};

const InputBar = (props) => {
    const handleChange = props.inputChanged;
    
    
    /*e => {
        console.log(e.type, " ==> ", e.detail.tagify.value.map(item => item.value));
    };*/

    const settings = {
        ...baseTagifySettings,
        whitelist: props.suggestions,
        callbacks: {
        add: handleChange,
        remove: handleChange,
        blur: handleChange,
        edit: handleChange,
        invalid: handleChange,
        click: handleChange,
        focus: handleChange,
        "edit:updated": handleChange,
        "edit:start": handleChange
        }
    };

    return (
        <Tags className="InputBar" settings={settings} initialValue={props.initialValue} />
        //<input className="InputBar" placeholder="ajsfhs"></input>
    );

}

export default InputBar

