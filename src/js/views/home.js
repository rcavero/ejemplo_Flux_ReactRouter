import React, { useCallback, useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

import {Context} from "../store/appContext"

export const Home = () => {
	const {store, actions} = useContext(Context);
	const [todo, setTodo] = useState("");

	return(
		<div className="text-center mt-5 mb-3">
			<h1 className="mb-3">To Do List</h1>

			<input type="text" name="todo" placeholder="Add new task" onChange={(event)=>{
				return setTodo(event.target.value);
			}} value={todo}/>

			<button onClick={()=>{
				actions.addTodo(todo);
				setTodo("");
			}}>Add task</button>

			<ol className="mt-3">
				{store.todos.map((value, index) => {
					return <li key={index}>
						{value}
						<button type="button" className="btn-close ms-2" aria-label="Close" onClick={()=>{
							actions.deleteTodo(index);
						}}></button>
					</li>
				})}
			</ol>
		</div>
	);
};
