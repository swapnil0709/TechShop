import React from "react";
import SignIn from "../../components/SignIn/SignIn";
import Signup from "../../components/Signup/Signup";
import "./SignInSignUp.styles.scss";

export default function SignInSignUp() {
  return (
    <div className="register">
      <SignIn />
      <Signup />
    </div>
  );
}
