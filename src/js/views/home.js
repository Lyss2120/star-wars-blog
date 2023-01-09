import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardCharacters from "../component/CardCharacters";
import CardPlanets from "../component/CardPlanets";
import CardVehicles from "../component/CardVehicles";
import "../../styles/home.css";
import Cargando from "../component/cargando";


export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>

			<div>
				{store.peoples.length > 0 || store.planets.length > 0  || store.vehicles.length > 0 ?
					(<>
						<span className='container text-danger characterName d-flex text-start my-3 py-4 background rounded'>Characters</span>
						<div className="container-md d-flex overflow-auto shadow-lg p-3 background rounded ">
							<button
								className="btn btn-dark shadow-lg mb-3 background text-light "
								onClick={() => actions.getCharacters(store?.pagination?.previous)}>
								<span>PREV</span>
							</button>
							{
								store.peoples?.map((item, index) => {

									return (
										<CardCharacters
											key={index}
											name={item.name}
											gender={item.gender}
											hair_color={item.hair_color}
											eye_color={item.eye_color}
											url={item.url}
											agregarFavorito={actions.agregarFavorito}
											detalles={"/DetailCharacters/" + item.name}
										/>
									);
								})
							}

							<button
								className="btn btn-dark shadow-lg mb-3 background text-light "
								onClick={() => actions.getCharacters(store?.paginationPeople?.next)}>
								<span>NEXT</span>
							</button>
						</div>

						<span className='container text-danger characterName d-flex text-start my-3 py-4 background rounded'>Planets</span>
						<div className="container-md d-flex overflow-auto shadow-lg p-3  background rounded">
							<button
								className="btn btn-dark shadow-lg mb-3 background text-light "
								onClick={() => actions.getPlanets(store?.paginationPlanets?.previous)}>
								<span>PREV</span>
							</button>
							{store.planets.map((item, index) => {
								return (
									<CardPlanets
										key={index}
										name={item.name}
										population={item.population}
										terrain={item.terrain}
										agregarFavorito={actions.agregarFavorito}
										detalles={"/DetailPlanets/" + item.name}

									/>
								);
							})}
							<button
								className="btn btn-dark shadow-lg mb-3 background text-light "
								onClick={() => actions.getPlanets(store?.paginationPlanets?.next)}>
								<span>NEXT</span>
							</button>
						</div>

						<span className='container text-danger  characterName d-flex text-start my-3 py-4 background rounded'>Vehicles</span>
						<div className="container-md d-flex overflow-auto shadow-lg p-3  background rounded">
							<button
								className="btn btn-dark shadow-lg mb-3 background text-light "
								onClick={() => actions.getVehicles(store?.paginationVehicles?.previous)}>
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
										agregarFavorito={actions.agregarFavorito}
										detalles={"/DetailVehicles/" + item.name}

									/>
								);
							})}
							<button
								className="btn btn-dark shadow-lg mb-3 background text-light "
								onClick={() => actions.getVehicles(store?.paginationVehicles?.next)}>
								<span>NEXT</span>
							</button>
						</div>
					</>
					)
					:
					(
						<>

							<Cargando />
						</>
					)
				}
			</div>
		</>
	);
};


