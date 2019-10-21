
const notificationReducer = (state = '', action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch (action.type) {
      case 'NOTIFICATION':
            console.log('notification voted' + action.data)
      return  action.data
      case 'CLEAR':
        return null
      default:
        return null
    }
  }

  export const setNotification = (content, time) => {
    console.log(content + 'setNotification', time)
    return async dispatch => {
        dispatch({
            type: 'NOTIFICATION',
            data: content, 
            time,
            })
    }
  }

  export default notificationReducer