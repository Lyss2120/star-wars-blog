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
							console.log('fav navbar ',fav);
								return (
									<div className="d-flex justify-content-between">
										<li key={i}
											className="text-start "
										>
										<button className="btn p-2 ">{fav.name}</button>
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