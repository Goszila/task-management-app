import { Button, SafeAreaView, TextInput, View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useCreateTask, useDeleteTask, useUpdateTask } from '../hooks'
import { DataContext } from '../context/TaskProvider'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Picker } from '@react-native-picker/picker'
import ResponseAlert from '../components/ResponseAlert'
import ConfirmModal from '../components/ConfirmModal'
import styles from '../styles/TaskDetail'
import { getStatusName } from '../utils/movementStatus'

type TaskDetailType = {
  route: any
  navigation: NativeStackNavigationProp<any>
}

export default function TaskDetail({ route, navigation }: TaskDetailType) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState<TaskStatus>('TODO')
  const [formError, setFormError] = useState(false)

  const { tasks, dispatch } = useContext(DataContext)

  const id = route.params?.id
  useEffect(() => {
    if (id) {
      const task = tasks.find((task) => task.id === id)
      if (task) {
        setTitle(task.title)
        setDescription('' + task.description)
        setStatus(task.status)
      }
    }
  }, [])

  const handleCreate = async () => {
    if (formError) {
      setFormError(true)
      return
    }
    useCreateTask({ title, description, dispatch })
    ResponseAlert({
      title: 'Success',
      detailMessage: 'Task has been created successfully',
      cbFunction: () => navigation.goBack()
    })
  }

  const handleUpdate = () => {
    if (formError) {
      setFormError(true)
      return
    }
    useUpdateTask({
      dispatch,
      id,
      title,
      description,
      status
    })
    ResponseAlert({
      title: 'Success',
      detailMessage: 'Task has been updated successfully',
      cbFunction: () => navigation.goBack()
    })
  }

  const handleDelete = () => {
    if (!id) return
    ConfirmModal({
      title: 'Delete Task',
      detailMessage: 'Are you sure?',
      cbFunction: () => navigation.goBack(),
      confirmFunction: () => useDeleteTask({ dispatch, id }),
    })
  }

  const getBottomComponent = id ? (
    <View>
      <SafeAreaView>
        <Picker
          selectedValue={status}
          onValueChange={(itemValue) =>
            setStatus(itemValue)
          }>
          <Picker.Item label="TODO" value="TODO" />
          <Picker.Item label="IN PROGRESS" value="INPROGRESS" />
          <Picker.Item label="DONE" value="DONE" />
        </Picker>
      </SafeAreaView>
      <SafeAreaView style={styles.buttonContainer}>
        <Button
          title='UPDATE'
          color='#007AFF'
          onPress={handleUpdate}
        />
        <Button
          title='DELETE'
          color='red'
          onPress={handleDelete}
        />
      </SafeAreaView>
    </View>
  ) : (
    <SafeAreaView style={styles.buttonContainer}>
      <Button
        title='CREATE'
        color='#007AFF'
        onPress={handleCreate}
      />
    </SafeAreaView>
  )

  return (
    <SafeAreaView style={styles.container}>
      {id && (
        <View style={styles.statusbar}>
          <Text style={styles.statusbarText}>STATUS: {getStatusName(status)}</Text>
        </View>
      )}
      <View style={styles.form}>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Task Title*'
          keyboardType='default'
          style={[styles.input, formError && styles.inputError]}
          value={title}
          onChangeText={(value) => {
            setFormError(!value)
            setTitle(value)
          }}
        />
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Description'
          keyboardType='default'
          multiline={true}
          style={styles.textarea}
          value={description}
          onChangeText={(value) => setDescription(value)}
        />
        {getBottomComponent}
      </View>
    </SafeAreaView>
  )
}