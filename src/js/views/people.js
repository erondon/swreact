import React from "react";
import { Context } from "../store/appContext";

export class People extends React.Component {
	render() {
		return (
			<div className="container">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<table className="table">
								<tr>
									<th>Character:</th>
								</tr>

								{!!store.people.results &&
									store.people.results.map((people, i) => (
										<tr key={i}>
											<td>{people.name}</td>
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
