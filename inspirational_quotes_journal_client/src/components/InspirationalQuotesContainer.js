import React, { Component } from "react";
//connect my react component to my redux action
import { connect } from "react-redux";

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
                Inspirational Quotes Container
                <InspirationalQuotesForm />
            </div>
        );
    }
}

export default connect(null, { fetchInspirationalQuotes })(InspirationalQuotesContainer);