import AsyncStorage from '@react-native-async-storage/async-storage';

type TInputValue = string | number | boolean | object | undefined | Array<any>;
export const useSaveData = async <T extends TInputValue>(keyName: string, inputValue: T): Promise<void> => {
  try {
    await AsyncStorage.setItem(keyName, JSON.stringify(inputValue));
  } catch (error) {
    console.error('Error saving data', error);
  }
};

export const useGetTasks = async (): Promise<TaskType[]> => {
  return AsyncStorage.getItem(`tasks`)
    .then((json) => {
      return (JSON.parse(json || '[]') as TaskType[])
    })
}