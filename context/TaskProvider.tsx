import React, { useReducer, Dispatch } from 'react'
import reducer from './reducer'

export const DataContext = React.createContext<{
  tasks: TaskType[]
  dispatch: Dispatch<ActionType>
}>({ tasks: [], dispatch: () => { } });

export default function TaskProvider({ children }: any) {
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