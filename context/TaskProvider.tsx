import React, { useReducer, Dispatch } from 'react'
import reducer from './reducer'

export const DataContext = React.createContext<{
  tasks: TaskType[]
  dispatch: Dispatch<ActionType>
}>({ tasks: [], dispatch: () => { } });

type PropsType = {
  children: React.ReactNode
}

export default function TaskProvider({ children }: PropsType) {
  const defaultValues: TaskType[] = []
  const [allTask, dispatch] = useReducer(reducer, defaultValues)
  return (
    <DataContext.Provider
      value={{
        tasks: allTask,
        dispatch
      }}
    >
      {children}
    </DataContext.Provider>
  )
}