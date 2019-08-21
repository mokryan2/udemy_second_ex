import React, { Component } from 'react';
import axios from "axios";
import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            // Because we nested the Post component in a Link component, the param needs to be retrieved in a different manner
            // Additionally, we need to change to componentDidMount because it's loading a new route
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id)) {
                axios.get("/posts/" + this.props.match.params.id)
                    // Note: Normally the full url would be placed here (https://jsonplaceholder.typicode.com), but in this case we established a global URL in index.js that handles it form us
                    .then(response => {
                        this.setState({
                            loadedPost: response.data
                        })
                        console.log(response);
                    });
            };
            // There needs to be a secondary if statement nesting the get request to prevent an infinite loop from being triggered.
            // Because we would be updating the state, the componentDidMount would cause the request to infinitely run.
            // Additionally, the secondary if statement is checking for the initial state of loadedPost or if the initial post id has changed.
        };
    };
    // Because we don't want the get method to trigger immediately, we place the if statement before to prevent any unnecesarry processing.

    deletePostHandler = () => {
        axios.delete("/posts/" + this.props.id)
            // Note: Normally the full url would be placed here (https://jsonplaceholder.typicode.com), but in this case we established a global URL in index.js that handles it form us
            .then(response => {
                console.log(response, "Oi where did the post go???")
            })
    };
    // Much like the get specific post method, we need to target a specifc post ID as to delete the correct post.
    // Seeing as how the method to get a specific post is already targeted and implemented above, the same url should work with the delete method

    render() {
        let post = <p style={{ textAlign: "center", fontWeight: "bold" }}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{ textAlign: "center", fontWeight: "bold" }}>Pulling up your post!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button
                            className="Delete"
                            onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        };
        // There needs to be an additional if statement before the if statement that renders the component because the get request is happening asynchronously.
        // With the additional check the get request can process, and then the rendering of the component is set to happen after the state change has been established.
        return post;
    }
}

export default FullPost;