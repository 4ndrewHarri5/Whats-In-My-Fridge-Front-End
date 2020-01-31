import axios from 'axios';
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
    console.log("pressed find recipes");
    getRecipeFromIngredients(ingredients);
  }

  const getRecipeFromIngredients = (ingredients) => axios.get(`http://localhost:8080/cookbook/${ingredients}`)
  .then(response => {
    console.log("from method getRecipeFromIngredients", response.data)
    return response.data
  }).then(data => {
    props.passRecipes(data)
  }).catch((error) => {
    console.log(error)
    if (error.response && error.response.status === 404) {
      return `\u2014`;
    };
  });

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