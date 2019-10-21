import React from 'react'
import { connect } from 'react-redux'


const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: 'none',
    margin: 10
  }

  if (props.notify !== ('' || null) ){
    style.display='inline-block'
  } 
  
  return (
      <div style={style}>
        {props.notify}
      </div>
    )
}

const notificationToShow = ({ notification}) =>  {
  return notification

}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    
    notify: notificationToShow(state),
  }
}


export default connect(mapStateToProps)(Notification)