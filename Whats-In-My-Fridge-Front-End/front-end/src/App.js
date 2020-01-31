import React, { Component } from "react";
import Classes from './App.css';
import Button from './components/button/button';
import SearchBar from "./components/searchBar/searchBar";

class App extends Component {

  inputChangedHandler = (e) => {
    console.log(e.type, " ==> ", e.detail.tagify.value.map(item => item.value));
  };

  render() {
    return (
      <div className={Classes.App}>
          <SearchBar
          inputChanged={(event) => this.inputChangedHandler(event)}
          ></SearchBar>
      </div>
    );
  }
}

export default App;