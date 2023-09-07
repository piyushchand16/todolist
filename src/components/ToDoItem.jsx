import "./ToDoItem.css"
import MaterialIcon from "material-icons-react";

export default function ToDoItem({title,isCompleted,onDelete,onComplete}){

    function onclickDelete(_event){
        onDelete(title);
    }
    function onClickComplete(_event){
        onComplete(title);
    }
    return (
        <div className="item-list">
            <div className="todo-title sp">{title}</div>
            <div className="icons">
            { !isCompleted&&<div className="todo-delete sp" onClick={onClickComplete}>
                <MaterialIcon icon='task_alt' color="white"/>
            </div>}
            <div className="todo-delete sp" onClick={onclickDelete}>
                <MaterialIcon icon='delete' color="white"/>
            </div>
            </div>
        </div>
        
    );
}