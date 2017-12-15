import { ActionSheet } from 'native-base'

/*
Actions.Common.ActionSheet.show({
  title: 'Test ActionSheet',
  action(options, index) {
    self.setState({ action: options[index].value })
  }
})
*/


export default {

  defaultOptions () {
    return [
      { text: 'Opsi 1', value: 1},
      { text: 'Opsi 2', value: 2},
      { text: 'Opsi 3', value: 3},
      { text: 'cancel', value: 4}
    ]
  },
  show ({title, options = [], btnCancel = 3, action}) {
    const _options = (options.length > 0 ? options : this.defaultOptions())
    return ActionSheet.show(
      {
        title,
        options: _options,
        destructiveButtonIndex: btnCancel
      },
      index => {
        action(_options, index)
      }
    )
  }
}
