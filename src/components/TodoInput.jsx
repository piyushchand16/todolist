import { useState } from "react"
import MaterialIcon from "material-icons-react";
import "./TodoInput.css"

export default function TodoInput({onAddItem}){
    var [currentInputValue,setCurrentInput]=useState("");

    function onInputChange(event){
        setCurrentInput(event.target.value);
    }

    function addTodoItem(){
        onAddItem(currentInputValue);
        setCurrentInput("");
    }
    return(
        <div className="todo-input-div">
        <input className="todo-input"type="text" onChange={onInputChange}/>
        <button className="todo-button" onClick={addTodoItem}>
            <MaterialIcon icon='add' color='black' />Add
        </button>
        </div>
    )
}