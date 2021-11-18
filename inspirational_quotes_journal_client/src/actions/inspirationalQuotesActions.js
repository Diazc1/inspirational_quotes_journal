//create an action that is going to fetch the inspirational quotes from my api 
//already created a case in my reducer

export const fetchInspirationalQuotes = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/inspirational_quotes')
        .then(response => response.json())
        .then(inspirational_quotes => dispatch({ type: 'FETCH_INSPIRATIONAL_QUOTES', payload: inspirational_quotes}))
    }
}

export const addInspirationalQuote = inspirational_quote => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/inspirational_quotes', {
            method: 'POST',
            body: JSON.stringify(inspirational_quote),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(inspirational_quote => dispatch({ type: 'ADD_INSPIRATIONAL_QUOTE', payload: inspirational_quote}))
    }
}