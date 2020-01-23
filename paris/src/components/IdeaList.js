import React, { Component } from "react";

class IdeaList extends Component {
  constructor(props) {
    super(props)
  }
    state = {
      favorited: true,
      ideas: ''
    };

  handleClickFav = () => {
    console.log('put')
    this.props.put(this.state.favorited)
  }

 
  renderResults = () => {
    const ideas = this.props.ideas;
    const favorite = this.props.favorited;
    if (Object.keys(ideas).length && ideas.length) {
      return (
        <div className="results-container">
          {ideas.map((idea, index) => {
            return (
              <div key={index} className="result-item">
                <p>{idea.idea}</p>
                <button onClick=
                {() => {this.props.put(idea._id, index, "favorite")}}>Fav</button>
                <button 
                  onClick=
                    { () =>{this.props.delete
                      (idea._id, index, "ideas")
                    }}
                >Delete</button>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <p>loading</p>;
    }
  };
  render() {
    console.log(this.props.ideas);
    return <>{this.renderResults()}</>;
  }
}






export default IdeaList;