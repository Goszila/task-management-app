const reducer = (state: TaskType[], action: ActionType): TaskType[] => {
  console.log({ state, action })
  switch (action.type) {
    case "ADD":
      const { payload } = action
      return [...state, { ...payload, status: 'TODO' }]
    case "DELETE":
      return [...state]
    case "UPDATE":
      return [...state]
    default:
      return state
  }
}

export default reducer