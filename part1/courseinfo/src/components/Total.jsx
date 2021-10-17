import React from 'react'

const Total = ({ parts }) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const exercises = parts.map(part => (part.exercises));
  const total = exercises.reduce(reducer)

  return (
    <div>
      <strong>
        Total of {total} exercises
      </strong>
    </div>
  )
}

export default Total