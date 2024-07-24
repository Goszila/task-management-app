import { FlatList, Text, View } from 'react-native'
import React from 'react'
import TaskCard from '../components/TaskCard'
import { useGetTasks } from '../hooks'
import FloatingButton from '../components/FloatingButton'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import styles from '../styles/TaskList'

type TaskDetailType = {
  route: any,
  navigation: NativeStackNavigationProp<any>
}

export default function TaskList({ navigation, route }: TaskDetailType) {
  const status: TaskStatus = (route?.name || '').toUpperCase()
  const tasks = useGetTasks({ status })

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