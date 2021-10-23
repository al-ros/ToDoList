import { useContext } from 'react';
import "./Header.scss";
import TaskContext from '../../contexts/TaskContext'

const Header = () => {
    const { tasks, removeAllDone, allDone, allUndone } = useContext(TaskContext);
    const countDone = tasks.filter(({completed}) => completed).length;
    return(
        <div className="header__box box">
            <h1 className="box__text">TO DO LIST</h1>
            <h3>Done: {countDone}</h3>
            <div>
                <button onClick={removeAllDone}>Remove all done</button>
                <button onClick={allDone}>All done</button>
                <button onClick={allUndone}>All Undone</button>
            </div>
        </div>
    )
}

export default Header
