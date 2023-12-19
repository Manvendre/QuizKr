import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Result.css";

const Result = ({ name, score }) => {
    const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
        navigate('/');
    }
  }, [name,navigate]);

  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <button
        className='btn btn-secondary'
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        onClick={ navigate('/')}
      >
        Go to homepage
      </button>
    </div>
  );
};

export default Result;