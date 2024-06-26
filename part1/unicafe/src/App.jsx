import { useState } from 'react'

const Button = ({ handleClick, label }) => {
  return (
    <button type='button' onClick={handleClick}>{label}</button>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad

  if (totalFeedback === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  // Each type of vote has a different weight to determine the average
  const GOOD_WEIGHT = 1;
  const NEUTRAL_WEIGHT = 0;
  const BAD_WEIGHT = -1;

  const totalWeightedScore = good * GOOD_WEIGHT + neutral * NEUTRAL_WEIGHT + bad * BAD_WEIGHT
  const average = (totalWeightedScore && totalWeightedScore / totalFeedback) ?? 0
  const positiveFeedbackPercentage = ((good && good / totalFeedback) ?? 0) * 100

  return (
    <table>
      <tbody>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={totalFeedback} />
        <StatisticLine text='average' value={average} />
        <StatisticLine text='positive' value={`${positiveFeedbackPercentage} %`} />
      </tbody>
    </table>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
