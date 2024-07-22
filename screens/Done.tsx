import { FlatList, Text, View } from 'react-native'
import React, { useContext } from 'react'
import TaskCard from '../components/TaskCard'
import { useGetTasks } from '../hooks'

export default function Done() {
  const tasks = useGetTasks({ status: 'DONE' })

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