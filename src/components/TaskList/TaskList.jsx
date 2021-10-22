import { useContext, useMemo } from 'react';
import TaskContext from '../../contexts/TaskContext'
import Task from '../Task'

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const sortedTasks = useMemo(() => {
    console.log('useMemo: TaskList')
    return [...tasks].sort(({completed}) => completed ? 1 : -1)
  }, [tasks]);

  console.log('render: TaskList');

  return sortedTasks.map(({task, id, completed}) => (
    <Task
      key={id} 
      task={task} 
      id={id} 
      completed={completed}
    />))
}


export default TaskList;
