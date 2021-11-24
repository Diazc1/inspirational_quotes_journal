//forms have local state because react likes controlled components, what that means is the value of our input fields are controlled by state
// so were not really going to initialize our state in our redux store
//we will have our local state that deals with it 
//local state and store state
//store state is our redux store global
//local state is our component state and its isolated and local to that component only


import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addInspirationalQuote } from '../actions/inspirationalQuotesActions'

class InspirationalQuotesForm extends Component {

    state = {
        quote: '',
        author: '',
        meaning: '',
        date: ''
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }


    handleSubmit = e => {
        e.preventDefault()
        this.props.addInspirationalQuote(this.state)
    }


    render() {
        return (
            <form className="new_quote" onSubmit={this.handleSubmit}>
                <label>Quote:</label>
                <input type='text' value={this.state.quote} onChange={this.handleChange} name="quote"/>
                <br/>
                <br/>
                <label>Author:</label>
                <input type='text' value={this.state.author} onChange={this.handleChange} name="author"/>
                <br/>
                <br/>
                <label>What Does It Mean To You:</label>
                <input type='text' value={this.state.meaning} onChange={this.handleChange} name="meaning"/>
                <br/>
                <br/>
                <label>Today's Date:</label>
                <input type='text' value={this.state.date} onChange={this.handleChange} name="date"/>
                <br/>
                <br/>
                <input type='submit' value="Create Inspirational Quote" />
            </form>
        )
    }
}

export default connect(null, { addInspirationalQuote })(InspirationalQuotesForm);