import { Fragment } from "react";
import { Navbar , AuthLogin } from "../../component";

export const Login = () =>{
      return (
          <Fragment>
             <Navbar /> 
                <AuthLogin />
          </Fragment>
      );
}