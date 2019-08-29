import React, { Component } from "react";

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        };

        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({
                        component: cmp.default
                    });
                });
        };
        // The importComponent function will work in tandem with whatever component it is paired with; what this means is that the anonymous function that is set in 
        // Blog.js will initiate the importComponent function with whatever route that has been included into the function.

        render() {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null
        };
    };
};

export default asyncComponent;

// This component is being used to load everything ASYNCHRONOUSLY(otherwise known as "lazy loading" to get only the parts that are needed WHEN they are needed).