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
			RandomFour:[],
			randomNumber: 0,
			peopleCount:0,
			planetsCount:0,
			vehiclesCount:0,
			randomF:''

		},
		actions: {
			// Use getActions to call a function within a fuction

			//1° fetch para sacr el url de cada personaje

			getXcharacters: async (url) => {
				const store = getStore();

				try {
					const res = await fetch(url, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json'
						}
					})
					const data = await res.json()
					console.log( data.name , 'getXcharacters');
					
					setStore({ randomF: data });

					return true
				}
				
				catch (error) { console.log(error) };
			}, //trae cualquier personaje de los 82
			
			getXcharacterByName: async (name) => {
				const store = getStore();
				let foundCharacter = store?.RandomFour?.find((xChar) => xChar.name === name)
				const data = ({...foundCharacter})
				setStore({ character: data })
			},//SACA LOS DETALLES DEL XCHAR

			getCharacters: async (url) => {
				const store = getStore();

				try {
					const res = await fetch(url, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json'
						}
					})
					const data = await res.json()
					// console.log({ data });
					getActions().getRandomChar(data.results)
					
					setStore({ peoples: data.results, paginationPeople: data, peopleCount: data.count });
					// setStore({ paginationPeople: data, peoplesCount: data.count });
					return true
				}
				
				catch (error) { console.log(error) };
			},

			getPlanets: async (url) => {
				const store = getStore();

				try {
					const res = await fetch(url, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json'
						}
					})
					const data = await res.json()
					// console.log({ data });
					setStore({ planets: data.results, paginationPlanets: data, planetsCount: data.count });
					// setStore({ paginationPlanets: data, planetsCount: data.count  });
					return true
				}
				
				catch (error) { console.log(error) };
			},
			
			getVehicles: async (url) => {
				const store = getStore();

				try {
					const res = await fetch(url, {
						method: 'GET',
						headers: {
							'Content-Type': 'application/json'
						}
					})
					const data = await res.json()
					// console.log({ data });
					setStore({ vehicles: data.results, paginationVehicles: data, vehiclesCount: data.count });
					// setStore({ paginationVehicles: data });

					return true
				}
				
				catch (error) { console.log(error) };
			},

			agregarFavorito: (name, url) => {
				const store = getStore();
				let found = store.favoritos.find((fav) => fav.name === name)
				if (found) return;
				console.log('fav', name, url);
				setStore({ favoritos: [...store.favoritos, { name: name, url: url }] })
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
				const data = ({...foundCharacter})
				setStore({ character: data })
			},

			getPlanetByName: async (name) => {
				const store = getStore();
				console.log('storeplanetbyname', store);
				let foundPlanet = store?.planets?.find((planets) => planets.name === name)
				console.log({ foundPlanet });
				const data= ({...foundPlanet})
				setStore({ planet: data })
			},

			getVehicleByName: async (name) => {
				const store = getStore();
				let foundVehicle = store?.vehicles?.find((vehicles) => vehicles.name === name)
				console.log({ foundVehicle });
				const data = ({...foundVehicle})
				console.log(data);
				setStore({ vehicle: data })
			},
			// randomNumber: (num)=>{
			// 	let random = Math.floor(Math.random() * num) + 1;
			// 	return random
			// },
			getRandomChar: (arr) => {
				const store = getStore();
				let RandomFour = [];
				let random, xChar, xCharUrl 
				let RandomFour2 = new Array(4).fill(0)
				
				console.log(RandomFour2);
				RandomFour2.map((item, _)=>{
						item = Math.floor(Math.random() * 10)
						xCharUrl = arr[item].url
						xChar = getActions().getXcharacters(xCharUrl)

						// RandomFour.push(xchar)
						console.log(item, xchar.name)
					
				})
				for (let i = 0; i < 4; i++) {
					random = Math.floor(Math.random() * 10)
					let xchar= arr[random] 
					RandomFour.push(xchar)
				}

				setStore({ RandomFour: RandomFour })
				// es un array con 4 numeros , de aqui tienen que salir 4 personajes segun su index en characters
			     console.log({RandomFour},'HOLA')
			},					




			
		}
	};
}

export default getState;

