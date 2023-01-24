import { useState } from 'react'

const Statistics = (props) => {
  const all = props.good + props.bad + props.neutral;
  const count = props.good - props.bad;


  return (
    <div>
      <p style={{margin: 0}}>good {props.good}</p>
      <p style={{margin: 0}}>neutral {props.neutral}</p>
      <p style={{margin: 0}}>bad {props.bad}</p>
      <p style={{margin: 0}}>all {all}</p>
      <p style={{margin: 0}}>average {count/all}</p>
      <p style={{margin: 0}}>positive {(props.good / all)*100} %</p>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + bad + neutral;
  const count = good - bad

  const handleGoodClick = (e) => {
    e.preventDefault();
    setGood(good + 1);
  }

  const handleNeutralClick = (e) => {
    e.preventDefault();
    setNeutral(neutral + 1);
  }

  const handlleBadClick = (e) => {
    e.preventDefault();
    setBad(bad + 1);
  }


  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handlleBadClick}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;