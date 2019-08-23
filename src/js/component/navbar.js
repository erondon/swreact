import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<Fragment>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="#">
						Star Wars API
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<Link className="nav-link" to="/">
								Planets
							</Link>

							<Link className="nav-link" to="/people">
								People
							</Link>
							<Link className="nav-link" to="/vehicles">
								Vehicles{" "}
							</Link>
						</ul>
					</div>
				</nav>
			</Fragment>
		);
	}
}
