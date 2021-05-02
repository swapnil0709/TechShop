import React from "react";
import "./SignIn.styles.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <div className="sign-in title">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            required
            type="email"
            label="Email"
            handleChange={this.handleChange}
          />

          <FormInput
            name="password"
            value={this.state.password}
            required
            type="password"
            label="Password"
            handleChange={this.handleChange}
          />

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
