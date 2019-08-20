import React, { Component } from 'react';
import Posts from "./Posts/Posts"
import NewPost from "./NewPost/NewPost";
import { Route, Link } from "react-router-dom";
import './Blog.css';

class Blog extends Component {

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-subit=true"
                            }}>New Post</Link></li>
                            {/* An important thing to note about this usage of the Link is that by not reloading the entirety of the page,
                            the current state is maintained as only a specific part of the page is reloaded. Our state is now contained via this methodology! */}
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />

            </div>
        );
    }
}

export default Blog;