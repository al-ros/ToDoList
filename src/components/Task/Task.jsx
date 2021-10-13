import "./Task.scss"


const Task = ({ task, id, taskDone, completed, submitEdit, deleteTask, taskEditing, setTaskEditing, editingText, setEditingText}) => {
 
    const thisTaskDone = () => {
        taskDone(id)
    }

    const editedTask = () => {
        setTaskEditing(id)
    }

    const submitEdited = () => {
        submitEdit(id)
    }

    const delTask = () => {
        deleteTask(id)
    }



    return (
        <div className="task">
            <div className="task__inner">
                <div className="task__block">
                    {taskEditing === id ? 
                    (
                      <div>
                        <input type="text" onChange={(e) => setEditingText(e.target.value)} value={editingText}/>
                        <button onClick={submitEdited} className="action__item">Submit Edit</button>
                      </div>
                    ) : (
                      <span className={completed ? "task__text strike" : "task__text"}>{task}</span>
                    )}
                    
                </div>
                <div className="task__children">
                    <div className="task__actions action">
                        <ul className="action__list">
                            <li onClick={thisTaskDone} className="action__item">Done</li>
                            <li onClick={editedTask} className="action__item">Edit</li>
                            <li onClick={delTask} className="action__item">Delete</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task