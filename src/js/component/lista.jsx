import React from "react"


const Lista = (props) => {

    const borrarTarea = () => {
        props.borrar(props.id);
    }

    return (
        <div>
            <span>{props.tarea}</span>
            <span onClick={borrarTarea}>Borrar</span>

        </div>    
    );
}


export default Lista;