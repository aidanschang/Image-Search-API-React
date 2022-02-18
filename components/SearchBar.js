import React from 'react';

/*Once user input has entered, send the input back to App.js instead refreshing the page*/
class SearchBar extends React.Component {
    state = {term: ''};
    
    /*prevent submitting the form by default, instead, send state.term object to propr.onSubmit */
    onFormSubmit = event => {
        event.preventDefault(); 
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
        <div className="ui segment">
            <form onSubmit = {this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                <input 
                    type="text" 
                    /*setting a controlled element so React is controlling the value instead letting HTML controlling the element */
                    value= {this.state.term} 
                    onChange= {e => this.setState({ term: e.target.value})}
                />
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;