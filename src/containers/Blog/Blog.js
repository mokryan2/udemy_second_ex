import React, { Component } from 'react';
import axios from "axios";
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostID: null,
        error: false
    };

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
        let posts = <p style={{ textAlign: "center" }}>Something went wrong (╯°w°)╯︵ ┻━┻</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}
                    key={post.id}
                />
                // Because of the componentDidMount method called before the render method, we can now collect the data from the URL
                // What we then do after changing the state to include all the data from the URL is to save it into a new array to maintain immutable data and then map it out
                // Finally, the mapped data is then utilized in the Post component by calling the data through the props method and then rendered via the constant posts
            });
        };
        // To account for the possibility of an error, we needed to reorganize this part specifically just to display the error in the event there is an issue with some part of the method.
        // It's always good to account for the possibility of an error because it'll allow the developer (i.e. you) to try and keep an eye on your code

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost
                        id={this.state.selectedPostID}
                    />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;