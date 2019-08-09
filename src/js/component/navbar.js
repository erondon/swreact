import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Star Wars</span>
				</Link>
				<div className="ml-auto">
					<Link to="/people">People</Link>

					<Link to="/">
						<h3>Planets</h3>
					</Link>
				</div>
			</nav>
		);
	}
}
