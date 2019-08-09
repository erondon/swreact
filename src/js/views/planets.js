import React from "react";
import { Context } from "../store/appContext";

export class Planets extends React.Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<table>
								<tr>
									<th>Planets Name </th>
								</tr>

								{!!store.planets.results &&
									store.planets.results.map((planet, i) => (
										<tr key={i}>
											<td>{planet.name}</td>
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
