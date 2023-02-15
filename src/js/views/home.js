import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardCharacters from "../component/CardCharacters";
import CardPlanets from "../component/CardPlanets";
import CardVehicles from "../component/CardVehicles";
import "../../styles/home.css";
import Cargando from "../component/cargando";
import CharHome from "../component/CharHome";
import VehHome from "../component/VehHome";


export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>

			<div>
				{store.peoples.length > 0 || store.planets.length > 0 || store.vehicles.length > 0 ?
					(<>

						<CharHome />
						<VehHome />

						<span className='container-md characterName d-flex text-start my-3 py-4 bg-clear rounded text-uppercase'>Characters</span>
						<nav className="d-flex justify-content-center" aria-label="Page navigation example">
							<ul class="pagination">
								{store?.paginationPeople?.previous && // si previous es distinto de null se muestra
									<li class="page-item">
										<a class="page-link bg-dark text-light" onClick={() => actions.getCharacters(store?.pagination?.previous)} aria-label="Previous">
											<span aria-hidden="true">prev</span>
										</a>
									</li>
								}
								{store?.paginationPeople?.next && // si next es distinto de null se muestra
									<li class="page-item">
										<a class="page-link bg-dark text-light" href="#" aria-label="Next" onClick={() => actions.getCharacters(store?.paginationPeople?.next)}>
											<span aria-hidden="true">next</span>
										</a>
									</li>
								}
							</ul>
						</nav>

						<div className="container-md text-center">
							<div className="row">
								{
									store.peoples?.map((item, index) => {

										return (
											<CardCharacters
												key={index}
												name={item.name}
												gender={item.gender}
												hair_color={item.hair_color}
												eye_color={item.eye_color}
												mass={item.mass}
												url={item.url}
												agregarFavorito={actions.agregarFavorito}
												detalles={"/DetailCharacters/" + item.name}
											/>
										);
									})
								}
							</div>

						</div>





						<span className='container-md characterName d-flex text-start my-3 py-4 bg-clear rounded text-uppercase'>Planets</span>
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
										url={item.url}
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

						<span className='container-md characterName d-flex text-start my-3 py-4 background rounded text-uppercase'>Vehicles</span>
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
										url={item.url}
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


