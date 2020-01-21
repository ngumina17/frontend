import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import IdeaList from './components/IdeaList'
// import axios from "axios";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form /> 
        <IdeaList /> 
      </div>
    );
  }
}


export default App;