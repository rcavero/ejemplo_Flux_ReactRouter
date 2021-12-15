import React, { useContext } from "react";
import { Link } from "react-router-dom";

import {Context} from "../store/appContext"

export const Navbar = () => {

	const {store} = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
			Tareas pendientes: {store.todos.length}
				<Link to="/demo">
					<button className="btn btn-primary ms-3">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
