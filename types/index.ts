type ActionType = {
  type: 'ADD' | 'DELETE' | 'UPDATE'
  payload: any
}

type TaskType = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus
}

type TaskStatus = 'TODO' | 'INPROGRESS' | 'DONE'
