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
            <form onSubmit={submit}>
                <span>Añadir tarea</span>
                <input value={inputText} onChange={manejarFormulario}></input>
                <button>Agregar</button>
            </form>
        </div>

    )
}


export default Tareas;