import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/Star-Wars-Logo-Transparent-Image.png";
import { AiOutlineUser } from "react-icons/ai";

export const NavTwo = () => {

	return (
		<>
			<nav className="navbar ">
				<div className="d-flex flex-row">
					<Link to={'/'} >
						<button href="#" className="btn bg-clear">
							OTRA COSA
						</button>
					</Link>
				</div>
				<div className="container na d-flex align-center justify-content-center">
					<Link to="/">
						<span className="navbar-brand logo"><img src={logo} alt="logo" height={80} /></span>
					</Link>
				</div>
				<div className="d-flex flex-row">
					<Link to={'/'} >
						<button href="#" className="btn bg-clear">
						<AiOutlineUser />
							<span className="m-2">SIGN IN</span>
						</button>
					</Link>
				</div>
			</nav >
		</>
	);
};


