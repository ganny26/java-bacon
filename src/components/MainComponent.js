import React, { Component } from 'react';
import PropTypes from 'prop-types';
class MainComponent extends Component {
    render() {
        return (
            <div>
                <p>{this.props.heading}</p>
            </div>
        );
    }
}

MainComponent.propTypes  = {
    heading:PropTypes.string.isRequired
}
export default MainComponent;