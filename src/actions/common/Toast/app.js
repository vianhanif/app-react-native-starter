import { Toast } from 'native-base'

/*
Actions.Common.Toast.show({
  text: 'Toast Text',
  btnText: 'Okay'
})
*/

export default {
  show ({text, position = 'bottom', btnText, ...props}) {
    return Toast.show({
      duration: 3000,
      text,
      position,
      buttonText: btnText,
      ...props
    })
  }
}
