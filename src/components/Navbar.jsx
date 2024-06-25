import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="bg-yellow-400 border-gray-200 dark:bg-gray-900 flex flex-wrap justify-between items-center pt-4 mb-5">
      <div>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717685535/Nav-Terror-Logo_nmhanx.png"
            alt="logo"
            style={{ height: "100px" }}
          ></img>
        </Link>
        <Link className="m-5 p-5" to="/product">
          Products
        </Link>
        <Link className="m-5 p-5" to="/music">
          Music
        </Link>
        <Link className="m-5 p-5" to="/about">
          About
        </Link>
      </div>

      {user && user.isAdmin && (
        <div>
          <Link
            type="button"
            className="gap-4 p-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            to="/product/create"
          >
            Create a product
          </Link>
        </div>
      )}

      {user ? (
        <div
          type="button"
          className="gap-4 p-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link
            type="button"
            className="gap-4 p-4 text-white bg-gray-800 hover:bg-gray-200 hover:text-black hover:border border-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            to="/signup"
          >
            Sign up
          </Link>
          <Link
            type="button"
            className="gap-4 p-4 text-black border border-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            to="/login"
          >
            Log in
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
