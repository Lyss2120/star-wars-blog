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
			<nav className="navbar navtwo navbar-light">
				<div className="container text-center ">
					<div ><button className="btn btn-sm light-underline"><Link to="/" className="text-decoration-none"><span className="link-clear ">Characters</span> </Link></button></div>
					<div ><button className="btn btn-sm light-underline"><Link to="/" className="text-decoration-none"><span className="link-clear">Planets</span></Link></button></div>
					<div ><button className="btn btn-sm light-underline"><Link to="/" className="text-decoration-none"><span className="link-clear">Vehicles</span></Link></button></div>
					<div ><button className="btn btn-sm light-underline"><Link to="/" className="text-decoration-none  link-clear">Add yours</Link></button></div>
						<div /*className="dropdown "*/>
							<button className="btn btn-sm light-underline link-clear dropdown-toggle " type="button" data-bs-toggle="dropdown" >
								Favoritos
								{store.favoritos.length != 0 &&

									<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-clear">{favs}</span>
								}
							</button>
							<ul className="dropdown-menu dropdown-menu-end bg-clear ">
								{store.favoritos.length > 0 ? (
									store.favoritos.map((fav, i) => {
										console.log('fav navbar ', fav);
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