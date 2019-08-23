import React from "react";
import { Context } from "../store/appContext";

const capitalize = s => {
	if (typeof s !== "string") return "";
	return s.charAt(0).toUpperCase() + s.slice(1);
};

export class Vehicles extends React.Component {
	render() {
		return (
			<div className="container">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="row">
								{!!store.vehicles.results &&
									store.vehicles.results.map((vehicle, i) => {
										return (
											<div className="col-md-3" key={i}>
												<div className="card">
													<img
														className="card-img-top"
														src="https://via.placeholder.com/150"
														alt="Card image cap"
													/>
													<div className="card-body">
														<h5 className="card-title">{vehicle.name}</h5>
														<p className="card-text">
															<p>
																<strong>Rotation Peroid:</strong>{" "}
																{capitalize(vehicle.rotation_period)}
															</p>
															<p>
																<strong>Manufacturer:</strong>{" "}
																{capitalize(vehicle.manufacturer)}
															</p>
															<p>
																<strong>Cost in Credits:</strong>{" "}
																{capitalize(vehicle.cost_in_credits)}
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

"name": "Sand Crawler",
			"model": "Digger Crawler",
			"manufacturer": "Corellia Mining Corporation",
			"cost_in_credits": "150000",
			"length": "36.8",
			"max_atmosphering_speed": "30",
*/
