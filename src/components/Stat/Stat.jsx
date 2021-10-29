import { useContext } from 'react';
import TaskContext from '../../contexts/TaskContext'


const Stat = () => {
    const { tasks } = useContext(TaskContext);
    const countDone = tasks.filter(({completed}) => completed).length;
    return(
        <h3>Done: {countDone}</h3>
    )
}

export default Stat