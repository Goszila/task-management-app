type ActionType = {
  type: 'ADD';
  payload: {
    id: string;
    title: string;
    description: string;
  };
} |
{
  type: 'UPDATE';
  payload: TaskType;
}|
{
  type: 'DELETE';
  payload: {
    id: string
  };
}

type TaskType = {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

type TaskStatus = 'TODO' | 'INPROGRESS' | 'DONE'
