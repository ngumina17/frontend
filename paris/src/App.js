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
      ideas: [],
      favorited: false
    };
  }
  componentDidMount() {
    this.getData()
    // const url = "http://localhost:4000/Paris";
    // axios.get(url).then(res => {
    //   // console.log(res.data)
    //   this.setState({
    //     ideas: res.data,
    //     favorited: res.data
       
    //   });
    // });
  }

  getData () {
      const url = "http://localhost:4000/Paris";
      axios.get(url).then(res => {
        // console.log(res.data)
        this.setState({
          ideas: res.data,
          favorited: res.data
         
        });
      });
    }
  



  handleDelete = (id, arrayIndex, currentArray) => {
    axios
      .delete(`http://localhost:4000/Paris/${id}`)
      .then(res => {
        this.removeFromArray(currentArray, arrayIndex)
      }).then(() => {
        this.getData()
      });

  };

  removeFromArray = (array, arrayIndex) =>{
    this.setState((prevState) =>{
      prevState[array].splice(arrayIndex, 1)
    })
  }

  handlePost = e => {
    // console.log(e);
    axios
      .post("http://localhost:4000/Paris", {
        idea: e, favorited: false
      })
      .then(res => {
        this.setState({
          ideas: [...this.state.ideas,{idea:e}]
        });
      });

  };

  handlePut = (id, arrayIndex, currentArray) =>{
    let toggleTrue = !this.state.ideas[arrayIndex].favorited
    axios
      .put(`http://localhost:4000/Paris/${id}`,
      {"idea": this.state.ideas[arrayIndex].idea, "favorited": toggleTrue} )
      .then (res => {
        console.log('put')
      }).then(() => this.getData())

  }


  render() {
    console.log(this.state.ideas)
    return (
      <div>
        <Header />
        <Form submit={this.handlePost} />
        <IdeaList 
          ideas={this.state.ideas} 
          put={this.handlePut} 
          delete={this.handleDelete}
          favorite={this.state.favorited}
        />
      </div>
    );
  }
}


export default App;