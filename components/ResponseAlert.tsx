import { Alert, StyleSheet } from 'react-native'

type Props = {
  title: string
  detailMessage: string
  cbFunction: () => void
}
export default function ResponseAlert({ title, detailMessage, cbFunction }: Props) {
  return (
    Alert.alert(
      title,
      detailMessage,
      [
        { text: 'OK', onPress: () => cbFunction() }
      ],
      { cancelable: false }
    )
  )
}

const styles = StyleSheet.create({})