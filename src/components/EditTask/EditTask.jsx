import { useState, useEffect, useRef } from 'react'

const EditTask = ({task, onSubmit}) => {
  const [editingText, setEditingText] = useState(task)
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(editingText)
};

  return (<form onSubmit={handleFormSubmit}>
    <input type="text" ref={inputEl} onChange={(e) => setEditingText(e.target.value)} value={editingText}/>
    <button className="action__item--edit" disabled={!editingText.trim()}>Submit Edit</button>
  </form>)
}

export default EditTask;
