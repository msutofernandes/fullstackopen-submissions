
import React from 'react'

const Filter = ( { newFilter, setNewFilter }) => {
  
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
    Filter shown with: <input value={newFilter} onChange={handleFilterChange} />
    </div>  
  )
}

export default Filter