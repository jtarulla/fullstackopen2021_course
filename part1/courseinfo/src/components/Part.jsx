import React from 'react'

const Part = ({part}) => {
  return (
    <li>
        <p>
            {part.name} {part.exercises}
        </p>
    </li>
  )
}

export default Part