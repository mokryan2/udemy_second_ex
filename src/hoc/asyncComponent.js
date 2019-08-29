import React, { Component } from "react";

const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            component = null
        };

        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({
                        component: cmp.default
                    });
                });
        };

        render() {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null
        };
    };
};

export default asyncComponent;

// This component is being used to load everything ASYNCHRONOUSLY(otherwise known as "lazy loading" to get only the parts that are needed WHEN they are needed).