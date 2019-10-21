import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
 import { setNotification } from '../reducers/notificationReducer'
// import anecdoteService from '../services/anecdotes'


const AnecdoteForm = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    
    props.createAnecdote(anecdote)
   
    props.setNotification(`you have created '${anecdote}'`, 5)
    
  }

  return (
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">add</button>
    </form>
  )
}

export default connect(
    null, 
    { createAnecdote, setNotification }
       )(AnecdoteForm)