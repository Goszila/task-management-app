import { useSaveData } from "../hooks/useStorage"

const reducer = (state: TaskType[], action: ActionType): TaskType[] => {
  const { payload, type } = action
  let responseTasks: TaskType[] = []
  switch (type) {
    case "ADD":
      responseTasks = [...state, { ...payload, status: 'TODO' }]
      break
    case "UPDATE":
      const taskIndex = state.findIndex((task) => task.id === payload.id)
      state[taskIndex] = { ...state[taskIndex], ...payload }
      responseTasks = [...state]
      break
    case "DELETE":
      state = state.filter((task) => task.id !== payload.id)
      responseTasks = [...state]
      break
    case "RESET":
      return [...payload]
    default:
      return [...state]
  }
  useSaveData('tasks', responseTasks)
  return [...responseTasks]
}

export default reducer