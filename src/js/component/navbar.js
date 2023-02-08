import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaTrash } from "react-icons/fa";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	let favs = store.favoritos.length;

	return (
		<>
		<nav className="navbar navbar-light">
			<div className="container my-1">
				<div><button className="btn btn-sm bg-clear">categorias</button></div>
				<div><button className="btn btn-sm bg-clear">categorias</button></div>
				<div><button className="btn btn-sm bg-clear">categorias</button></div>
				<div><button className="btn btn-sm bg-clear">categorias</button></div>
				<div className="dropdown mx-3 ">
					<button className="btn bg-clear btn-sm dropdown-toggle " type="button" data-bs-toggle="dropdown" >
						Favoritos
						{store.favoritos.length != 0 &&
 
						<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-clear">{favs}</span>
						}
						</button>
					<ul className="dropdown-menu dropdown-menu-end bg-clear ">

						{store.favoritos.length > 0 ? (
							store.favoritos.map((fav, i) => {
							console.log('fav navbar ',fav);
								return (
									<div className=" ">
										<li key={i}
											className="dropdown-item d-flex justify-content-between item-clear"
										>
										{/* <button className="btn p-2 ">{fav.name}</button> */}
										<span className="me-2">{fav.name}</span>
										<span											
											onClick={() => actions.borrarFavorito(fav.name)}
										>
											<FaTrash />
										</span>
										</li>
										{/* <button
											className="btn"
											onClick={() => actions.borrarFavorito(fav.name)}
										>
											<FaTrash />
										</button>
 */}
									</div>
								)
							})
						) :
							(<li className="dropdown-item item-clear">empty</li>)}
					</ul>
				</div>
			</div>
		</nav >
		</>
	);
};


Navbar.defaultProps = {
	favs: "0",
	fav: "(empty)",
}