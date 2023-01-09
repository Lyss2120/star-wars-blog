import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import logo from "../../img/Star_Wars_logo.jpg"
import { FaTrash } from "react-icons/fa";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let favs = store.favoritos.length;

	return (
		<nav className="navbar navbar-light navbar ">
			<div className="container ">
				<Link to="/">
					<span className="navbar-brand logo"><img src={logo} alt="logo" width={100} /></span>
				</Link>
				<div className="dropdown mx-3 ">
					<button className="btn btn-dark dropdown-toggle favBtn" type="button" data-bs-toggle="dropdown" >
						Favoritos <span className="badge bg-secondary">{favs}</span>
					</button>
					<ul className="dropdown-menu dropdown-menu-end ">

						{store.favoritos.length > 0 ? (
							store.favoritos.map((fav, i) => {

								return (
									<div className="d-flex justify-content-between">
										<li key={i}
											className="text-start "
										>
											{
												!!fav.gender ?
													(<Link to={"/DetailCharacters/" + fav.name} >
														<button className="btn p-2 ">{fav.name}</button>
													</Link>)
													:
													!!fav.population ?
														(<Link to={"/DetailPlanets/" + fav.name} >
															<button className="btn p-2 ">{fav.name}</button>
														</Link>)
														:
														(<Link to={"/DetailVehicles/" + fav.name} >
															<button className="btn p-2 ">{fav.name}</button>
														</Link>)
											}
										</li>
										<button
											className="btn"
											onClick={() => actions.borrarFavorito(fav.name)}
										>
											<FaTrash />
										</button>

									</div>
								)
							})
						) :
							(<li>empty</li>)}

						{/* 						{store.favoritos ? (
							store.favoritos.map((favorito) => {
								console.log(store.favoritos, "log de nav")
								return (	
								//	<Link to={"/DetailCharacters/" + item.url}>
										<li key={favorito.name} className="btn">
											{favorito.name}
											<button className="btn"
												onClick={() => actions.borrarFavorito(item.name)}
											><FaTrash /></button>
										</li>
									//</Link>
								)
							})) : (
									<li><span className="btn" key={favs} >
										empty
									</span>
									</li>
						)} */}

					</ul>
				</div>
			</div>
		</nav >
	);
};


Navbar.defaultProps = {
	favs: "0",
	fav: "(empty)",
}