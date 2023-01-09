const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			description: "A person within the Star Wars universe",
			loremDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam laudantium enim blanditiis temporibus veritatis reiciendis nisi, eius hic? Odio.",
			pagination: {},
			favoritos: [],
			peoples: [],
			planets: [],
			vehicles: [],
			character: null,
			planet: null,
			vehicle: null,
		},
		actions: {
			// Use getActions to call a function within a fuction

			//1° fetch para sacr el url de cada personaje
			getCharacters: async (url) => {
				try {
					const res = await fetch(url, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json'
						}
					})
					const data = await res.json()
					console.log({ data });
					setStore({ peoples: data.results });
					setStore({ pagination: data });
					return true
				}
				
				catch (error) { console.log(error) };
			},

			getPlanets: (url) => {
				const store = getStore();
				fetch(url, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then((response) => response.json())
					.then((data) => {
						console.log({ data });
						setStore({ "planets": data.results })
					})
					.catch((error) => { console.log(error) });
			},

			getVehicles: (url) => {
				const store = getStore();
				fetch(url, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then((response) => response.json())
					.then((data) => {
						console.log('data vehicles', data);
						setStore({ "vehicles": data.results })
					})
					.catch((error) => { console.log(error) });
			},

			agregarFavorito: (name) => {
				const store = getStore();
				let found = store.favoritos.find((fav) => fav.name === name)
				if (found) return;

				setStore({ favoritos: [...store.favoritos, { name: name }] })


			},

			borrarFavorito: (name) => {
				const store = getStore();
				const nuevosFavoritos = store.favoritos.filter(favorito => favorito.name !== name)
				setStore({ favoritos: nuevosFavoritos })
				console.log(name, "eliminado de favoritos", favoritos);
			},

			getCharacterByName: async (name) => {
				const store = getStore();
				let found = store?.peoples?.find((peoples) => peoples.name === name)
				//found es la people con el mismo name, y todas sus propiedades
				console.log({ found });
				const response = await fetch(found.url, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				})
				const data = await response.json()
				console.log(data);
				setStore({ character: data })
			},

			getPlanetByName: async (name) => {
				const store = getStore();
				let foundPlanet = store?.planets?.find((planets) => planets.name === name)
				//foundPlanet es la people con el mismo name, y todas sus propiedades
				console.log({ foundPlanet });
				const response = await fetch(foundPlanet.url, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				})
				const data = await response.json()
				console.log(data);
				setStore({ planet: data })
			},

			getVehicleByName: async (name) => {
				const store = getStore();
				let foundVehicle = store?.vehicles?.find((vehicles) => vehicles.name === name)
				//foundVehicle es la people con el mismo name, y todas sus propiedades
				console.log({ foundVehicle });
				const response = await fetch(foundVehicle.url, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				})
				const data = await response.json()
				console.log(data);
				setStore({ vehicle: data })
			}
		}
	};
}

export default getState;

