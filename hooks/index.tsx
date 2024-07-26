import { Dispatch, useContext } from 'react'
import { uuidV4 } from '../utils/uuid'
import { Text } from 'react-native'
import { DataContext } from '../context/TaskProvider'

export const useGetContextTasks = ({ status }: { status?: TaskStatus }): TaskType[] => {
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

type UseUpdateTaskType = {
  dispatch: Dispatch<ActionType>
} & TaskType

export const useUpdateTask = async (props: UseUpdateTaskType): Promise<void> => {
  props.dispatch({
    type: 'UPDATE',
    payload: {
      id: props.id,
      title: props.title,
      description: props.description,
      status: props.status
    }
  })
}

export const useTruncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return (
      <Text>
        {text.substring(0, maxLength)}
        <Text style={{ fontWeight: 'bold' }}>
          ..more
        </Text>
      </Text>
    )
  }
  return text
}

type UseDeleteTaskType = {
  dispatch: Dispatch<ActionType>
  id: string
}
export const useDeleteTask = ({ dispatch, id }: UseDeleteTaskType) => {
  dispatch({
    type: 'DELETE',
    payload: {
      id
    }
  })
}