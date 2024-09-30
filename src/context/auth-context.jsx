import { createContext,useContext,useReducer,useEffect } from "react";
import { authReducer } from "../reducer/auth-reducer";


const initialState = {
    number: "",
    password: "",
    email: "",
    username: "",
    confirmPassword: "",
    token: "",
    
}

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    useEffect(() =>{
         const token = localStorage.getItem("token");
         authDispatch({
             type: "INITIAL_STATE",
             payload: token
         }) 
    },[])

    const [{number,password,token,username,email,confirmPassword},authDispatch] = useReducer(authReducer,initialState)
    return(
     <AuthContext.Provider value={{number,password,token,username,email,confirmPassword,authDispatch}}>
        {children}
     </AuthContext.Provider> 

)
} 

const useAuth = () => useContext(AuthContext);
export { useAuth,AuthProvider }
