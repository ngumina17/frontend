import React from 'react';
// import axios from 'axios';


class Form extends React.Component {
    constructor(props) {
        super(props)
    }
  state = {
    input: ""
  };

  handleChange = (e) => {
    //   console.log(e.target.value)
      const value = e.target.value;
      this.setState ({
          input: e.target.value
      })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.input)
    
    // axios
    //   .post("http://localhost:4000/Paris", {
    //     idea: this.state.input
    //   })
    //   .then(res => {});
    // this.setState({
    //   input: ''
    // });

   this.props.submit(this.state.input)
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