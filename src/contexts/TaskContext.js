import { createContext } from 'react'

const TaskContext = createContext({
  tasks: [],
  addTask: () => null,
  taskDone: () => null,
  editTask: () => null,
  deleteTask: () => null,
  removeAllDone: () => null
})

export default TaskContext;
