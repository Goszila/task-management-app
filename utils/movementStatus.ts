import { STATUS_LIST } from "../constants/statusList"

export const forwardStatus = (status: TaskStatus): {
  name: string,
  value: TaskStatus
} => STATUS_LIST[STATUS_LIST.findIndex((item) => item.value === status) + 1]

export const getStatusName = (status: TaskStatus): string => {
  return STATUS_LIST.find((item) => item.value === status)?.name || ''
}