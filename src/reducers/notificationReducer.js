
const notificationReducer = (state = null, action) => {
    console.log('state now: ', state)
    console.log('action', action)

    switch (action.type) {
      case 'NOTIFICATION':
            console.log('notification voted' + action.notification)
      return  action.notification
      case 'CLEAR':
        return null
      default:
        return state
    }
  }

  export const setNotification = (content, time) => {
    console.log(content + 'setNotification', time)
    return async dispatch => {
        dispatch({
            type: 'NOTIFICATION',
            notification: content, 
            })
            time = time * 1000
            setTimeout(() =>{
                dispatch({
                    type: "CLEAR",
                })
            },time)
    }
  }

  export default notificationReducer