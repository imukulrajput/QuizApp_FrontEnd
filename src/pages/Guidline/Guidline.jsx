import "./Guidline.css";
import rules from "../../assets/rules.svg";
import { useNavigate } from "react-router-dom";

export const Guidline = () => {

  const navigate = useNavigate();

   const handlePlayButtonClick = () =>{
       navigate("/")
   }

  return (
    <div className="guidelines-container">
      <div className="image-section">
        <img
          src={rules}
          alt="Guidelines Illustration"
          className="guidelines-image"
        />
      </div>
      <div className="text-section">
        <h2 className="guidelines-title">Guidelines</h2>
        <ul className="guidelines-list">
          <li>There are total 10 questions in each category.</li>
          <li>You can attempt each question only once.</li>
          <li>
            Each question carries five mark. No negative marking for wrong
            answers.
          </li>
          <li>Questions are Multiple Choice Questions.</li>
          <li>Don't plagiarize. Try to answer on your own.</li>
          <li>You can take the quiz multiple times.</li>
        </ul>
        <button className="start-button" onClick={handlePlayButtonClick}>Lets Play🔥🔥</button>
      </div>
    </div>
  );
};
