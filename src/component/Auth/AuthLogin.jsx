import "./Auth.css"
import { useAuth } from "../../context";
import { loginHandler } from "../../Services/auth-service";
import { useNavigate } from "react-router-dom";

export const AuthLogin  = () =>{

  const { number ,password,authDispatch} = useAuth();
   console.log({number,password})

   const  navigate  = useNavigate();

    const handleNumberChange = (e) =>{
          authDispatch({
              type:"NUMBER",
              payload:e.target.value
          })
    }

    const handlePasswordChange = (e) =>{
        authDispatch({
            type:"PASSWORD",
            payload:e.target.value
        })
  }

  const handleLoginClick =  (e) =>{
      e.preventDefault();
      const token =  loginHandler(number,password);
      if(token){
         navigate("/")
      }
      authDispatch({
         type: "TOKEN",
         payload:token
      })
      authDispatch({
          type: "CLEAR_CREDENTIALS"
      })
  }

  const  handleTestCredentialsClick =  () =>{
      const token =  loginHandler(9149202688,"m12345") 
      authDispatch({
        type: "TOKEN",
        payload:token
     })
      if(token){
        navigate("/")
      } 
  }

  const handleSignupClick = () =>{
     navigate("/auth/signup");
  }


     return (
        <div className="d-grid">
            <div className="login-auth d-flex direction-column justify-center">
                <h2 className="auth-title">Login</h2>
                <form onSubmit={handleLoginClick}>
                    <div className="form-container">
                        <label className="form-label">number</label>
                        <input value={number} className="form-input lh-ls" placeholder="enter number" onChange={handleNumberChange}/>
                    </div>
                    <div className="form-container">
                        <label className="form-label">Password</label>
                        <input value={password} className="form-input lh-ls" placeholder="enter password" type="password" onChange={handlePasswordChange}/>
                    </div>
                    <div className="cta">
                        <button className="button login-btn btn-margin cursor sign-up-btn">Login</button>
                    </div>
                </form>
                <div>
                    <button className="button login-btn btn-outline-primary btn-margin sign-up-btn" onClick={handleTestCredentialsClick}>
                        Login with Test Credentials
                    </button>
                </div>
                <div>
                    <button className="button login-btn btn-outline-primary btn-margin sign-up-btn" onClick={handleSignupClick}>
                        Create New Account
                   </button>
                </div>
            </div>
        </div>
     );
}