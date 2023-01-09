const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			description: "A person within the Star Wars universe",
			loremDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam laudantium enim blanditiis temporibus veritatis reiciendis nisi, eius hic? Odio.",
			paginationPeople: {},
			paginationPlanets: {},
			paginationVehicles: {},
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
					setStore({ paginationPeople: data });
					return true
				}
				
				catch (error) { console.log(error) };
			},

			getPlanets: async (url) => {
				try {
					const res = await fetch(url, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json'
						}
					})
					const data = await res.json()
					console.log({ data });
					setStore({ planets: data.results });
					setStore({ paginationPlanets: data });
					return true
				}
				
				catch (error) { console.log(error) };
			},
			
			getVehicles: async (url) => {
				try {
					const res = await fetch(url, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json'
						}
					})
					const data = await res.json()
					console.log({ data });
					setStore({ vehicles: data.results });
					setStore({ paginationVehicles: data });
					return true
				}
				
				catch (error) { console.log(error) };
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
				let foundCharacter = store?.peoples?.find((peoples) => peoples.name === name)
				//foundCharacter es la people con el mismo name, y todas sus propiedades
				// console.log({ foundCharacter });
				// const response = await fetch(foundCharacter.url, {
				// 	method: 'GET',
				// 	headers: {
				// 		'Content-Type': 'application/json'
				// 	}
				// })
				// const data = await response.json()
				// console.log('data charbyname',data);
				const data = ({...foundCharacter})
				setStore({ character: data })
			},

			getPlanetByName: async (name) => {
				const store = getStore();
				console.log('storeplanetbyname', store);
				let foundPlanet = store?.planets?.find((planets) => planets.name === name)
				console.log({ foundPlanet });
				// const response = await fetch(foundPlanet.url, {
				// 	method: 'GET',
				// 	headers: {
				// 		'Content-Type': 'application/json'
				// 	}
				// })
				// const data = await response.json()
				// console.log(data);
				const data= ({...foundPlanet})
				setStore({ planet: data })
			},

			getVehicleByName: async (name) => {
				const store = getStore();
				let foundVehicle = store?.vehicles?.find((vehicles) => vehicles.name === name)
				console.log({ foundVehicle });
				// const response = await fetch(foundVehicle.url, {
				// 	method: 'GET',
				// 	headers: {
				// 		'Content-Type': 'application/json'
				// 	}
				// })
				// const data = await response.json()
				// console.log(data);
				const data = ({...foundVehicle})
				setStore({ vehicle: data })
			}
		}
	};
}

export default getState;

