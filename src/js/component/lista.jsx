import React from "react"


const Lista = (props) => {

    const borrarTarea = () => {
        props.borrar(props.id);
    }

    return (
        <div>
            <span>{props.tarea}</span>
            <button className="btn-danger" onClick={borrarTarea}><strong>X</strong></button>

        </div>    
    );
}


export default Lista;