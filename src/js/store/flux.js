const getState = ({ getStore, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			planets: {},
			people: {},
			vehicles: {},
			starships: {}
		},
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getPlanets: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ planets: data }));
			},

			getPeople: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ people: data }));
			},

			getVehicles: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ vehicles: data }));
			},
			getStarships: url => {
				fetch(url)
					.then(resp => resp.json())
					.then(data => setStore({ starships: data }));
			}
		}
	};
};

export default getState;
