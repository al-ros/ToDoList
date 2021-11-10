import { useState, useContext } from 'react';
import TaskContext from '../../contexts/TaskContext';
import "./InputTarget.scss"

import { Fab, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; 

const InputTarget = () => {
    const [value, setValue] = useState('');
    const { addTask } = useContext(TaskContext);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setValue('');
        addTask(value);
    };

    const handleInputTargetChange = (event) => {
        setValue(event.currentTarget.value)
    }

    console.log('render: InputTarget');

    return(
        
        <div className="input">
            <form onSubmit={handleFormSubmit} action="" className="input__form" name="formName">
                <TextField label="New task" variant="outlined" value={value} className="input_enter" name="input" id="input" placeholder="Write a task..." onChange={handleInputTargetChange} />
                <Fab color="primary" aria-label="add" type="submit" disabled={!value.trim() }>
                    <AddIcon />
                </Fab>
            </form>
        </div>
       
    )
}

export default InputTarget

