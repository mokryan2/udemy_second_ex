import React, { Component } from "react";

class Posts extends Component {
    state = {
        posts: [],
        selectedPostID: null,
        error: false
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
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;