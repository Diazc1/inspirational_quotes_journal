import React, { Component } from "react";
//connect my react component to my redux action
import { connect } from "react-redux";
//container houses other components

import { fetchInspirationalQuotes } from '../actions/inspirationalQuotesActions';
//import form and mount 
import InspirationalQuotesForm from "./InspirationalQuotesForm";

class InspirationalQuotesContainer extends Component {

    componentDidMount() {
        this.props.fetchInspirationalQuotes()
    }

    render() {
        return (
            <div>
                <InspirationalQuotesForm />
            </div>
        );
    }
}

export default connect(null, { fetchInspirationalQuotes })(InspirationalQuotesContainer);