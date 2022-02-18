import React from 'react';
import unsplash from'../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

/*In charge of API request and displaying images*/
class App extends React.Component {
    state = {images: []};

    /*Axios and fetch are interchangeable methods for handling AJAX requests. With Axios, it handles the higher level scripts automatically*/
    onSearchSubmit= async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term}
            
        });
        this.setState({images: response.data.results});
    };

    render() {
        return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList images = {this.state.images} />
        </div>
        );
    }
}

export default App;