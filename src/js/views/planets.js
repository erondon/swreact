import React from "react";
import { Context } from "../store/appContext";

const capitalize = s => {
	if (typeof s !== "string") return "";
	return s.charAt(0).toUpperCase() + s.slice(1);
};

export class Planets extends React.Component {
	render() {
		return (
			<div className="container">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="row">
								{!!store.planets.results &&
									store.planets.results.map((planet, i) => {
										return (
											<div className="col-md-3" key={i}>
												<div className="card">
													<img
														className="card-img-top"
														src="https://via.placeholder.com/150"
														alt="Card image cap"
													/>
													<div className="card-body">
														<h5 className="card-title">{planet.name}</h5>
														<p className="card-text">
															<p>
																<strong>Rotation Peroid:</strong>{" "}
																{capitalize(planet.rotation_period)}
															</p>
															<p>
																<strong>Terrain:</strong> {capitalize(planet.terrain)}
															</p>
															<p>
																<strong>Climate:</strong> {capitalize(planet.climate)}
															</p>
														</p>
													</div>
												</div>
											</div>
										);
									})}
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

/*

"rotation_period": "24",
	"orbital_period": "4818",
	"diameter": "10200",
	"climate": "temperate, tropical",
	"gravity": "1 standard",
	"terrain": "jungle, rainforests",
	"surface_water": "8",
	"population": "1000",
	"residents": [],
	"films": [
		"https://swapi.co/api/films/1/"
	],
	"created": "2014-12-10T11:37:19.144000Z",
	"edited": "2014-12-20T20:58:18.421000Z",
	"url": "https://swapi.co/api/planets/3/"
}
*/
