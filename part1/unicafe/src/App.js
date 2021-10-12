import React, {useState} from 'react'
import Title from './components/Title'
import Button from './components/Button'
import Statistics from './components/Statistics'

function App() {
  const FEEDBACK_TITLE = 'Give feedback'
  const STATISTICS_TITLE = 'Statistics'

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div className="App">
      <Title text={FEEDBACK_TITLE} />
      <Button key="good" handleClick={handleGood} text="good" />
      <Button key="neutral" handleClick={handleNeutral} text="neutral" />
      <Button key="bad" handleClick={handleBad} text="bad" />

      <Title text={STATISTICS_TITLE} />
      {
        good || neutral || bad ?
          <Statistics good={good} neutral={neutral} bad={bad} />
        :
          <p>No feedback given</p>
      }
    </div>
  );
}

export default App;
