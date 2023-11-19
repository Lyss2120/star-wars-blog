import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardCharacters from "../component/CardCharacters";
import CardPlanets from "../component/CardPlanets";
import CardVehicles from "../component/CardVehicles";
import "../../styles/home.css";
import Cargando from "../component/cargando";
import CharHome from "../component/CharHome";
import VehHome from "../component/VehHome";
import Testcard from "../component/testcard.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	// const { peoples, planets, vehicles } = store
	// console.log(peoples, planets, vehicles);


	return (
		<>
			{/* AL CLICKEAR UNA CARD SE ABREN TODAS por el id, flush-collapseOne, usar d-none o hidden para hacer un collapse. SCRAPPING PARA SACAR LAS IMGS! */}
			<div>
				{store.peoples.length > 0 || store.planets.length > 0 || store.vehicles.length > 0 ?
					(<>


						<CharHome />

						<div className="container-md d-flex justify-content-between py-3 ">
							<span className='mx-3 fs-4 text-uppercase '>Characters</span>
							<nav className=" " aria-label="Page navigation example">
								<ul className="pagination">
									{store?.paginationPeople?.previous && // si previous es distinto de null se muestra
										<li className="page-item">
											<a className="page-link bg-dark text-light"
												onClick={() => actions.getCharacters(store?.pagination?.previous)}
												aria-label="Previous">
												<span aria-hidden="true">prev</span>
											</a>
										</li>
									}
								</ul>
							</nav>
						</div>
						<div className="container-md text-center ">

							<div className="row">
								{
									store.peoples?.map((item, index) => {

										return (
											<Testcard
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

							<nav className="" aria-label="Page navigation example">
								<ul className="pagination">
									{store?.paginationPeople?.previous && // si previous es distinto de null se muestra people prev
										<li className="page-item">
											<a className="page-link bg-dark text-light" onClick={() => actions.getCharacters(store?.pagination?.previous)} aria-label="Previous">
												<span aria-hidden="true">prev</span>
											</a>
										</li>
									}
									{store?.paginationPeople?.next && // si next es distinto de null se muestra people next
										<li className="page-item">
											<a className="page-link bg-dark text-light" href="#" aria-label="Next" onClick={() => actions.getCharacters(store?.paginationPeople?.next)}>
												<span aria-hidden="true">next</span>
											</a>
										</li>
									}
								</ul>
							</nav>

						</div>

						<div className="container-md d-flex justify-content-between py-3 ">
							<span className='mx-3 fs-4 text-uppercase '>Planets</span>
							<nav className=" " aria-label="Page navigation example">
								<ul className="pagination">
									{store?.paginationPlanets?.previous && // si previous es distinto de null se muestra
										<li className="page-item">
											<a className="page-link bg-dark text-light"
												onClick={() => actions.getPlanets(store?.paginationPlanets?.previous)}
												aria-label="Previous">
												<span aria-hidden="true">prev</span>
											</a>
										</li>
									}
								</ul>
							</nav>
						</div>
						<div className="container-md text-center ">
							<div className="row">
								{store.planets.map((item, index) => {
									return (
										<CardPlanets
											key={index}
											name={item.name}
											population={item.population}
											climate={item.climate}
											terrain={item.terrain}
											url={item.url}
											agregarFavorito={actions.agregarFavorito}
											detalles={"/DetailPlanets/" + item.name}
										/>
									);
								})}

							</div>

							<nav className="" aria-label="Page navigation example">
								<ul className="pagination">
									{store?.paginationPlanets?.previous && // si previous es distinto de null se muestra people prev
										<li className="page-item">
											<a className="page-link bg-dark text-light" onClick={() => actions.getPlanets(store?.paginationPlanets?.previous)} aria-label="Previous">
												<span aria-hidden="true">prev</span>
											</a>
										</li>
									}
									{store?.paginationPlanets?.next && // si next es distinto de null se muestra people next
										<li className="page-item">
											<a className="page-link bg-dark text-light" href="#" aria-label="Next" onClick={() => actions.getPlanets(store?.paginationPlanets?.next)}>
												<span aria-hidden="true">next</span>
											</a>
										</li>
									}
								</ul>
							</nav>
						</div>

						<div className="container-md d-flex justify-content-between py-3 ">
							<span className='mx-3 fs-4 text-uppercase '>Vehicles</span>
							<nav className=" " aria-label="Page navigation example">
								<ul className="pagination">
									{store?.paginationVehicles?.previous && // si previous es distinto de null se muestra
										<li className="page-item">
											<a className="page-link bg-dark text-light"
												onClick={() => actions.getVehicles(store?.paginationVehicles?.previous)}
												aria-label="Previous">
												<span aria-hidden="true">prev</span>
											</a>
										</li>
									}
								</ul>
							</nav>
						</div>
						<div className="container-md text-center ">
							<div className="row">
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

							</div>

							<nav className="" aria-label="Page navigation example">
								<ul className="pagination">
									{store?.paginationVehicles?.previous && // si previous es distinto de null se muestra people prev
										<li className="page-item">
											<a className="page-link bg-dark text-light" onClick={() => actions.getVehicles(store?.paginationVehicles?.previous)} aria-label="Previous">
												<span aria-hidden="true">prev</span>
											</a>
										</li>
									}
									{store?.paginationVehicles?.next && // si next es distinto de null se muestra people next
										<li className="page-item">
											<a className="page-link bg-dark text-light" href="#" aria-label="Next" onClick={() => actions.getVehicles(store?.paginationVehicles?.next)}>
												<span aria-hidden="true">next</span>
											</a>
										</li>
									}
								</ul>
							</nav>

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


/*
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
 */
