import { Button, SafeAreaView, StyleSheet, TextInput, View, Text, Platform } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useCreateTask, useDeleteTask } from '../hooks'
import { DataContext } from '../context/TaskProvider'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Picker } from '@react-native-picker/picker';
import ResponseAlert from '../components/ResponseAlert'
import ConfirmModal from '../components/ConfirmModal'
import styles from '../styles/TaskDetail'

export default function TaskDetail({ route, navigation }: { route: any, navigation: NativeStackNavigationProp<any> }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [formError, setFormError] = useState(false)
  const [status, setStatus] = useState<TaskStatus>('TODO')

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

  const handleSave = () => {
    if (!title) {
      setFormError(true)
      return
    }
    let successMessage = ''
    if (id) {
      dispatch({
        type: 'UPDATE',
        payload: {
          id,
          title,
          description,
          status
        }
      })
      successMessage = 'Task has been updated successfully'
    } else {
      useCreateTask({ title, description, dispatch })
      successMessage = 'Task has been created successfully'
    }
    ResponseAlert({
      title: 'Success',
      detailMessage: successMessage,
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

  return (
    <SafeAreaView style={styles.container}>
      {id && (
        <View style={styles.statusbar}>
          <Text style={{ color: '#000000', fontWeight: 'bold' }}>STATUS: {status}</Text>
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
        {id && (
          <SafeAreaView>
            <Picker
              selectedValue={status}
              onValueChange={(itemValue, itemIndex) =>
                setStatus(itemValue)
              }>
              <Picker.Item label="TODO" value="TODO" />
              <Picker.Item label="IN PROGRESS" value="INPROGRESS" />
              <Picker.Item label="DONE" value="DONE" />
            </Picker>
          </SafeAreaView>
        )}

        <SafeAreaView style={styles.buttonContainer}>
          <Button
            title='SAVE'
            color='#007AFF'
            onPress={handleSave}
          />
          {id && (
            <Button
              title='DELETE'
              color='red'
              onPress={handleDelete}
            />
          )}
        </SafeAreaView>
      </View>
    </SafeAreaView>
  )
}