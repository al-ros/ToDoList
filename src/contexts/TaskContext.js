import { createContext } from 'react'

const TaskContext = createContext({
  tasks: [],
  addTask: () => null,
  taskDone: () => null,
  editTask: () => null,
  deleteTask: () => null,
  removeAllDone: () => null,
  allDone: () => null,
  allUndone: () => null
})

export default TaskContext;
