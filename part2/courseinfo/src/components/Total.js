import React from 'react'

const Total = ({parts}) => {

  const exercisesArray = parts.map(x => x.exercises)
  const total = exercisesArray.reduce((s, p) => s + p, 0)

  return <p><b>Total of {total} exercises</b></p>
}

export default Total