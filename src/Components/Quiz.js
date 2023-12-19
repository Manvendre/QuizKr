import 'bootstrap/dist/css/bootstrap.min.css';
import './Quiz.css';
import { useEffect, useState } from 'react';
import Question from './Question';


const Quiz= ({name,score,questions,setquestions,setscore})=>{
    const [options,setoptions]=useState();
    const [currques,setcurrques]=useState(0);


    useEffect(()=>{console.log(questions)
      setoptions(questions && handleShuffle([
        questions[currques]?.correct_answer,
        ...questions[currques]?.incorrect_answers,

      ])
    );

    function handleShuffle(optionss){
        return optionss.sort(() => Math.random() - 0.5);
    }  
    },[questions,currques]);


    return(
          <div className='quiz'>
          <span className='subtital'>welcome,{name}</span>

          {questions ? (
           <>
             <div className='quizInfo'>
                <span>{questions[currques].category}</span>
                <span>Score:{score}</span>
             </div>
             <Question 
             currques={currques}
             setcurrques={setcurrques} 
             questions={questions}
             options={options}
             correct={questions[currques]?.correct_answer}
             score={score}
             setscore={setscore}
             setquestions={setquestions}
             ></Question>
           </>
          ) : (
            <div class="spinner-border" 
            style= {{ margin:100}}
            color= "inherit"
            size= {150}
            thickness={1} role="status">
              <span class="visually-hidden ">Loading...</span>
            </div>
          )
          }
          </div>);
}

export default Quiz;