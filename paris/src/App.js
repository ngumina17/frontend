import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import IdeaList from './components/IdeaList'
import axios from "axios";

// import axios from "axios";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: {}
    };
  }
  componentDidMount() {
    const url = "http://localhost:4000/Paris";
    axios
      .get(url)
      .then(res => {
            // console.log(res.data)
            this.setState({
                ideas:res.data
            })
      })

  }

  render() {
    return (
      <div>
        <Header />
        <Form /> 
        <IdeaList 
        ideas={this.state.ideas}
        /> 
      </div>
    );
  }
}


export default App;