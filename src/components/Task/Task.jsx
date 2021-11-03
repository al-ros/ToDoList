import "./Task.scss"
import { useState, useContext } from 'react'
import TaskContext from '../../contexts/TaskContext'
import EditTask from '../EditTask'

const Task = ({ task, id, completed }) => {
    const [taskEditing, setTaskEditing] = useState(false)
    const { taskDone, editTask, deleteTask } = useContext(TaskContext);
    
    const handleEditSubmit = (newTask) => {
        editTask(id, newTask)
        setTaskEditing(false)
    };

    const handleClickEdit = () => {
        setTaskEditing(true);
    }

    return (
        <div className="task">
            <div className="task__inner">
                <div className="task__block">
                    {
                    taskEditing
                        ? <EditTask task={task} onSubmit={handleEditSubmit} />
                        : <span className={completed ? "task__text strike" : "task__text"}>{task}</span>
                    }
                    
                </div>
                <div className="task__children">
                    <div className="task__actions action">
                        <ul className="action__list">
                            <li onClick={() => taskDone(id)} className="action__item">
                                {completed ? 'Undone' : 'Done'}
                            </li>
                            <li onClick={handleClickEdit} className="action__item">Edit</li>
                            <li onClick={() => deleteTask(id)} className="action__item">Delete</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task
