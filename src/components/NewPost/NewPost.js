import React, { Component } from 'react';
import axios from "axios";
import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    };

    addPostHandler = () => {
        const post = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        };
        axios.post("/posts", post)
            .then(response => {
                console.log(response)
            });
    };
    // In this case because the server that's providing the data can't save anything, we are able to at least see that the post is being seen and recorded to the console.
    // Remember back to the first udemy example in terms of how all the user input can be rendered dynamically!

    render() {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={(event) =>
                        this.setState({
                            title: event.target.value
                        })}
                />
                <label>Content</label>
                <textarea rows="4"
                    value={this.state.content}
                    onChange={(event) =>
                        this.setState({
                            content: event.target.value
                        })} />
                <label>Author</label>
                <select
                    value={this.state.author}
                    onChange={(event) =>
                        this.setState({
                            author: event.target.value
                        })}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button
                    onClick={this.addPostHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;