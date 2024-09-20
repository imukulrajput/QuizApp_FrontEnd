import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../../context";

export const Navbar = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const handleAuthClick = () =>{
     if(token){
        localStorage.clear();
        
     }
     navigate("/auth/login");
  }

  return (
    <header className="heading d-flex grow-shrink-basis align-center">
      <div className="heading-title-icon d-flex grow-shrink-basis align-center">
        <img className="icon mr-1" src="/assets/image.png" alt="logo" />
        <h1 className="heading-title">
          <Link to="/" className="link">
            Quizify
          </Link>
        </h1>
      </div>
      <nav className="navigation">
        <ul className="list-non-bullet">
          <li className="list-item-inline">
            <Link to="/" className="link cursor">
              Home
            </Link>
          </li>
          <li className="list-item-inline">
            <Link to="/auth/login" className="link cursor" onClick={handleAuthClick}>
              {token? "Logout": "Login"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
