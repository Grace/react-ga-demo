import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ViewComponent extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {};
	  }

	componentDidMount() {
	}

	componentWillUnmount() {
	}

  render() {
    return (
      <div className="ViewComponent">
        <h3>Showing ViewComponent</h3>
        <code>/view-component should be showing up as the active page in Real Time Google Analytics when you are on this page</code>
      </div>
    );
  }
}

export default ViewComponent;