import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {
  return (
    <div>
        <Header text={course.name} />
        <Content content={course.parts} />
        <Total parts={course.parts} />
    </div>
  )
}

export default Course