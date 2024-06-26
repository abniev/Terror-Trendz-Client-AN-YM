import React from "react";

function About() {
  return (
    <div className="font-sophisto flex flex-wrap justify-center">
      <div className="text-2xl font-bold tracking-tight text-gray-50 dark:text-white m-5 max-w-sm bg-gray-900 border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717711641/Yamil_wms7pv.png"
          className="card-img-top rounded-lg"
          alt="yamil head shot"
        />
        <div className="card-body m-2">
          <h1 className="card-title">Yamil Rivera</h1>
          <h3 className="card-text">@mailmanlegs</h3>
        </div>
      </div>
      <div className="text-2xl font-bold tracking-tight text-gray-50 dark:text-white m-5 max-w-sm bg-gray-900 border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          src="https://res.cloudinary.com/dlbhhobaw/image/upload/v1717711973/Abner_bpshyp.jpg"
          className="card-img-top rounded-lg"
          alt="abner head shot"
        />
        <div className="card-body m-2">
          <h1 className="card-title">Abner Nieves</h1>
          <h3 className="card-text text-body-secondary">@el787</h3>
        </div>
      </div>
    </div>
  );
}

export default About;
