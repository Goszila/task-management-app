type ActionType = AddTaskType | UpdateTaskType | DeleteTaskType | ResetTaskType

type AddTaskType = {
  type: 'ADD'
  payload: {
    id: string
    title: string
    description: string
  }
}

type UpdateTaskType = {
  type: 'UPDATE'
  payload: TaskType
}

type DeleteTaskType = {
  type: 'DELETE'
  payload: {
    id: string
  }
}

type ResetTaskType = {
  type: 'RESET'
  payload: TaskType[]
}

type TaskType = {
  id: string
  title: string
  description: string
  status: TaskStatus
}

type AlertTextType = {
  title: string
  detailMessage: string
  cbFunction: () => void
}

type TaskStatus = 'TODO' | 'INPROGRESS' | 'DONE'
