import "./App.css";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Error from "./pages/Error";
import CreateProductPage from "./pages/CreateProductPage";
import { Toaster } from "react-hot-toast";
// import MusicList from "./pages/"

function App() {
  const isLoggedIn = () => {
    return localStorage.getItem("authToken") ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    );
  };
  const IsNotLoggedIn = () => {
    return !localStorage.getItem("authToken") ? (
      <Outlet />
    ) : (
      <Navigate to="/" />
    );
  };
  return (
    <div>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        {/* <Route path="/music" element={<MusicList />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<IsNotLoggedIn />}></Route>

        <Route path="/product/create" element={<CreateProductPage />} />
        {/* <Route path="/music/create" element={<CreateMusicPage />} /> */}
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
