import React from "react";
import { connect } from "react-redux";
import InspirationalQuotesContainer from './InspirationalQuotesContainer';


const InspirationalQuotesList = ({ inspirational_quotes }) => {
    return (
        <div>
            <div className="quotes_list">
                <h1>Inspirational Quotes List:</h1>
                    {inspirational_quotes.map(inspirational_quote => 
                            <ul key={inspirational_quote.id}>
        
                                    <h5>{inspirational_quote.date}</h5>
                                    Quote: {inspirational_quote.quote} 
                                    <br/>
                                    Author: {inspirational_quote.author}  
                                    <br/>
                                    What Does It Mean To You: {inspirational_quote.meaning}
                            </ul>
                    )}
            </div>
            <InspirationalQuotesContainer />
        </div>
    );
};


const mapStateToProps = state => {
    return { inspirational_quotes: state.inspirational_quotes}
}

export default connect(mapStateToProps)(InspirationalQuotesList);