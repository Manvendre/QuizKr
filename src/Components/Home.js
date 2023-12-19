import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import quizicon from './Quizicon.svg'
import Categories from '../Data/category';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = ({name,setname,fetchQuestions})=>{
              
    const [category,setcategory]=useState("");
    const [level,setlevel]=useState("");
    const [error,setError]=useState(false);

    const navigate = useNavigate();

    const handleSubmit = () => {
       if (!name) {
       setError(true);
       return;}
       else {
          setError(false);
          fetchQuestions (category, level);
          navigate('/quiz');
       }};

    return(<>
    <h1 className='headding'>QuizKr</h1>
    <div className='container'>
        <div className='custum'>
            <h4 className='tital'>Quiz Customization</h4>
            <form>
                <div class="form-group">
                     <input type="text" class="form-control" id="Name" aria-describedby="emailHelp" placeholder="Enter Your Name" onChange={(e)=>setname(e.target.value)}/>
                     <small id="emailHelp" class="form-text text-muted">We'll never share your Name with anyone else.</small>
                     
               </div>
               <div class="form-group">
                   <select class="form-control" id="type" onChange={(e)=>setcategory(e.target.value)} value={category}>
                        <option selected>Select Category</option>
                        {Categories.map((cat)=>(
                            <option key={cat.Category} value={cat.value}>
                                {cat.category}
                            </option>
                        ))}
                    </select>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your Name with anyone else.</small>
                </div>
                <div class="form-group">
                   
                   <select class="form-control" id="level" onChange={(e)=>setlevel(e.target.value)} value={level}>
                        <option selected>Select Level</option>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your Name with anyone else.</small>
                </div>

                <div class="text-center"><button type="submit" class="btn btn-dark" onClick={handleSubmit}>Start Quiz</button></div>
            </form>
            
        </div>
        
        <img src={quizicon} className='icon'></img>
            
    </div>
    </>);
}

export default Home;