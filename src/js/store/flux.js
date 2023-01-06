const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			description: "A person within the Star Wars universe",
			loremDescription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam laudantium enim blanditiis temporibus veritatis reiciendis nisi, eius hic? Odio.",
			pagination: {},
			character: [],
			favoritos: [],
			peoples: [],
			planets: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			

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
						console.log({data});
						setStore({ peoples : data.results }) // trae obj con array results[...characters{name + uid + url}] y obj next{}
						setStore({ pagination : data })
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
						console.log({data});
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

			//url desde el componente en el llamado a detailcharacters en useeffect
			// detailPeople: (url) => {
			// 	fetch(url, {
			// 		method: 'GET',
			// 		headers: {
			// 			'Content-Type': 'application/json'
			// 		}
			// 	})
			// 		.then((response) => response.json())
			// 		.then((result) => {
			// 			// console.log('detailpeople', result);
			// 			setStore({ people: result })
			// 		})
			// 		.catch((error) => { console.log(error) });
			// },
			// detailPlanets: (url) => {
			// 	const store = getStore();
			// 	fetch(url, {
			// 		method: 'GET',
			// 		headers: {
			// 			'Content-Type': 'application/json'
			// 		}
			// 	})
			// 		.then((response) => response.json())
			// 		.then((data) => {
			// 			setStore({ planet: data.result })
			// 		})
			// 		.catch((error) => { console.log(error) });
			// },
			// detailVehicles: (url) => {
			// 	const store = getStore();
			// 	fetch(url, {
			// 		method: 'GET',
			// 		headers: {
			// 			'Content-Type': 'application/json'
			// 		}
			// 	})
			// 		.then((response) => response.json())
			// 		.then((data) => {
			// 			setStore({ "vehicle": data.result })
			// 		})
			// 		.catch((error) => { console.log(error) });
			// },

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
				let found = store.peoples.find((peoples) => peoples.name === name)
				//found es la people con el mismo name, y todas sus propiedades
				console.log({found});
				const response = await fetch(found.url, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				})
				const data = await response.json()
				console.log(data);
				setStore({ character: data })

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