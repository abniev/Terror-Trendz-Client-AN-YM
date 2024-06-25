import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";

function LoginForm() {
  const [loginInfo, setLoginInfo] = useState({
    loginInfo: "",
    password: "",
  });
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setLoginInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <form
      className="max-w-lg mx-auto p-5 m-5 rounded-lg"
      onSubmit={(e) => {
        e.preventDefault();
        login(loginInfo);
      }}
    >
      <label htmlFor="loginInfo">username / email</label>
      <input
        className="w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        type="text"
        name="loginInfo"
        value={loginInfo.loginInfo}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        className="w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        type="password"
        name="password"
        value={loginInfo.password}
        onChange={handleChange}
      />
      <button
        className="mt-5 text-white bg-black hover:bg-gray-200 hover:text-black border border-black focus:ring-4 focus:outline-none focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
        type="submit"
      >
        log in
      </button>
    </form>
  );
}

export default LoginForm;
