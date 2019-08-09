<div className="card" style="width: 18rem;">
  <img className="card-img-top" src="https://via.placeholder.com/150" alt="Card image cap"/>
  <div className="card-body">
    {!!store.people.results && store.people.results.map((people, i)=>(

    <h5 className="card-title">{people.name}</h5>

    ))}

    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


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
