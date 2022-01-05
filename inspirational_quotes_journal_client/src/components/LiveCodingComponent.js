import React, { Component } from "react";



class LiveCodingComponent extends Component {

    state = {
        comment: ''
    }


    handleChange = e => {

        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.comment}</div> 
                <form>
                    <input 
                        type="text"
                        value={this.state.comment}
                        onChange={this.handleChange} 
                        name="comment"
                    />
                </form>
            </div>
        );
    }

}

export default LiveCodingComponent;









