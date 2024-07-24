import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TaskCard from '../components/TaskCard'
import { useGetTasks } from '../hooks'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import styles from '../styles/Screen'

export default function InProgress({ navigation }: { navigation: NativeStackNavigationProp<any> }) {
  const tasks = useGetTasks({ status: 'INPROGRESS' })

  return (
    <View style={styles.container}>
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