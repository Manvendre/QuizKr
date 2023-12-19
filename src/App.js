import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { useState } from 'react';
import Quiz from "./Components/Quiz";
import Result from './Components/Result'
import axios from "axios";


function App() {

  const [name,setname]=useState("");
  const [questions,setquestions]=useState();
  const [score,setscore]=useState(0)

  const fetchQuestions = async(category="",level="") =>{
    const {data} = await axios.get(
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${level && `&level=${level}`}&type=multiple`
      );
    setquestions(data.results);
    }
  return (
    <div className="App">
      <Routes>
          <Route index element={<Home name={name} setname={setname} fetchQuestions={fetchQuestions}></Home>} />
          <Route path="quiz" element={<Quiz name={name} questions={questions} score={score} setscore={setscore} setquestions={setquestions} />} />
          <Route path="result" element={<Result name={name} score={score} />} />
      </Routes>
    </div>
  );
}

export default App;
