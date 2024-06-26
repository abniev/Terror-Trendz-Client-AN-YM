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
    <div className="font-sophisto">
      <form
        className="max-w-lg mx-auto p-5 m-5 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          signup(signupInfo);
        }}
      >
        <label htmlFor="email">Email</label>
        <input
          className="w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
          type="email"
          name="email"
          value={signupInfo.email}
          onChange={handleChange}
        />
        <label htmlFor="username">Username</label>
        <input
          className="w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
          type="username"
          name="username"
          value={signupInfo.username}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          className="w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
          type="password"
          name="password"
          value={signupInfo.password}
          onChange={handleChange}
        />
        <button
          className="mt-10 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-yellow-400 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-yellow-400"
          type="submit"
        >
          Register Now
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
