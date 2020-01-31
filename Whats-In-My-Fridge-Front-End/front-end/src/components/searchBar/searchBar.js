import React, { Component, useState, useEffect } from "react";
import SearchBarStyle from './searchBar.css';
import Button from '../button/button';
import InputBar from '../inputBar/inputBar';
import SearchIcon from '../icons/search/searchIcon';

const SearchBar = (props) => {

    const [ingredients, setIngredients] = useState()

    useEffect(() => {}, [ingredients])

    const inputChanged = (e) => {
      console.log("input changed");
      setIngredients(e.detail.tagify.value.map(item => item.value).join(','));
    }

    const buttonClick = () => {
      props.buttonClicked(ingredients)
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
          onClick={buttonClick}
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