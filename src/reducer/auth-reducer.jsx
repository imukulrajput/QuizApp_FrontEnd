export const authReducer = (state,{type,payload}) =>{
     switch(type){
           
        case "INITIAL_STATE":
            return{
                ...state,
                token:payload
            }

          case "NUMBER":
            return{
                ...state,
                number:payload
            }

           case "PASSWORD":
            return{
                ...state,
                password:payload
            } 
            case "NAME":
                return {
                  ...state,
                  username: payload,
                };
              case "EMAIL":
                return {
                  ...state,
                  email: payload,
                };
                case "CONFIRM_PASSWORD":
                    return{
                        ...state,
                        confimPassword: payload,
                    } 
                case "CLEAR_USER_DATA":
                    return{
                        ...state,
                        username:"",
                        number: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                }   

            case "CLEAR_CREDENTIALS":
                return{
                    ...state,
                    number:"",
                    password:"",
                }
            case "TOKEN":
            return{
                ...state,
                 token:payload
            }    
           

            default:
                return state
     }
}