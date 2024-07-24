import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useTruncateText } from '../hooks'
import styles from '../styles/TaskCard'

type TaskCardPropsType = {
  navigation: NativeStackNavigationProp<any>
  payload: TaskType
}

export default function TaskCard({ navigation, payload }: TaskCardPropsType) {
  const { title, description } = payload
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('DETAIL', {
        id: payload.id
      })}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detail}>{useTruncateText(description, 120)}</Text>
    </TouchableOpacity>
  )
}

