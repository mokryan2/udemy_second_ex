import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from "axios";

axios.interceptors.request.use(request => {
    console.log(request)
    return request
}, error => {
    console.log(error)
    return Promise.reject(error)
});

axios.interceptors.response.use(response => {
    console.log(response)
    return response
}, error => {
    console.log(error)
    return Promise.reject(error)
});

// An interceptor is set to "fire" when a request is made or received
// When compared to a "transform", which is a method used to modify outgoing/incoming data to fit specific formats,
// interceptors are used to receive the data, full request of the config, and the response object
// Typically these can be paired with an error handler to throw any errors that might arise.
// Request interceptors can be used to retreive a token from local storage and send w/ requests
// Response interceptors can be used to cat a 401 response and redirect to other pages.

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
