import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = () => {
  return <h1>Give Feedback</h1>
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = ({ text, value}) => {
  return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  )
}

const Statistics = ({ good, bad, neutral, all }) => {

  let formattedAverage = ((good * 1) + (neutral * 0) + (bad * -1)) / all
  let formattedPositive = good / all

  if (all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistic text='Good' value={good} />
          <Statistic text='Neutral' value={neutral} />
          <Statistic text='Bad' value={bad} />
          <Statistic text='All' value={all} />
          <Statistic text='Average' value={formattedAverage.toFixed(2)} />
          <Statistic text='Positive' value={formattedPositive.toFixed(2) + '%'} />
          </tbody>
      </table>
    </div>
    
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setAll(all + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(all +1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(all +1)
    setBad(bad + 1)
  }

  return (
    <div>
      <Header />
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />
      <Statistics good={good} bad={bad} neutral={neutral} all={all}/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);