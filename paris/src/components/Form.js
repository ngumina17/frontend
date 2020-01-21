import React from 'react';


class Form extends React.Component {
state = {
    input: ''
}

    handleSubmit = (e) => {
        e.preventDefault()
        //grab the value from state and pass back up to App
        console.log('handleSubmit')
        //update state to clear the form
        this.setState ({
            input: ""
        })

    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type = "text" 
                    className = "form"
                    placeholder = "New Ideas"
                />
              <button className = "form">Submit</button>    
                
            </form>
        )
    }
}

export default Form ;