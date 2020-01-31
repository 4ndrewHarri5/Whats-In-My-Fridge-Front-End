import React, { Component } from 'react';
import SearchBarStyle from './searchBar.css';
import Button from '../button/button';
import InputBar from '../inputBar/inputBar';
import SearchIcon from '../icons/search/searchIcon';

const SearchBar = (props) => {

    let ingredients;

    const inputChanged = (e) => {
      console.log(e.type, " ==> ", e.detail.tagify.value.map(item => item.value));
      ingredients = e.detail.tagify.value.map(item => item.value).join(',');
    }

    return (
    <div className="Rectangle">
      <div className="SearchBarStack">
        <SearchIcon></SearchIcon>
        <InputBar 
        inputChanged={inputChanged}
        suggestions = {[]}
        initalValue = {[]}
        ></InputBar>
        <Button
          onClick={() => console.log("button clicked")}
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--large"
        >
          Find Recipes
        </Button>
      </div>
    </div>
    )
}

export default SearchBar