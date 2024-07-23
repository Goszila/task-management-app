import { Dispatch, useContext } from 'react'
import { DataContext } from '../context/TaskProvider'
import { uuidV4 } from '../utils/uuid'

export const useGetTasks = ({ status }: { status: TaskStatus }): TaskType[] => {
  const {
    tasks
  }: { tasks: TaskType[] } = useContext(DataContext)
  return tasks.filter((task) => task.status === status)
}

type UseCreateTaskType = {
  title: string
  description: string
  dispatch: Dispatch<ActionType>
}
export const useCreateTask = (props: UseCreateTaskType) => {
  return props.dispatch({
    type: 'ADD',
    payload: {
      id: uuidV4().toString(),
      title: props.title,
      description: props.description
    }
  })
}