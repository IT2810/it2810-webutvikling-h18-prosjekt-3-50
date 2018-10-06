


export function findByID(wrapper, testID) {
  if (wrapper.props() && wrapper.props().testID === testID) {
    return wrapper
  }
  if (wrapper.children() && wrapper.children().length > 0) {
    let childs = wrapper.children()
    for (let i = 0; i < childs.length; i++) {
      let item = findByID(wrapper.childAt(i), testID)
      if (typeof(item) !== 'undefined') {
        return item
      }
    }
  }
}