import React, { Component } from "react";
import Classes from './App.css';
import Button from './components/button/button';
import SearchBar from "./components/searchBar/searchBar";


class App extends Component {

  constructor(props) {
    super(props)
    this.state = { ingredients: '' };
  }


  inputChangedHandler = (passedIngredients) => {
    this.setState({ingredients: passedIngredients})
    console.log(this.state.ingredients);
  };

  render() {
    return (
      <div className={Classes.App}>
          <SearchBar
          buttonClicked={this.inputChangedHandler}
          ></SearchBar>
      </div>
    );
  }
}

export default App;