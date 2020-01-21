import React, { Component } from 'react';


class IdeaList extends Component {
    constructor(props) {
        super(props)
    }

      renderResults = () => {
        const { ideas } = this.state
        if ( Object.keys (ideas).length && ideas.length){
            return(
                <div className='results-container'>
                    {ideas.map( idea => {
                        return(
                            <div key= { idea._id } className="result-item">
                                <p>{idea.idea}</p>
                                {/* <div>{idea.favorited}</div> */}
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
      render() {
          console.log(props)
          return (
              <>
              {/* {this.renderResults()} */}
              </>
          )
      }
    }






export default IdeaList;