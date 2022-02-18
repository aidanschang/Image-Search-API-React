import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


//render the App from App.js file from components folder
ReactDOM.render(
    <App />, 
    document.querySelector('#root') //pass a reference to div with id= root in index.html file
    )
