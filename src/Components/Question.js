import 'bootstrap/dist/css/bootstrap.min.css';
import './Question.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Question =({currques,setcurrques,questions,correct,score,setscore,setquestions,options})=>{
    const [selected,setselected]=useState();
    const [error,seterror]=useState(false);

    const navigate = useNavigate()

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setselected(i);
    if (i === correct) setscore(score + 1);
    seterror(false);
  };

  const handleNext = () => {
    if (currques > 8) {
        navigate('/result');
    } else if (selected) {
      setcurrques(currques + 1);
      setselected();
    } else seterror("Please select an option first");
  };

  const handleQuit = () => {
    setcurrques(0);
    setquestions();
  };


    return(
        <div className='question'>
            <h2>Question {currques+1}</h2>
            <div className='singleQuestion'>
                <h2>{questions[currques].question}</h2>


                <div className="options">
                  {/* {error && <ErrorMessage>{error}</ErrorMessage>}*/}
                       {options &&
                           options.map((i) => (
                            <button
                             className={`singleOption ${selected && handleSelect(i)}`}
                             key={i}
                             onClick={() => handleCheck(i)}
                             disabled={selected}
                            >
                              {i}
                          </button>
                     ))}
                 </div>

                 <div className="controls">
                      <button
                         className='btn btn-secondary'
                         variant="contained"
                         color="secondary"
                         size="large"
                         style={{ width: 185 }}
                         href="/"
                         onClick={() => handleQuit()}
                        >
                        Quit
                      </button>
                      <button
                        className='btn btn-secondary'
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{ width: 185 }}
                        onClick={handleNext}
                        >
                       {currques > 20 ? "Submit" : "Next Question"}
                      </button>
               </div>


            </div>
        </div>
    )
}

export default Question;