import React, { Component } from 'react';
import Posts from "./Posts/Posts"
import NewPost from "./NewPost/NewPost";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
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
                                to="/posts/"
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
                <Switch>
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                    {/* Redirect is used as another route that doesn't render content; instead it changes the url to reach another route that does render content.
                This could technically be replaced with "<Route path="/" component={Posts} />", but because React-router-dom already has this method we might as
                well use it. ADDITIONALLY, if you place the redirect outside the switch statement, the from field can't be specified!!! */}
                </Switch>
                {/* We use the Switch component to load only a SINGLE route of the given options that matches what is picked.
                This prevents an issue we were having with FullPost and NewPost where the 2 components could be rendered at the same time!
                ORDER IS STILL IMPORTANT HERE! NEVER FORGET THAT!!!; Also, you can technically place additional routes before or after the switch,
                but bear in mind it might require different handling to work. */}
            </div>
        );
    }
}

export default Blog;