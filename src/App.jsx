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
import VideoPage from "./pages/VideoPage";
import CreateVideoPage from "./pages/VideoPage";
import Footer from "./components/Footer";

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
        <Route path="/music" element={<VideoPage />} />
        <Route path="/about" element={<About />} />

        <Route element={<IsNotLoggedIn />}>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="/product/create" element={<CreateProductPage />} />
        <Route path="/music/create" element={<CreateVideoPage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <div> 
        <Footer />
        </div> 
      
    </div>
  );
}

export default App;
