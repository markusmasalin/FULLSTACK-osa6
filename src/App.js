import React from 'react';
import  { useEffect } from 'react' 
import { connect } from 'react-redux'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'




const App = (props) => {
  useEffect(() => {
      props.initializeAnecdotes()
  }, [])

  return (
    <div>
      <h1>Programming anecdotes</h1>
        <Filter/>
        <AnecdoteList />
        <AnecdoteForm />

    </div>
  )
}

export default connect(null, { initializeAnecdotes }) (App)