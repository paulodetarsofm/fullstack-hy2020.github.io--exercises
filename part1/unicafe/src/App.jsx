import { useState } from 'react'

const Button = ({handleClick, label }) => {
  return (
    <button type='button' onClick={handleClick}>{label}</button>
  )
}

const Statistic = ({type, total }) => {
  return (
    <p>{type} {total}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGoodVote = () => {
    setGood(good + 1)
  }

  const addNeutralVote = () => {
    setNeutral(neutral + 1)
  }

  const addBadVote = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <h1>give feedback</h1>

      <Button handleClick={addGoodVote} label='good' />
      <Button handleClick={addNeutralVote} label='neutral' />
      <Button handleClick={addBadVote} label='bad' />

      <h1>statistics</h1>

      <Statistic type='good' total={good} />
      <Statistic type='neutral' total={neutral} />
      <Statistic type='bad' total={bad} />
    </>
  )
}

export default App
