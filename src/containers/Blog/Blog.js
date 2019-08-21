import React, { Component } from 'react';
import Posts from "./Posts/Posts"
import NewPost from "./NewPost/NewPost";
import { Route, NavLink } from "react-router-dom";
// While technically you could just use the regular Link from react-router-dom, NavLink allows for easier application of styles to a link by designating an
// "active" class to said link. Additionally, you could also use your own styling as inline styling
import './Blog.css';

class Blog extends Component {

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    textDecoration: "underline",
                                    color: "blue"
                                }}
                            >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: "#submit",
                                search: "?quick-subit=true"
                            }}>New Post</NavLink></li>
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