import React from 'react'
import { connect } from 'react-redux'
 import Anecdote from './Anecdote'
 import { voted } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import Notification from './Notification'

const AnecdoteList = (props) => {
  
    const vote = async (a) => {
      props.voted(a)
      props.setNotification(`you voted '${a.content}'`, 10)
  }
    return (
    <div>     
        <Notification />
        {props.visibleAnecdotes.map(anecdote =>
            <Anecdote
              key={anecdote.id}
              anecdote={anecdote}
              handleClick={() => (vote(anecdote)) }
              />
          )}
       </div>
    )
}
const anecdotesToShow = ({ anecdotes, filter }) => {
    console.log(anecdotes + ' anecdotes')
    if (filter === 'FILTER'){  
    return anecdotes    
    } else {
        return anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase())) 
    } 
  }
const mapStateToProps = (state) => {
    console.log(state)
    return {   
      visibleAnecdotes: anecdotesToShow(state),
    }
  }
  const mapDispatchToProps = {
    voted,
    setNotification 
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)

