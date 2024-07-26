import { Platform, StyleSheet } from "react-native"

export default StyleSheet.create({
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
    textAlignVertical: 'top',
    fontSize: 16,
  },
  buttonContainer: {
    marginVertical: 10,
    ...(Platform.OS === 'android' && { gap: 10 })
  },
  statusbarText: {
    color: '#000000',
    fontWeight: 'bold'
  }
})