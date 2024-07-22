import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TaskCard from '../components/TaskCard'
import { useGetTasks } from '../hooks'
import FloatingButton from '../components/FloatingButton'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export default function Todo({ navigation }: { navigation: NativeStackNavigationProp<any> }) {
  const tasks = useGetTasks({ status: 'TODO' })

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
      <FloatingButton navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  }
});