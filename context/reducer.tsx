const reducer = (state: TaskType[], action: ActionType): TaskType[] => {
  const { payload, type } = action;
  switch (type) {
    case "ADD":
      return [...state, { ...payload, status: 'TODO' }];
    case "UPDATE":
      const taskIndex = state.findIndex((task) => task.id === payload.id);
      state[taskIndex] = { ...state[taskIndex], ...payload };
      return [...state];
    case "DELETE":
      return state.filter((task) => task.id !== payload.id)
    default:
      state = state;
      break
  }
  return state;
}

export default reducer