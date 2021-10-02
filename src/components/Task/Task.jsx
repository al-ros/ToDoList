import "./Task.scss"

const Task = ({task}) => {
 
    return (
        <div className="task">
            <div className="task__inner">
                <div className="task__block">
                    <span className="task__text">{ task }</span>
                </div>
                <div className="task__children">
                    <div className="task__actions action">
                        <ul className="action__list">
                            <li className="action__item">Done</li>
                            <li className="action__item">Edit</li>
                            <li className="action__item">Delete</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Task