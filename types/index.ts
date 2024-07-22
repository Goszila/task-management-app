type ActionType = {
  type: 'ADD' | 'DELETE' | 'UPDATE'
  payload: TaskType //& {id?: string}
}

type TaskType = {
  id: string;
  title: string;
  description?: string;
  status?: TaskStatus;
}

type TaskStatus = 'TODO' | 'INPROGRESS' | 'DONE'
