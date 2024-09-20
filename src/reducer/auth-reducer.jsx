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