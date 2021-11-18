import React from "react";
import { connect } from "react-redux";
import InspirationalQuotesContainer from './InspirationalQuotesContainer';


const InspirationalQuotesList = ({ inspirational_quotes }) => {
    return (
        <div>
            
            <h1>Inspirational Quotes List:</h1>
                {inspirational_quotes.map(inspirational_quote => 
                    <ul key={inspirational_quote.id}>
                        <li >
                            {inspirational_quote.quote} - {inspirational_quote.author} - {inspirational_quote.meaning} - {inspirational_quote.date}
                        </li>
                    </ul>
                )}
        <InspirationalQuotesContainer />
        </div>
    );
};


const mapStateToProps = state => {
    return { inspirational_quotes: state.inspirational_quotes}
}

export default connect(mapStateToProps)(InspirationalQuotesList);