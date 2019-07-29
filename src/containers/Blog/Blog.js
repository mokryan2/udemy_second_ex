import React, { Component } from 'react';
import axios from "axios";
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: []
    };

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
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
            });
    };
    // We use the componentDidMount method b/c the http request is condiered as a "Side-effect"
    // The fetching of data is considered a side effect because it's not neccesarrily triggering a rerender of the component; all that it's doing is updating data

    render() {
        const posts = this.state.posts.map(post => {
            return <Post
                title={post.title}
                author={post.author}
                key={post.id}
            />
            // Because of the componentDidMount method called before the render method, we can now collect the data from the URL
            // What we then do after changing the state to include all the data from the URL is to save it into a new array to maintain immutable data and then map it out
            // Finally, the mapped data is then utilized in the Post component by calling the data through the props method and then rendered via the constant posts
        });
        return (
            <div>
                <section className="Posts">
                    {posts}
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