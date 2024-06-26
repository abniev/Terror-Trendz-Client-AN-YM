import React from "react";
import { useContext, useState } from "react";
import { ProductContext } from "../context/product.context";

function CreateForm() {
  const [productInfo, setproductInfo] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    image: "",
  });
  const { createProduct } = useContext(ProductContext);
  const handleChange = (e) => {
    setproductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <form
        className="font-sophisto max-w-lg mx-auto p-5 m-5 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          createProduct(productInfo);
        }}
      >
        <div>
          {" "}
          <label htmlFor="name"> Name</label>
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            type="text"
            name="name"
            onChange={handleChange}
            value={productInfo.name}
          ></input>
        </div>
        <div>
          <label className="" htmlFor="description">
            Description
          </label>{" "}
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            type="text"
            name="description"
            onChange={handleChange}
            value={productInfo.description}
          ></input>
        </div>
        <div className="">
          {" "}
          <label htmlFor="price">Price</label>
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            type="number"
            name="price"
            onChange={handleChange}
            value={productInfo.price}
          ></input>{" "}
        </div>
        <div>
          {" "}
          <label className="" htmlFor="quantity">
            Quantity
          </label>
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            type="number"
            name="quantity"
            onChange={handleChange}
            value={productInfo.quantity}
          ></input>
          <label className="" htmlFor="image">
            Image
            <svg
              class="w-[43px] h-[43px] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 4.586A2 2 0 0 1 8.914 4h6.172a2 2 0 0 1 1.414.586L17.914 6H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.086L7.5 4.586ZM10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
                clip-rule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div>
          {" "}
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            type="text"
            name="image"
            onChange={handleChange}
            value={productInfo.image}
          />
        </div>
        <div className="mt-5">
          {" "}
          <button
            type="submit"
            className="gap-4 p-4 text-white bg-gray-800 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Create
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
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
