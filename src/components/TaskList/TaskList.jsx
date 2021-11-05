import { useContext, useMemo } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import TaskContext from '../../contexts/TaskContext'
import Task from '../Task'

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const sortedTasks = useMemo(() => {
    console.log('useMemo: TaskList')
    return [...tasks].sort(({completed}) => completed ? 1 : -1)
  }, [tasks]);

  console.log('render: TaskList');

  return (<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <List>
    {sortedTasks.map(({task, id, completed}) => (
      <Task
        key={id} 
        task={task} 
        id={id} 
        completed={completed}
      />))}
    </List>
  </Box>)
}


export default TaskList;
