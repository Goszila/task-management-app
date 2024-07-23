import { Alert, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useTruncateText } from '../hooks'

type TaskCardPropsType = {
  navigation: NativeStackNavigationProp<any>
  payload: TaskType
}

export default function TaskCard({ navigation, payload }: TaskCardPropsType) {
  const { title, description } = payload
  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={() => Alert.alert(
        'Delete Task',
        'Are you sure?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
      )}
      onPress={() => navigation.navigate('DETAIL', {
        id: payload.id
      })}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detail}>{useTruncateText(description, 120)}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 120,
    padding: 20,
    overflow: 'hidden'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 16,
    fontWeight: 'normal',
    marginTop: 5,
    color: 'gray',
    ...(Platform.OS === 'android' && { paddingBottom: 30 })
  },
  more: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'blue',
    ...(Platform.OS === 'android' && { paddingBottom: 30 })
  }
})