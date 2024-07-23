import { Dispatch, useContext } from 'react'
import { DataContext } from '../context/TaskProvider'
import { uuidV4 } from '../utils/uuid'
import { Text } from 'react-native'

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

export const useTruncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return (
      <Text>
        {text.substring(0, maxLength)}
        <Text style={{ fontWeight: 'bold' }}> .
          ..more
        </Text>
      </Text>
    )
  }
  return text
}