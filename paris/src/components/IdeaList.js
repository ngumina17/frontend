import React, { Component } from "react";

class IdeaList extends Component {
  renderResults = () => {
    const ideas = this.props.ideas;
    if (Object.keys(ideas).length && ideas.length) {
      return (
        <div className="results-container">
          {ideas.map(idea => {
            return (
              <div key={idea._id} className="result-item">
                <p>{idea.idea}</p>
                {/* <div>{idea.favorited}</div> */}
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