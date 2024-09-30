import "./Result.css";
import { Fragment } from "react";
import { Navbar } from "../../component";
import { useQuiz } from "../../context";
import { useNavigate } from "react-router-dom";

export const Result = () => {
  const { score } = useQuiz();
  const maxScore = 50; 
  const navigate = useNavigate();

  const handleRetakeClick = () =>{
        navigate("/");
  }

  return (
    <Fragment>
      <Navbar route="result" />
      <main className="results d-flex direction-column align-center justify-center">
        <h2>Quiz Result 🎉</h2>

        <div className="score-container">
          <p className="score-text">Your score is {score} 🍕🍕</p>

          {/* Progress bar */}
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${(score / maxScore) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="actions">
          <button className="btn btn-primary" onClick={handleRetakeClick}>Home</button>
        
        </div>
      </main>
    </Fragment>
  );
};
