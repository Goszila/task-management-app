import React, { useReducer, Dispatch } from 'react'
import reducer from './reducer'

export const DataContext = React.createContext<{
  tasks: TaskType[]
  dispatch: Dispatch<ActionType>
}>({tasks: [], dispatch: () => {}});

export default function TaskProvider({children}: any) {
  const defaultValues: TaskType[] = [
    { id: '1', title: 'Task 1', description: 'In order to access any view you would normally do something like this:In order to access any view you would normally do something like this:In order to access any view you would normally do something like this:In order to access any view you would normally do something like this:', status: 'TODO' },
    { id: '2', title: 'Task 1', description: 'In order to access any view you would normally do something like this:In order to access any view you would normally do something like this:In order to access any view you would normally do something like this:In order to access any view you would normally do something like this:', status: 'INPROGRESS' },
    { id: '3', title: 'Task 1', description: 'In order to access any view you would normally do something like this:In order to access any view you would normally do something like this:In order to access any view you would normally do something like this:In order to access any view you would normally do something like this:', status: 'TODO' },
    { id: '4', title: 'Task 1', description: 'In order to access any view you would normally do something like this:In order to access any view you would normally do something like this:In order to access any view you would normally do something like this:In order to access any view you would normally do something like this:', status: 'DONE' },
    { id: '5', title: 'Task 1', description: 'In order to access any view you would normally do something like this:In order to access any view you would normally do something like this:In order to access any view you would normally do something like this:In order to access any view you would normally do something like this:', status: 'DONE' },
    { id: '6', title: 'Task 1', description: 'In order to access any view you would normally do something like this:In order to access any view you would normally do something like this:In order to access any view you would normally do something like this:In order to access any view you would normally do something like this:', status: 'DONE' }
  ]
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