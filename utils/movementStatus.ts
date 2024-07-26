import { STATUS_LIST } from "../constants/statusList"

export const forwardStatus = (status: TaskStatus): {
  name: string,
  value: TaskStatus
} | undefined => {
  const index = STATUS_LIST.findIndex((item) => item.value === status)
  if(index === -1) {
    return undefined
  }
  return STATUS_LIST[index + 1]
}

export const getStatusName = (status: TaskStatus): string => {
  return STATUS_LIST.find((item) => item.value === status)?.name || ''
}