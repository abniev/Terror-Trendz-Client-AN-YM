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
      <h1 className="flex text-3xl">Sign Up</h1>
      <form
        className="max-w-lg mx-auto p-5 m-5 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          signup(signupInfo);
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          className="w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          type="email"
          name="email"
          value={signupInfo.email}
          onChange={handleChange}
        />
        <label htmlFor="username">Username</label>
        <input
          className="w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          type="username"
          name="username"
          value={signupInfo.username}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          className="w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          type="password"
          name="password"
          value={signupInfo.password}
          onChange={handleChange}
        />
        <button type="submit">Register Now</button>
      </form>
    </div>
  );
}

export default SignUpForm;
