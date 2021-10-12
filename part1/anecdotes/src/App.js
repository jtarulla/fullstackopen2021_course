import React, { useState } from 'react'
import Button from './components/Button'
import Title from './components/Title'

const numberBetween = (min, max) => {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(
    {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0
    }
  )
  const newPoints = {...points}

  const handleAnecdote = () => setSelected(numberBetween(0, anecdotes.length))

  const handleVote = () => {
    newPoints[selected] += 1
    setPoints(newPoints)
    getMostVoted()
  }

  const getMostVoted = () => {
    let pointsArray = Object.values(newPoints);
    let maxPoints = Math.max(...pointsArray);

    if(maxPoints === 0) return -1

    return pointsArray.indexOf(maxPoints);
  }

  return (
    <div>
      <Title text="Anecdote of the day" />
      {anecdotes[selected]} <br /><br />
      <Button
        key="handleAnecdote"
        handleClick={handleAnecdote}
        text="next anecdote" 
      />
      <Button
        key="handleVote"
        handleClick={handleVote}
        text="vote"
      />
      {
        getMostVoted() !== -1 ?
          <div>
            <Title text="Anecdote with most votes" />
            {anecdotes[getMostVoted()]}
          </div>
        :
          <br />
      }
    </div>
  )
}

export default App