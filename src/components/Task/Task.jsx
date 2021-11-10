import "./Task.scss"
import { useState, useContext } from 'react'
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
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
        <ListItem secondaryAction={
            <Box sx={{ width: '100%', bgcolor: 'background.paper', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <IconButton edge="end" aria-label="delete" onClick={handleClickEdit}>
                        <EditIcon />
                    </IconButton>
                </Box>
                <Box sx={{ width: '100%', maxWidth: 1360, bgcolor: 'background.paper' }}>
                    <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(id)}>
                        <DeleteIcon />
                    </IconButton>
                </Box>
            </Box>
          }>
            <ListItemButton onClick={() => !taskEditing && taskDone(id)} disableRipple={taskEditing} >
                {
                taskEditing
                    ? <EditTask task={task} onSubmit={handleEditSubmit} />
                    : (
                        <>
                        <ListItemIcon>
                            <Checkbox
                            edge="start"
                            checked={completed}
                            tabIndex={-1}
                            disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText primary={task} />
                        </>
                    )
                }
              
            </ListItemButton>
            {/* <div className="task__inner">
                <div className="task__children">
                    <div className="task__actions action">
                        <ul className="action__list">
                            <li onClick={() => taskDone(id)} className="action__item">
                                {completed ? 'Undone' : 'Done'}
                            </li>
                            <li onClick={handleClickEdit} className="action__item">Edit</li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </ListItem>
    )
}

export default Task
