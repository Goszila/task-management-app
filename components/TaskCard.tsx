import { Text, TouchableOpacity, Vibration, View } from 'react-native'
import React, { useContext } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useDeleteTask, useTruncateText, useUpdateTask } from '../hooks'
import styles from '../styles/TaskCard'
import { FontAwesome } from '@expo/vector-icons'
import { DataContext } from '../context/TaskProvider'
import ConfirmModal from './ConfirmModal'
import { forwardStatus } from '../utils/movementStatus'
import OptionalModal from './MultiOptionModal'

type TaskCardPropsType = {
  navigation: NativeStackNavigationProp<any>
  payload: TaskType
}

export default function TaskCard({ navigation, payload }: TaskCardPropsType) {
  const { dispatch } = useContext(DataContext)
  const { title, description, status } = payload

  const onLongPressTaskCard = () => {
    Vibration.vibrate(50)
    OptionalModal({
      title: 'Select Action',
      detailMessage: 'Please select an action',
      option1: {
        text: 'EDIT',
        processFunction: () => {
          navigation.navigate('DETAIL', {
            id: payload.id
          })
        }
      },
      option2: {
        text: 'DELETE',
        processFunction: () => ConfirmModal({
          title: 'Delete Task',
          detailMessage: 'Are you sure?',
          cbFunction: () => { },
          confirmFunction: () => useDeleteTask({ dispatch, id: payload.id }),
        })
      },
      cancelFunction: () => { }
    })
  }

  const HandleMoveStatus = () => {
    const nexStatus = forwardStatus(status)
    ConfirmModal({
      title: 'Confirm',
      detailMessage: `Are you sure you want to move this task to ${nexStatus.name}?`,
      cbFunction: () => { },
      confirmFunction: () => {
        useUpdateTask({
          dispatch,
          id: payload.id,
          title,
          description,
          status: nexStatus.value
        })
      }
    })
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={onLongPressTaskCard}
      onPress={() => navigation.navigate('DETAIL', {
        id: payload.id
      })}>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.title}>{title}</Text>
        {status !== 'DONE' &&
          <TouchableOpacity onPress={HandleMoveStatus}>
            <FontAwesome name="play" size={24} color="#007AFF" />
          </TouchableOpacity>
        }
      </View>
      <Text style={styles.detail}>{useTruncateText(description, 120)}</Text>
    </TouchableOpacity>
  )
}

