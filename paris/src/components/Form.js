import React from 'react';
import axios from 'axios';


class Form extends React.Component {
  state = {
    input: ""
  };

  handleChange = (e) => {
      console.log(e.target.value)
      const value = e.target.value;
      this.setState ({
          input: e.target.value
      })
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/Paris", {
        idea: this.state.input
      })
      .then(res => {});
    //   this.props.addIdea(this.state.input)
    this.setState({
      input: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" className="form" placeholder="New Ideas" onChange={this.handleChange}/>
        <button className="form">Submit</button>
      </form>
    );
  }
}

export default Form ;