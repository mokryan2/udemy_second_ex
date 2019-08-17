import React, { Component } from 'react';
import axios from "axios";
import Post from '../../components/Post/Post';
import './Blog.css';

class Blog extends Component {

    componentDidMount() {
        axios.get("/posts")
            // Note: Normally the full url would be placed here (https://jsonplaceholder.typicode.com), but in this case we established a global URL in index.js that handles it form us
            .then(response => {
                const posts = response.data.splice(0, 8);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Ryan"
                    }
                });
                // What happens here is the amount of posts have now been limited to only show 8 of the 100 total; the get method is still collecting everything though
                // Additionally, we're transforming the data just a touch to include a hard coded author
                this.setState({
                    posts: updatedPosts
                });
                // The change in state needs to be placed within the promise due to the fact the data is gathered asynchronously.
                // If placed outside the promise it wont work b/c the data wouldn't have been collected yet!
                console.log(response);
            })
            .catch(err => {
                this.setState({
                    error: true
                })
                // Sometime there might be a screw up that prevents the code from working properly...What you can do is set up a CATCH method to at least
                // look for the error and display a message saying something went wrong!
            })
    };
    // We use the componentDidMount method b/c the http request is condiered as a "Side-effect"
    // The fetching of data is considered a side effect because it's not neccesarrily triggering a rerender of the component; all that it's doing is updating data

    postSelectedHandler = (id) => {
        this.setState({
            selectedPostID: id
        });
    };

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Blog;