import React, {useState} from "react";
import Tareas from "/workspace/to-do-list-2/src/js/component/tareas.jsx"
import Lista from "/workspace/to-do-list-2/src/js/component/lista.jsx"


const Home = () => {

const[listaTareas, setListaTareas] = useState([]);

const nuevaTarea = (tarea) => {
	setListaTareas([tarea, ...listaTareas]);
}

const borrar = (id) => {
	const listaFiltrada = listaTareas.filter((e,index) => index !== id)
	setListaTareas(listaFiltrada);
} 
	return (
		<div className="text-center">
		<h1>TO DO LIST</h1>
		<h3><Tareas
		nuevaTarea={nuevaTarea}
		/></h3>	
		<h4><Lista/></h4>
		{listaTareas.map((renderizarTarea, index) => <Lista 
		tarea={renderizarTarea}
		borrar={borrar}
		id={index}
		/>)}
		
		</div>
	);
};

export default Home;
