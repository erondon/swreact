import React from "react";
import { Context } from "../store/appContext";

export class Starships extends React.Component {
	render() {
		return (
			<div className="container">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<table className="table">
								<tr>
									<th>Starships:</th>
								</tr>

								{!!store.starships.results &&
									store.starships.results.map((starship, i) => (
										<tr key={i}>
											<td>{starship.name}</td>
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
