import React from 'react'
import Part from './Part';

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(partsObject => {
          return (
            <Part key={partsObject.exercises} parts={partsObject} />
          );
      })}
    </div>
  )
}

export default Content