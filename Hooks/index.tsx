import { useContext } from 'react'
import { DataContext } from '../context/TaskProvider'

export const useGetTasks = ({ status }: { status: TaskStatus }): TaskType[] => {
  const {
    tasks
  }: { tasks: TaskType[] } = useContext(DataContext)
  return tasks.filter((task) => task.status === status)
}