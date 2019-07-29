import React, { Component } from 'react';
import axios from "axios";
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
    };
    // We use the componentDidMount method b/c the http request is condiered as a "Side-effect"
    // The fetching of data is considered a side effect because it's not neccesarrily triggering a rerender of the component; all that it's doing is updating data

    render() {
        return (
            <div>
                <section className="Posts">
                    <Post />
                    <Post />
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;