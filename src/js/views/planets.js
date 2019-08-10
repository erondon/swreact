import React from "react";
import { Context } from "../store/appContext";

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
										<div className="col-md-2">
											<div className="card" style="width: 18rem;" key={i}>
												<img
													className="card-img-top"
													src="https://via.placeholder.com/150"
													alt="Card image cap"
												/>
												<div className="card-body">
													<h5 className="card-title">{planet.name}</h5>
													<p className="card-text">
														Some quick example text to build on the card title and make up
														the bulk of the content.
													</p>
												</div>
											</div>
										</div>;
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

"name": "Yavin IV",
	"rotation_period": "24",
	"orbital_period": "4818",
	"diameter": "10200",
	"climate": "temperate, tropical",
	"gravity": "1 standard",
	"terrain": "jungle, rainforests",



*/
