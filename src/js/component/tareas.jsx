import React, {useState} from "react"

const Tareas = (props) => {

    const[inputText, setInputText] = useState("");

    const manejarFormulario = (event) =>{
        setInputText(event.target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        props.nuevaTarea(inputText);
    }



    return (
        <div>
            <form className="formulario" onSubmit={submit}>
                <span className="span me-2">Añadir tarea ...</span>
                <input value={inputText} onChange={manejarFormulario}></input>
                <button className="btn-dark">Agregar</button>
            </form>
        </div>

    )
}


export default Tareas;