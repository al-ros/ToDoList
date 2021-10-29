import { useContext } from 'react';
import TaskContext from '../../contexts/TaskContext'

const Admin = () => {
    const { removeAllDone, allDone, allUndone } = useContext(TaskContext);
    
    return(
        <div>
            <button onClick={removeAllDone}>Remove all done</button>
            <button onClick={allDone}>All done</button>
            <button onClick={allUndone}>All Undone</button>
        </div>
    )
}

export default Admin