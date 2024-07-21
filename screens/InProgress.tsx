import { FlatList, Text, View } from 'react-native'
import React from 'react'
import TaskCard from '../components/TaskCard'
import { useGetTasks } from '../Hooks'

export default function InProgress() {
  const tasks = useGetTasks({ status: 'INPROGRESS' })

  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskCard title={item.title} description={item.description} />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={{ alignSelf: "center", fontSize: 20 }}>Empty</Text>}
      />
    </View>
  )
}