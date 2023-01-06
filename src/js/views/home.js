import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import CardCharacters from "../component/CardCharacters";
import CardPlanets from "../component/CardPlanets";
import CardVehicles from "../component/CardVehicles";
import "../../styles/home.css";



// este si
export const Home = () => {
	const { store, actions } = useContext(Context);
/* 	const url = store.peoples.results[url];
    useEffect(() => {
        //actions.getCharacterByName(name)//byuid? byurl
        actions.detailPeople(url)
    }, ) */
/* 	console.log(store.test.results, "test");
 */	return (
		<div>
			<span className='container text-danger characterName d-flex text-start my-3 py-4 background rounded'>Characters</span>
			<div className="container-md d-flex overflow-auto shadow-lg p-3 background rounded ">
				<button
					className="btn btn-dark shadow-lg mb-3 background text-light "
					onClick={() => actions.getCharacters(store?.pagination?.previous)}>
					<span>PREV</span>
				</button>
				{!!store.peoples &&
					store.peoples?.map((item, index) => {
						console.log(store.peoples);

						return (
							<CardCharacters
								key={index}
								name={item.name}
								gender={item.gender}
								hair_color={item.hair_color}
								eye_color={item.eye_color}
								url={item.url}

								agregarFavorito={actions.agregarFavorito}
								detailPeople={actions.detailPeople}
								detalles={"/DetailCharacters/" + item.name}
							/>
						);
					})}

				<button
					className="btn btn-dark shadow-lg mb-3 background text-light "
					onClick={() => actions.getCharacters(store?.pagination?.next)}>
					<span>NEXT</span>
				</button>
			</div>




			<span className='container text-danger characterName d-flex text-start my-3 py-4 background rounded'>Planets</span>
			<div className="container-md d-flex overflow-auto shadow-lg p-3  background rounded">
				<button
					className="btn btn-dark shadow-lg mb-3 background text-light "
					onClick={() => actions.getPlanets(store?.pagination?.previous)}>
					<span>PREV</span>
				</button>
				{store.planets.map((item, index) => {
					return (
						<CardPlanets
							key={index}
							name={item.name}
							population={item.population}
							terrain={item.terrain}
							url={item.url}
							agregarFavorito={actions.agregarFavorito}
							detalles={"/DetailPlanets/" + item.name}

						/>
					);
				})}
				<button
					className="btn btn-dark shadow-lg mb-3 background text-light "
					onClick={() => actions.getPlanets(store?.pagination?.next)}>
					<span>NEXT</span>
				</button>
			</div>




			<span className='container text-danger  characterName d-flex text-start my-3 py-4 background rounded'>Vehicles</span>
			<div className="container-md d-flex overflow-auto shadow-lg p-3  background rounded">
				<button
					className="btn btn-dark shadow-lg mb-3 background text-light "
					onClick={() => actions.getVehicles(store?.pagination?.previous)}>
					<span>PREV</span>
				</button>
				{store.vehicles.map((item, index) => {
					return (
						<CardVehicles
							key={index}
							name={item.name}
							model={item.model}
							passengers={item.passengers}
							vehicle_class={item.vehicle_class}
							url={item.url}
							agregarFavorito={actions.agregarFavorito}
							detalles={"/DetailVehicles/" + item.name}

						/>
					);
				})}
				<button
					className="btn btn-dark shadow-lg mb-3 background text-light "
					onClick={() => actions.getVehicles(store?.pagination?.next)}>
					<span>NEXT</span>
				</button>
			</div>
		</div>
	);
};


