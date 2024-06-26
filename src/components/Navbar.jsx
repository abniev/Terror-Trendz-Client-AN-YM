import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="font-sophisto text-2xl bg-yellow-400 border-gray-200 dark:bg-gray-900 flex flex-wrap justify-between items-center pt-4 px-4 pb-5 mb-5">
      <div>
        <Link className="mx-5" to="/">
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

      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        {user && user.isAdmin && (
          <div>
            <Link
              type="button"
              className="flex text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              to="/product/create"
            >
              Add a product
              <svg
                className="rtl:rotate-180 w-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        )}
        {user ? (
          <div
            type="button"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <div>
            <Link
              type="button"
              className="mr-10 flex gap-2 p-4 text-white bg-gray-800 hover:bg-transparent hover:text-black hover:border border-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              to="/signup"
            >
              Sign up
              <svg
                className="rtl:rotate-180 w-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
            <Link
              type="button"
              className="font-sophisto mr-10 flex gap-2 p-4 text-black border border-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              to="/login"
            >
              Log in
              <svg
                className="rtl:rotate-180 w-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
