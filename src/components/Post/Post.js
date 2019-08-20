import React from 'react';
import { withRouter } from "react-router-dom"
import './Post.css';

const post = (props) => {
    console.log(props)
    // This specific console.log reveals that the post component doesn't reveal a match, history, or location object which can be seen in the posts component.
    // You would use the HOC "withRouter" to reveal the match, history, and location properties making the component route aware
    return (
        <article className="Post" onClick={props.clicked}>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Author">{props.author}</div>
            </div>
        </article>
    )
};

export default withRouter(post);