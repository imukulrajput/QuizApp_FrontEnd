import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { Fragment } from "react";
import { useQuiz } from "../../context";
import logo from "../../assets/logo.png"

export const Navbar = ({ route }) => {
  
  
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { quizDispatch } = useQuiz();
  

  const handleAuthClick = () => {
    if (token) {
      localStorage.clear();
      quizDispatch({
        type: "QUIT"
      })
    }
    navigate("/");
  };

  const handleEndGameClick = () => {
      quizDispatch({
         type:"QUIT"
      })
  };
  
  


  return (
    <header className="heading d-flex grow-shrink-basis align-center">
      <div className="heading-title-icon d-flex grow-shrink-basis align-center">
        <img className="icon mr-1" src={logo} alt="logo" />
        <h1 className="heading-title">
          {route === "home" || route === "login" || route === "signup" ? (
            <Link to="/" className="link">
              SmartQ
            </Link>
          ) : (
            "Quizify"
          )}
        </h1>
      </div>
      <nav className="navigation">
        <ul className="list-non-bullet">
          {route === "home" && (
            <Fragment>
              <li className="list-item-inline">
                <Link to="/guidline" className="link cursor">
                  Rules
                </Link>
              </li>
              <li className="list-item-inline">
                <Link
                  to="/auth/login"
                  className="link cursor"
                  onClick={handleAuthClick}
                >
                  {token ? "Logout" : "Login"}
                </Link>
              </li>
              <li className="list-item-inline">
                <Link to="/auth/signup" className="link cursor">
                  Signup
                </Link>
              </li>
            </Fragment>
          )}
          {route === "result" && (
            <Fragment>
              <li className="list-item-inline">
                <Link to="/" className="link cursor" onClick={handleEndGameClick}>
                  Home
                </Link>
              </li>
              <li className="list-item-inline">
                <span className="link cursor" onClick={handleAuthClick}>
                  Logout
                </span>
              </li>
             
            </Fragment>
          )}
        </ul>
      </nav>
    </header>
  );
};
