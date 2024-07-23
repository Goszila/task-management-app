import { Alert, Button, SafeAreaView, StyleSheet, TextInput, View, Text, Platform } from 'react-native'
import React, { Dispatch, useContext, useEffect, useRef, useState } from 'react'
import { useCreateTask } from '../hooks'
import { DataContext } from '../context/TaskProvider'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Picker } from '@react-native-picker/picker';

export default function TaskDetail({ route, navigation }: { route: any, navigation: NativeStackNavigationProp<any> }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [formError, setFormError] = useState(false)
  const [status, setStatus] = useState<TaskStatus>('TODO')

  const {
    tasks,
    dispatch
  }: { tasks: TaskType[], dispatch: Dispatch<ActionType> } = useContext(DataContext)

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
    } else {
      useCreateTask({
        title,
        description,
        dispatch
      })
    }

    Alert.alert(
      'Create Task',
      'Task has been created',
      [
        { text: 'OK', onPress: () => navigation.goBack() }
      ],
      { cancelable: false }
    )
  }

  const handleDelete = () => {
    if (!id) return
    Alert.alert(
      'Delete Task',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch({
              type: 'DELETE',
              payload: {
                id
              }
            })
            navigation.goBack()
          }
        },
      ],
      { cancelable: false }
    )
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  statusbar: {
    width: '100%',
    padding: 10,
    backgroundColor: '#70FFEC',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    padding: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
  },
  inputError: {
    borderBlockColor: 'red',
  },
  textarea: {
    width: '100%',
    height: 200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    // marginVertical: 10,
    textAlignVertical: 'top',
    fontSize: 16,
  },
  buttonContainer: {
    marginVertical: 10,
    ...(Platform.OS === 'android' && { gap: 10 })
  }
})