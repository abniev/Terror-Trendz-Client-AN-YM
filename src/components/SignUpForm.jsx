import { React, useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";

function SignUpForm() {
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { signup } = useContext(AuthContext);

  const handleChange = (e) => {
    setSignupInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signup(signupInfo);
        }}
      >
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          value={signupInfo.email}
          onChange={handleChange}
        />
        <label htmlFor="username">username</label>
        <input
          type="password"
          name="password"
          value={signupInfo.password}
          onChange={handleChange}
        />
        <button type="submit">register now</button>
      </form>
    </div>
  );
}

export default SignUpForm;
