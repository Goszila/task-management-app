import { FlatList, Text, View } from 'react-native'
import React, { useContext } from 'react'
import TaskCard from '../components/TaskCard'
import { useGetTasks } from '../hooks'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export default function Done({ navigation }: { navigation: NativeStackNavigationProp<any> }) {
  const tasks = useGetTasks({ status: 'DONE' })

  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskCard navigation={navigation} payload={item} />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={{ alignSelf: "center", fontSize: 20 }}>Empty</Text>}
      />
    </View>
  )
}