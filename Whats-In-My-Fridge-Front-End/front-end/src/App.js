import React, { Component } from "react";
import Classes from './App.css';
import Button from './components/button/button';
import SearchBar from "./components/searchBar/searchBar";

class App extends Component {
  render() {
    return (
      <div className={Classes.App}>
          <SearchBar></SearchBar>
      </div>
    );
  }
}

export default App;