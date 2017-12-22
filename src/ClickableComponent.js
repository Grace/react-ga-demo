import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class ClickableComponent extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {};
      this.handleOnClick = this.handleOnClick.bind(this); // tells JavaScript to make the "this" variable within handleClick() to be ClickableComponent's "this" variable
	  }

	componentDidMount() {
    this.setState({});
	}

	componentWillUnmount() {
    this.setState({});
	}

  handleOnClick = () => {
    this.setState({redirect: true});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/view-component" />;
    }

    return (
      <div className="ClickableComponent" onClick={this.handleOnClick}>
        Click to go to ViewComponent (the component set to route /view-component)
      </div>
    );
  }
}

export default ClickableComponent;