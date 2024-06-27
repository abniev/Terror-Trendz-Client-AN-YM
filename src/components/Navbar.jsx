import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="font-sophisto text-2xl bg-yellow-400 border-gray-200 dark:bg-gray-900 ">
      <div className="max-w-screen-xl flex flex-wrap justify-between items-center pt-4 px-4 pb-2 mb-5 mx-auto">
        <Link className="mx-5 space-x-3 rtl:space-x-reverse" to="/">
          <img
            src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717685535/Nav-Terror-Logo_nmhanx.png"
            alt="logo"
            style={{ height: "100px" }}
          ></img>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-transparent  hover:border border-green-500 focus:outline-none focus:ring-2 focus:ring-black dark:text-black dark:hover:bg-yellow-400 dark:focus:ring-black"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="flex flex-wrap">
              <Link
                className="block m-5 p-5 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-5 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-500 dark:hover:text-white md:dark:hover:bg-transparent"
                to="/product"
              >
                Products
              </Link>
              <Link
                className="block m-5 p-5 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-5 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-500 dark:hover:text-white md:dark:hover:bg-transparent"
                to="/music"
                aria-current="page"
              >
                Music
              </Link>
              <Link
                className="block m-5 p-5 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-5 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-green-500 dark:hover:text-white md:dark:hover:bg-transparent"
                to="/about"
              >
                About
              </Link>
            </div>

            {user && user.isAdmin && (
              <div>
                <Link
                  type="button"
                  className="m-8 block flex flex-wrap text-white bg-gray-800 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
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
              <div type="button">
                <button
                  className="m-8 text-white bg-gray-800 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-500 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-row">
                <Link
                  type="button"
                  className="m-8 block flex flex-wrap gap-2 p-4 text-white bg-green-500 hover:bg-black hover:text-white hover:border border-black focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
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
                  className="m-8 block flex flex-wrap font-sophisto flex gap-2 p-4 text-black border border-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
