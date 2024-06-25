import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer class="bg-yellow-400 border-gray-200 dark:bg-gray-900">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a
              href="https://www.instagram.com/terror.trendz/"
              target="_blank"
              class="flex items-center"
            >
              <img
                src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717685535/Nav-Terror-Logo_nmhanx.png"
                class="h-20 me-3 right: 10px;"
                alt="Terror Logo"
              />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
          </div>
          <div class="grid grid-cols-2 gap-1 space-x-10 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-m font-semibold text-gray-900 uppercase dark:text-white">
                Contacts
              </h2>

              <ul class="text-gray-700 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a class="hover:underline">Terrorfriends@gmail.com</a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/9cVKaKcjbTSjdmUXA"
                    class="hover:underline"
                  >
                    VISIT US📍
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-m font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul class="text-gray-700 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="https://github.com/abniev" class="hover:underline ">
                    Github Abner
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Yrivera2822"
                    class="hover:underline"
                  >
                    Github Yamil
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-m font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul class="text-gray-700 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="#https://s3.amazonaws.com/rails-camp-tutorials/blog/programming+memes/programming-or-googling.jpg"
                    class="hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-900 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-900 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Terror™
            </a>
            . All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              class="text-gray-700 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  href="https://github.com/Yrivera2822"
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              class="text-gray-700 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                class="w-5 h-5 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="sr-only">Discord community</span>
            </a>
            <a
              href="#"
              class="text-gray-700 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Twitter page</span>
            </a>
            <a
              href="#"
              class="text-black hover:text-gray-700 dark:hover:text-white ms-5"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">GitHub account</span>
            </a>
            <a
              href="#"
              class="text-gray-700 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <span class="sr-only">Instagram Account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

// function Footer() {
//   return (
//     <footer className="bg-warning dark:bg-black">
//       {/* <div className='footer-top'>
//           <p>JOIN THE TERROR CLUB NOW</p>
//         </div> */}

//       <img
//         src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717685535/arcade-fast-game-over_w8nqdr.gif"
//         className="img-fluid md:flex md:justify-between"
//         alt="F-img"
//       />

//       <div
//         className="footer-content "
//         style={{ height: "70px", color: "#4b0082" }}
//       >
//         <h3>Contact us:</h3>
//         <p>Email: Terrorfriends@gmail.com</p>
//         <p>Phone: 723-780-3903</p>
//         <p>1601 Apt #201 Ave Fernandez Juncos San Juan PR.</p>
//       </div>

//       <div className="footer-content">
//         <h3 className="follow-us" style={{ color: "#4b0082" }}>
//           Follow Us:
//         </h3>
//         <ul className="social-media d-flex">
//           <Link to="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="blank">
//             <img
//               src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717685535/logo-black_nvbkev.png"
//               className="T-logo"
//               alt="T-img"
//             />
//           </Link>

//           <Link to="https://www.instagram.com/terror.trendz/" target="_blank">
//             <img
//               src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717685535/Instagram_Glyph_Black_rjzxcn.png"
//               className="T-logo"
//               alt="T-img"
//             />
//           </Link>

//           <Link
//             to="https://www.facebook.com/people/Terror-Trendz/100088390365188/"
//             target="blank"
//             alt="T-img"
//           >
//             <img
//               src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717702955/Facebook_Logo_Secondary_eib83f.png"
//               className="T-logo"
//               alt="T-img"
//             />
//           </Link>
//         </ul>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
