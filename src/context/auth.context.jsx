import { createContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import api from "../services/api";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  // const navigate = useNavigate();

  const login = async (body) => {
    try {
      let response;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
      if (emailRegex.test(body.loginInfo)) {
        response = await api.post("/user/login", {
          password: body.password,
          email: body.loginInfo,
        });
      } else {
        response = await api.post("/user/login", {
          password: body.password,
          username: body.loginInfo,
        });
      }
      if (response.status === 201 || response.status === 200) {
        console.log("This is the user login data ==>", response.data.user);
        setUser(response.data.user);
        setLoggedIn(true);
        localStorage.setItem("authToken", response.data.authToken);
        navigate("/");
      }
    } catch (error) {
      setUser(null);
      setLoggedIn(false);
      localStorage.clear();
      console.log("error while loggin in", error);
      return error;
    }
  };
  const signup = async (body) => {
    try {
      const response = await api.post("/user/signup", body);

      if (response.status === 201 || response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log("error while signing up", error);
      return error;
    }
  };

  const verify = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (token) {
        const response = await api.get("/user/verify");

        setLoggedIn(true);
        setUser(response.data.user);
      } else {
        setLoggedIn(false);
        setUser(null);
        localStorage.clear();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setUser(null);
    setLoggedIn(false);
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    verify();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        loggedIn,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
// const authenticateUser = () => {
//   const storedToken = localStorage.getItem("authToken");

//   if (storedToken) {
//     axios
//       .get(`${API_URL}/auth/verify`, {
//         headers: { Authorization: `Bearer ${storedToken}` },
//       })
//       .then((response) => {
//         const user = response.data.user;

//         setIsLoggedIn(true);
//         setIsLoading(false);
//         setUser(user);
//       })
//       .catch((error) => {
//         if (error) {
//           setAuthError(error.response.data.message);
//           return;
//         }

//         setIsLoggedIn(false);
//         setIsLoading(false);
//         setUser(null);
//       });
//   } else {
//     setIsLoggedIn(false);
//     setIsLoading(false);
//     setUser(null);
//   }
// };

// const removeToken = () => {
//   localStorage.removeItem("authToken");
// };

// const logOutUser = () => {
//   removeToken();
//   authenticateUser();
// };

// useEffect(() => {
//   authenticateUser();
// }, []);
