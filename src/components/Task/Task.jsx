import "./Task.scss"
import { useState, useContext } from 'react'
import TaskContext from '../../contexts/TaskContext'

const Task = ({ task, id, completed }) => {
    const [taskEditing, setTaskEditing] = useState(false)
    const [editingText, setEditingText] = useState(task)
    const { taskDone, editTask, deleteTask } = useContext(TaskContext);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        editTask(id, editingText)
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
                            <li onClick={() => taskDone(id)} className="action__item">
                                {completed ? 'Undone' : 'Done'}
                            </li>
                            <li onClick={editedTask} className="action__item">Edit</li>
                            <li onClick={() => deleteTask(id)} className="action__item">Delete</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task
