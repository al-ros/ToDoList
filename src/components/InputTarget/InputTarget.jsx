import "./InputTarget.scss"

const InputTarget = ({value, onChange, onSubmit}) => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit()
    };

    const handleInputTargetChange = (event) => {
        onChange(event.currentTarget.value)
    }

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

