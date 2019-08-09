import React from "react";
import { Context } from "../store/appContext";

export class Vehicles extends React.Component {
	render() {
		return (
			<div className="container">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<table className="table">
								<tr>
									<th>Vehicles:</th>
								</tr>

								{!!store.vehicles.results &&
									store.vehicles.results.map((vehicle, i) => (
										<tr key={i}>
											<td>{vehicle.name}</td>
										</tr>
									))}
							</table>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}
