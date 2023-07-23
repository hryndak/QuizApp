import React from "react"
import StartPage from "./components/home.jsx"
import Quizblock from "./components/quizblock.jsx";
import './style.css'

export default function App() {
  const [started, setStarted] = React.useState(false);
  const [data, setData] = React.useState([{
    0: {
      category: 'Example',
      type: 'Example',
      difficulty: 'Example',
      question: 'Example',
      correct_answer: 'Example',
    }
  }]);
  const [preferences, setPreferences] = React.useState({
    questions: 0,
    category: 'h',
    difficulty: 'e'
  })

  const categories = {
    History: 23,
    Sports: 21,
    Celebrities: 26,
    Politics: 24,
    Art: 25
  }


  const fetchData = () => {
    fetch(`https://opentdb.com/api.php?amount=${preferences.questions}&category=${categories[preferences.category]}&difficulty=${preferences.difficulty}`)
      .then(res => res.json())
      .then(data => setData(data.results))
      .catch(err => err)
  }

  const handleSubmit = event => {
    fetchData();
    event.preventDefault();
    setStarted(true);
  }


  return (
    <>
      {started ? (<Quizblock
        data={data} />) : (<StartPage
          setPreferences={setPreferences}
          handleSubmit={handleSubmit}
        />)}
    </>
  )
}
