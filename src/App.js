import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
      <p style={{margin: 0}}>good {good}</p>
      <p style={{margin: 0}}>neutral {neutral}</p>
      <p style={{margin: 0}}>bad {bad}</p>
    </div>
  )
}

export default App;