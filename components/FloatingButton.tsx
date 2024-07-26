import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import styles from '../styles/FloatingButton'

export default function FloatingButton({ navigation }: { navigation: NativeStackNavigationProp<any> }) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NEW')}>
      <View>{<FontAwesome name="plus-circle" size={20} color="white" />}</View>
    </TouchableOpacity>
  )
}