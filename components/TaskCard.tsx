import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type TaskCardProps = {
  title: string
  description?: string
}
export default function TaskCard({ title, description = '' }: TaskCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detail}>{description}</Text>
    </View>
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
  }
})