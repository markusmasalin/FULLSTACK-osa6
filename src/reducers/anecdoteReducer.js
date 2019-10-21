import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  
  switch (action.type) {
    case 'VOTED':   
      const id = action.data.id
      const votedAnecdote = state.find(n => n.id === id)
      console.log('id' + votedAnecdote)
      const newVoting = { 
        ...votedAnecdote,
        votes: (votedAnecdote.votes +1)
      }
      return state.map(a =>
        a.id !== id ? a : newVoting 
      ).sort((a, b) => b.votes -  a.votes)
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data

    default: return state
    }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    console.log(anecdotes)
    dispatch({
    type: 'INIT_ANECDOTES',
    data: anecdotes,
    })
  }
}

export const voted = (votedAnecdote) => {
  const newVoting = { 
    ...votedAnecdote,
    votes: (votedAnecdote.votes +1)
  }
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.update(votedAnecdote.id, newVoting)
    dispatch({
      type: 'VOTED',
      data: updatedAnecdote,
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
    type: 'NEW_ANECDOTE',
    data: newAnecdote, 
    })
  }
}

export default reducer