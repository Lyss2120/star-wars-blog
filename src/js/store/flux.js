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
				setStore({ vehicle: data })
			},

			getRandomChar: () => {
				const { peoples } = getStore();
				let RandomFour=[];
				for (let i = 0; i < 4; i++) {
					let random = Math.floor(Math.random() * peoples?.lenght) + 1;
					RandomFour.push(random)
					console.log({RandomFour})
			   }//cada vez que se repita el ciclo enviará un randomnumber a data, ese array se retorna al final con 4 randomnumbers
			   setStore({ FourRandomChar: RandomFour })
			   console.log('fkla', RandomFour)

			},					




			
		}
	};
}

export default getState;

