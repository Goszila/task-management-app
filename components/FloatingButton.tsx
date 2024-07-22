import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function FloatingButton({ navigation }: { navigation: NativeStackNavigationProp<any> }) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NEW')}>
      <View>{<FontAwesome name="plus-circle" size={20} color="white" />}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#007bff',
    borderRadius: 50,
    padding: 16,
  },
});