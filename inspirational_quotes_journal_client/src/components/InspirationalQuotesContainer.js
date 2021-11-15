import React, { Component } from "react";
//connect my react component to my redux action
import { connect } from "react-redux";

import { fetchInspirationalQuotes } from '../actions/inspirationalQuotesActions';

class InspirationalQuotesContainer extends Component {

    componentDidMount() {
        this.props.fetchInspirationalQuotes()
    }



    render() {
        return (
            <div>
                Inspirational Quotes Container
            </div>
        );
    }
}

export default connect(null, { fetchInspirationalQuotes })(InspirationalQuotesContainer);