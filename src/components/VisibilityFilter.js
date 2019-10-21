import React from 'react'
import { filterChange } from '../reducers/filterReducer'

const VisibilityFilter = (props) => {

  const filterClicked = (value) => {
    props.store.dispatch(filterChange(value))
  }

  return (
    <div>
      all
       
      <input 
        name="filter" 
        onChange={() => filterClicked('ALL')}
      />
      
    
    </div>
  )
}

export default VisibilityFilter