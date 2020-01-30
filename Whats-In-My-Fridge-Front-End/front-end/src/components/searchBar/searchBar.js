import React, { Component } from 'react';
import SearchBarStyle from './searchBar.css';
import Button from '../button/button';
import InputBar from '../inputBar/inputBar';
import SearchIcon from '../icons/search/searchIcon';

const SearchBar = (props) => {

      return (
      <div className="Rectangle">
        <div className="SearchBarStack">
          <SearchIcon></SearchIcon>
          <InputBar></InputBar>
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