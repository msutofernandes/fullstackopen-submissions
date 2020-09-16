import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const Anecdotes = ({ anecdotes, selected, allVotes }) => (
  <div>
    <h1>Anectode of the day</h1>
    {anecdotes[selected]} <br></br>
    has {allVotes[selected]} votes
  </div>
)

const ButtonVote = ({ onClick }) => (
  <button onClick={onClick}>
    Vote
  </button>
)

const ButtonNext = ({ onClick }) => (
    <button onClick={onClick}>
      Next anecdote
    </button>
)

const MostVotedAnectode = ({ anecdotes, allVotes }) => {
  let mostVoted = Math.max.apply(null, allVotes);

  if (mostVoted === 0) {
    return (
      <div>
        <h1>Anectode with most votes</h1>
        No feedback given
      </div>
    )
  }

  let mostVotedAnectode = 0

  for (var i = 0; i < allVotes.length; i++) {
    if (allVotes[i] === mostVoted) {
      mostVotedAnectode = i 
    }
  }

  return (
    <div>
      <h1>Anectode with most votes</h1>
      {anecdotes[mostVotedAnectode]} <br></br>
      has {allVotes[mostVotedAnectode]} votes
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [allVotes, setVote] = useState(new Uint8Array(10))
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const handleButtonClick = () => {
    let randomNumber = Math.floor(Math.random() * 6); 
    setSelected(randomNumber)
  }

  const handleVoteClick = () => {
    const copy = [...allVotes]
    copy[selected] += 1    
    
    setVote(copy)
  }

  return (
    <div>
      <Anecdotes anecdotes={anecdotes} selected={selected} allVotes={allVotes} />
      <ButtonVote onClick={handleVoteClick}/>
      <ButtonNext onClick={handleButtonClick} />
      <MostVotedAnectode anecdotes={anecdotes} selected={selected} allVotes={allVotes} />
    </div>
  )
}

ReactDOM.render(
  <App  />,
  document.getElementById('root')
)