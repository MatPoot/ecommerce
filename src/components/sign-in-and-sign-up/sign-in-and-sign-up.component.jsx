import React from "react";

import "./sign-in-and-sign-up.styles.scss";

import SignIn from "../sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

// used function component to keep data on the component
const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp></SignUp>
  </div>
);

export default SignInAndSignUpPage;
