import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Dispatch, useContext, useState } from 'react'
import { useCreateTask } from '../hooks'
import { DataContext } from '../context/TaskProvider'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export default function TaskDetail({ navigation }: { navigation: NativeStackNavigationProp<any> }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [formError, setFormError] = useState(false)

  const {
    dispatch
  }: { dispatch: Dispatch<ActionType> } = useContext(DataContext)

  const handleSave = () => {
    if (!title) {
      setFormError(true)
    }
    setFormError(false)
    useCreateTask({
      title,
      description,
      dispatch
    })
    Alert.alert(
      'Create Task',
      'Task has been created',
      [
        { text: 'OK', onPress: () => navigation.goBack() }
      ],
      { cancelable: false }
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          placeholder='Task Title*'
          keyboardType='default'
          style={[styles.input, formError && styles.inputError]}
          onChangeText={(value) => {
            if(!value) setFormError(true)
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
          onChangeText={(value) => setDescription(value)}
        />
        <Button
          title='SAVE'
          color='#007AFF'
          onPress={handleSave}
        />
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
    marginVertical: 10,
    textAlignVertical: 'top',
    fontSize: 16
  },
})