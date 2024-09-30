import "./AuthSignup.css"
import { validateName,validateEmail,validatePassword,validateNumber } from "../../utils"
import { signupHandler } from "../../Services/signup-service"
import { useAuth } from "../../context"
import { useNavigate } from "react-router-dom"

let isNumberValid,isNameValid,isEmailValid,isPasswordValid,isConfrimPasswordValid;

export const AuthSignup = () =>{

   const { username , email, password , number,confirmPassword , authDispatch} = useAuth();
      
  console.log({ username , email, password , number,confirmPassword});

  const navigate = useNavigate();

  const handleNumberChange = (event) =>{
     isNumberValid = validateNumber(event.target.value);
    if(isNumberValid){
      console.log("Valid Input");
      authDispatch({
        type: "NUMBER",
        payload: event.target.value
   })
    }else{
       console.log("Invalid number");
    }
        
  }

  const handleNameChange = (event) =>{
     isNameValid = validateName(event.target.value);
    if(isNameValid){
      console.log("Valid Input");
      authDispatch({
        type: "NAME",
        payload: event.target.value
   })
    }else{
      console.log("Invalid name")
    }
    
}

const handleEmailChange = (event) =>{
   isEmailValid = validateEmail(event.target.value);
  if(isEmailValid){
    console.log("Valid Input");
    authDispatch({
      type: "EMAIL",
      payload: event.target.value
 })
  }else{
    console.log("Email valid")
  }
  
}

const handlePasswordChange = (event) =>{
   isPasswordValid = validatePassword(event.target.value);
  if(isPasswordValid){
    console.log("Valid Input");
    authDispatch({
      type: "PASSWORD",
      payload: event.target.value
 })
  }else{
     console.log("Invalid Password")
  }
  
}

const handleConfirmPasswordChange = (event) =>{
   isConfrimPasswordValid = validatePassword(event.target.value);
  if(isConfrimPasswordValid){
    console.log("Valid Input");
    authDispatch({
      type: "CONFIRM_PASSWORD",
      payload: event.target.value
 })
  }else{
    console.log("Invalid Confrim Password");
  }
  
}

const handleFormSubmit = async (event) => {
  event.preventDefault();
  if (
    isNumberValid &&
    isNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfrimPasswordValid
  ) {
    const result = await signupHandler(username, number, email, password);

    if (result) {
      // Signup successful, clear the form data
      authDispatch({
        type: "CLEAR_USER_DATA",
      });

      // Navigate to login page
      navigate("/");
    } else {
      console.log("Signup failed");
    }
  } else {
    console.log("Invalid form inputs");
  }
};

 const handleLoginClick = () =>{
     navigate("/auth/login");
 }

    return (
      <div className="auth-signup-container">
  <form className="auth-signup-form" onSubmit={handleFormSubmit}>
    <div className="auth-signup-d-flex auth-signup-direction-column lb-in-container">
      <label className="auth-signup-label">
        Mobile Number <span className="auth-signup-asterisk">*</span>
      </label>
      <input
        defaultValue={number}
        type="number"
        className="auth-signup-input"
        maxLength="10"
        placeholder="Enter Mobile Number"
        required
        onChange={handleNumberChange}
      />
    </div>
    <div className="auth-signup-d-flex auth-signup-direction-column lb-in-container">
      <label className="auth-signup-label">
        Name <span className="auth-signup-asterisk">*</span>
      </label>
      <input
        defaultValue={username}
        className="auth-signup-input"
        placeholder="Enter Name"
        required
        onChange={handleNameChange}
      />
    </div>
    <div className="auth-signup-d-flex auth-signup-direction-column lb-in-container">
      <label className="auth-signup-label">
        Email <span className="auth-signup-asterisk">*</span>
      </label>
      <input
        defaultValue={email}
        className="auth-signup-input"
        placeholder="Enter Email"
        type="email"
        required
        onChange={handleEmailChange}
      />
    </div>
    <div className="auth-signup-d-flex auth-signup-direction-column lb-in-container">
      <label className="auth-signup-label">
        Password <span className="auth-signup-asterisk">*</span>
      </label>
      <input
        defaultValue={password}
        className="auth-signup-input"
        placeholder="Enter Password"
        type="password"
        required
        onChange={handlePasswordChange}
      />
    </div>
    <div className="auth-signup-d-flex auth-signup-direction-column lb-in-container">
      <label className="auth-signup-label">
        Confirm Password <span className="auth-signup-asterisk">*</span>
      </label>
      <input
        defaultValue={confirmPassword}
        className="auth-signup-input"
        placeholder="Enter Password"
        type="password"
        required
        onChange={handleConfirmPasswordChange}
      />
    </div>
    <div>
      <button className="auth-signup-button btn-primary btn-login cursor">
        Submit
      </button>
    </div>
    <div className="auth-login-container">
      <button 
        className="auth-login-button btn-secondary cursor" 
        onClick={handleLoginClick}
        type="button" // Prevents form submission
      >
        Login
      </button>
    </div>
  </form>
</div>


    )
}