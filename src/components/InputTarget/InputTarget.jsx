import { useState, useContext } from 'react';
import TaskContext from '../../contexts/TaskContext';
import "./InputTarget.scss"

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
                <input value={value} className="input_enter" name="input" id="input" placeholder="Write a task..." onChange={handleInputTargetChange} />
                <button className="input__send" type="submit" disabled={!value.trim() }>Send</button>
            </form>
        </div>
       
    )
}

export default InputTarget

