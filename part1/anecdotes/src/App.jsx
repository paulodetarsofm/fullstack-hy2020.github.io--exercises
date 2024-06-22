import { useState } from 'react'

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

const Button = ({ handleClick, label }) => {
  return (
    <button type='button' onClick={handleClick}>{label}</button>
  )
}

const Anectode = ({ anecdote, votes }) => {
  return (
    <>
      <p>{anecdote}</p>
      <p>has {votes} {votes === 1 ? 'vote' : 'votes'}</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const initialSelected = getRandomInt(anecdotes.length);
  const initialVotes = new Uint8Array(anecdotes.length)

  const [selected, setSelected] = useState(initialSelected)
  const [votes, setVote] = useState(initialVotes)

  const setNextAnecdote = () => {
    // No need to change if there is only one element or if there is none
    if (anecdotes.length <= 1) {
      return;
    }

    // Make sure a new index is always defined
    let nextAnecdote;

    do {
      nextAnecdote = getRandomInt(anecdotes.length);
    } while (nextAnecdote === selected);

    setSelected(nextAnecdote)
  }

  const addVote = () => {
    const updatedVotes = [...votes]
    updatedVotes[selected] += 1

    setVote(updatedVotes)
  }

  const anecdoteOfTheDay = {
    anecdote: anecdotes[selected],
    votes: votes[selected]
  }

  const mostVotedIndex = votes.indexOf(Math.max(...votes));
  const mostVotedAnecdote = {
    anecdote: anecdotes[mostVotedIndex],
    votes: votes[mostVotedIndex]
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anectode anecdote={anecdoteOfTheDay.anecdote} votes={anecdoteOfTheDay.votes} />
      <Button handleClick={addVote} label='vote' />
      <Button handleClick={setNextAnecdote} label='next anecdote' />

      <h1>Anecdote with most votes</h1>
      <Anectode anecdote={mostVotedAnecdote.anecdote} votes={mostVotedAnecdote.votes} />
    </>
  )
}

export default App
