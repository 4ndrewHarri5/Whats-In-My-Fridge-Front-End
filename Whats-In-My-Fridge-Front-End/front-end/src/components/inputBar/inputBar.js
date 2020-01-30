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

const InputBar = ({ label, name, initialValue = [], suggestions = [] }) => {
    const handleChange = e => {
        console.log(e.type, " ==> ", e.detail.tagify.value.map(item => item.value));
    };

    const settings = {
        ...baseTagifySettings,
        whitelist: suggestions,
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
        <Tags className="InputBar" settings={settings} initialValue={initialValue} />
    );

}

export default InputBar

