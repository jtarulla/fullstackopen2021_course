import React from 'react'

const Total = ({ parts }) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const exercises = parts.map(part => (part.exercises));

  return (
    <>
      <p>
        Number of exercises: {exercises.reduce(reducer)}
      </p>
    </>
  )
}

export default Total