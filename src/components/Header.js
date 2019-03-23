import React, { Component } from 'react';

class Header extends Component {

	render(){
		return(
			<nav className="navbar">

			<div className="navbar-brand">
				<a className="navbar-item" href="http://bulma.io">
					{
						this.props.title //what is this.props? //this.props.title can be used like this <Header title="the title">. it gives this class an HTML attribute/property
					}
				</a>
			</div>
				
			</nav>
		);
	}
}

export default Header;