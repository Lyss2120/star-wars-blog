const getState = ({ getStore, getActions, setStore }) => {
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

			character: null,
			favoritos: [],
			people: [],
			peoples: null,
			planet: null,
			planets: null,
			vehicles: null,
			vehicles: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			/* 			hola: ()=>{
							const {description} = people; 
							console.log(description, 'people');
						}, */

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
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

			//1° fetch para sacr el url de cada personaje
			getCharacters: (url) => {
				const store = getStore();
				fetch(url, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then((response) => response.json())
					.then((data) => {
						setStore({ peoples: data.results }) // trae obj con array results[...characters{name + uid + url}] y obj next{}
					})
					.catch((error) => { console.log(error) });
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
						setStore({ "vehicles": data.results })
					})
					.catch((error) => { console.log(error) });
			},

			//url desde el componente en el llamado a detailcharacters en useeffect
			detailPeople: (url) => {
				const store = getStore();
				fetch(url, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then((response) => response.json())
					.then((result) => {
						setStore({ "people": result.result })
					})
					.catch((error) => { console.log(error) });
			},
			detailPlanets: (url) => {
				const store = getStore();
				fetch(url, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then((response) => response.json())
					.then((data) => {
						setStore({ "planets": data.results.properties })
					})
					.catch((error) => { console.log(error) });
			},
			detailVehicles: (url) => {
				const store = getStore();
				fetch(url, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then((response) => response.json())
					.then((data) => {
						setStore({ "vehicles": data.results.properties })
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
				let found = store.peoples.find((fav) => fav.name === name)
				//accede a las propiedades dentro del obj properties???
				const response = await fetch(found.url, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				})
				const data = await response.json()
				const character={...found, properties:data.result.properties}
				setStore({ character: character })

			}



		}
	};
}

export default getState;


			//es necesario? con el primer fetch ya tengo la data completa
/* 		detailCharacter: (url) => {
			const { url } = getStore();
			fetch({ url }, {//pasar la url de cada personaje
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			})
				.then((response) => response.json())
				.then((data) => {
					setStore({ "detailpeople": data.results })
				})
				.catch((error) => { console.log(error) });
		}, */