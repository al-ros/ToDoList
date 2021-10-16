import "./Task.scss"
import { useState } from 'react'

const Task = ({ task, id, onDone, completed, onEdit, onDelete}) => {
    
    const [taskEditing, setTaskEditing] = useState(false)
    const [editingText, setEditingText] = useState(task)


    const handleFormSubmit = (e) => {
        e.preventDefault();
        onEdit(id, editingText)
        setTaskEditing(false)
    };


    const editedTask = () => {
        setTaskEditing(true)
    }





    return (
        <div className="task">
            <div className="task__inner">
                <div className="task__block">
                    {taskEditing ? 
                    (
                      <label for="labeled">
                        <form onSubmit={handleFormSubmit}>  
                            <input id="labeled" type="text" onChange={(e) => setEditingText(e.target.value)} value={editingText}/>
                            <button className="action__item" disabled={!editingText.trim()}>Submit Edit</button>
                        </form>
                      </label>
                    ) : (
                      <span className={completed ? "task__text strike" : "task__text"}>{task}</span>
                    )}
                    
                </div>
                <div className="task__children">
                    <div className="task__actions action">
                        <ul className="action__list">
                            <li onClick={() => onDone(id)} className="action__item">Done</li>
                            <li onClick={editedTask} className="action__item">Edit</li>
                            <li onClick={() => onDelete(id)} className="action__item">Delete</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task