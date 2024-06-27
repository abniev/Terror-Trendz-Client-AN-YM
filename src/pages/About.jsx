import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="h-[1500px]">
      <div className="font-sophisto flex flex-wrap justify-center   ">
        <div className="text-2xl font-bold tracking-tight text-gray-50 dark:text-white m-5 pb-5 max-w-sm bg-gray-900 border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717711641/Yamil_wms7pv.png"
            className="card-img-top rounded-lg"
            alt="yamil head shot"
          />
          <div className="card-body m-5">
            <h1 className="text-4xl">Yamil Rivera</h1>
            <Link to="https://www.instagram.com/mailmanlegs/" target="_blank">
              <h3 className="text-2xl">@mailmanlegs</h3>
            </Link>
            <p className="text-base">Born: Puerto Rico</p>
            <p className="text-base">Resides: Bayamon, PR</p>
            <a
              href="https://github.com/Yrivera2822"
              target="_blank"
              class="text-white hover:text-white dark:hover:text-white ms-5"
            >
              <svg
                class="w-10 h-10"
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
          </div>
        </div>
        <div className="text-2xl font-bold tracking-tight text-gray-50 dark:text-white m-5 pb-5 max-w-sm bg-gray-900 border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717711973/Abner_bpshyp.jpg"
            className="card-img-top rounded-lg"
            alt="abner head shot"
          />
          <div className="card-body m-5">
            <h1 className="text-4xl">Abner Nieves</h1>
            <Link to="https://www.instagram.com/el787/" target="_blank">
              <h3 className="text-2xl">@el787</h3>
            </Link>
            <p className="text-base">Born: Puerto Rico</p>
            <p className="text-base">Resides: San Juan, PR</p>
            <a
              href="https://github.com/abniev"
              target="_blank"
              class="text-white hover:text-white dark:hover:text-white ms-5"
            >
              <svg
                class="w-10 h-10"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
