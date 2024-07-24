import { Alert, StyleSheet } from 'react-native'

type ConfirmModalType = AlertTextType & {
  confirmFunction: () => void
  cancelFunction?: () => void
}
export default function ConfirmModal({
  title,
  detailMessage,
  cbFunction,
  confirmFunction,
  cancelFunction
}: ConfirmModalType) {
  return (
    Alert.alert(
      title,
      detailMessage,
      [
        {
          text: 'Cancel',
          onPress: () => cancelFunction && cancelFunction(),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            confirmFunction()
            cbFunction()
          }
        },
      ],
      { cancelable: false }
    )
  )
}

const styles = StyleSheet.create({})