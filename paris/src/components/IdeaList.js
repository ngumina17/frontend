import React, { Component } from 'react';
import axios from "axios";

class IdeaList extends Component {
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
          return (
              <>
              {this.renderResults()}
              </>
          )
        // var data = this.state.meal;
        // return (
        //   <div className="App">
        //     {data.length > 0 && <RecipeContainer meals={data} />}
        //   </div>
   
        // );
      }
    }






export default IdeaList;