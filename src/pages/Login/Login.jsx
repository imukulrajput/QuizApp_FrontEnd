import { Fragment } from "react";
import { Navbar , AuthLogin } from "../../component";

export const Login = () =>{
      return (
          <Fragment>
             <Navbar route="login"/> 
                <AuthLogin />
          </Fragment>
      );
}