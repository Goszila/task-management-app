import { Alert } from 'react-native'

type MultiOptionModalType = {
  title: string
  detailMessage: string
  option1: OptionType
  option2: OptionType
  cancelFunction?: () => void
}

type OptionType = {
  text: string
  processFunction: () => void
}
export default function OptionalModal({
  title,
  detailMessage,
  option1,
  option2,
  cancelFunction
}: MultiOptionModalType) {
  return (
    Alert.alert(
      title,
      detailMessage,
      [
        {
          text: 'CLOSE',
          onPress: () => cancelFunction && cancelFunction(),
          style: 'cancel',
        },
        {
          text: option1.text,
          onPress: () => option1.processFunction()
        },
        {
          text: option2.text,
          onPress: () => option2.processFunction()
        },
      ],
    )
  )
}