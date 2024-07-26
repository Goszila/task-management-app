import { FlatList, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import TaskCard from '../components/TaskCard'
import { useGetContextTasks } from '../hooks'
import FloatingButton from '../components/FloatingButton'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import styles from '../styles/TaskList'
import { DataContext } from '../context/TaskProvider'
import { useGetTasks } from '../hooks/useStorage'

type TaskDetailType = {
  route: any,
  navigation: NativeStackNavigationProp<any>
}

export default function TaskList({ navigation, route }: TaskDetailType) {
  const status: TaskStatus = (route?.name || '').toUpperCase()
  const { dispatch } = useContext(DataContext)

  const resetTasks = async () => {
    dispatch({ type: 'RESET', payload: await useGetTasks() })
  }

  useEffect(() => {
    resetTasks()
  }, [])

  const tasks = useGetContextTasks({ status })


  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskCard navigation={navigation} payload={item} />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>Empty</Text>}
      />
      {status === 'TODO' && <FloatingButton navigation={navigation} />}
    </View>
  )
}