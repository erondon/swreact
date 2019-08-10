import React from "react";
import { Context } from "../store/appContext";

const capitalize = s => {
	if (typeof s !== "string") return "";
	return s.charAt(0).toUpperCase() + s.slice(1);
};

export class People extends React.Component {
	render() {
		return (
			<div className="container">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="row">
								{!!store.people.results &&
									store.people.results.map((people, i) => {
										return (
											<div key={i}>
												<div className="col-md-3">
													<div className="card">
														<img
															className="card-img-top"
															src="https://via.placeholder.com/150"
															alt="Card image cap"
														/>
														<div className="card-body">
															<h5 className="card-title">{people.name}</h5>
															<p className="card-text">
																<p>
																	<strong>Hair Color:</strong>{" "}
																	{capitalize(people.hair_color)}
																</p>
																<p>
																	<strong>Skin Color:</strong>{" "}
																	{capitalize(people.skin_color)}
																</p>
																<p>
																	<strong>Gender Color:</strong>{" "}
																	{capitalize(people.gender)}
																</p>
																<p>
																	<strong>Birth Year:</strong>{" "}
																	{capitalize(people.birth_year)}
																</p>
															</p>
														</div>
													</div>
												</div>
												<div className='row'>
													<div className='col-md-12'></div>
													<button className="btn btn-primary">Next</button>
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
