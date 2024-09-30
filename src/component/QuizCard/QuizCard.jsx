import "./QuizCard.css";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context";

export const QuizCard = ({ quizCategory }) => {
    const { image, title, description, category } = quizCategory;
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const { quizDispatch } = useQuiz();

    const handlePlayNowClick = () => {
        if (token) {
            quizDispatch({
                type: "CATEGORY",
                payload: category,
            });
            localStorage.setItem("category", category);
            navigate("/quiz");
        } else {
            navigate("/auth/login");
        }
    };

    return (
        <div className="relative quizcard-container shadow cursor-pointer">
            <div onClick={handlePlayNowClick}>
                <div className="img-box">
                    <img className="img" src={image} alt="quizcard" />
                </div>
                <div className="quizcard-details">
                    <h3 className="title">{title}</h3>
                    <span className="description">{description}</span>
                </div>
            </div>
            <div className="play-now">
                <button className="button play-now-btn" onClick={handlePlayNowClick}>
                    Play Now
                </button>
            </div>
        </div>
    );
};
