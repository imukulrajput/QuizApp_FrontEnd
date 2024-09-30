import { Fragment } from "react";
import { Navbar , AuthSignup } from "../../component";

export const Signup = () =>{
      return (
          <Fragment>
             <Navbar route="signup"/> 
                <AuthSignup />
          </Fragment>
      );
}