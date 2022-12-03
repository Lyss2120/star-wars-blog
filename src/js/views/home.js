import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

import CardCharacters from "../component/CardCharacters";
import CardPlanets from "../component/CardPlanets";
import CardVehicles from "../component/CardVehicles";
import "../../styles/home.css";



//poner aqui todo lo que vaya en la pag. y los detalles serian otra view pero que accede con link
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
			<span className='container text-danger fw-bold fs-1 d-flex text-start my-3 py-4 background rounded'>Characters</span>
			<div className="container-md d-flex overflow-auto shadow-lg p-3  background rounded ">
				{!!store.peoples &&
					store.peoples?.map((item, index) => {
						return (
							<CardCharacters
								key={item.uid}
								name={item.name}						
								url={item.url}
								agregarFavorito={actions.agregarFavorito}
								detailPeople={actions.detailPeople}
								detalles={"/DetailCharacters/" + item.name}
							/>
						);
					})}
{/* 				<button
					className="btn btn-light shadow-lg p-3 mb-3"
					onClick={() => actions.getCharacters(store.people?.next)}>next
				</button> */}
			</div>


			<span className='container text-danger fw-bold fs-1 d-flex text-start my-3 py-4 background rounded'>Planets</span>
			<div className="container-md d-flex overflow-auto shadow-lg p-3  background rounded">
				{/*store.planets.map((item, index) => {
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
{/* 				<button
					className="btn btn-light shadow-lg p-3 mb-3"
					onClick={() => actions.getCharacters(store.people?.next)}>next
				</button> */}
			</div>




			<span className='container text-danger fw-bold fs-1 d-flex text-start my-3 py-4 background rounded'>Vehicles</span>
			<div className="container-md d-flex overflow-auto shadow-lg p-3  background rounded">
				{/*store.vehicles.map((item) => {
					return (
						<CardVehicles
							key={item.url}
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
{/* 				<button
					className="btn btn-light shadow-lg p-3 mb-3"
					onClick={() => actions.getCharacters(store.people?.next)}>next
				</button> */}
			</div>
		</div>
	);
};


