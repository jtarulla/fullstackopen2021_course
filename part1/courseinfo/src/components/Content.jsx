import React from 'react'
import Part from './Part'

const Content = ({content}) => {
  return (
    <ul>
      {content.map(part => {
          return (
            <Part key={part.id} part={part} />
          );
      })}
    </ul>
  )
}

export default Content