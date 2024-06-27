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
    <div className="h-[900px]">
      <form
        className="font-sophisto max-w-lg mx-auto p-5 m-5 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          createProduct(productInfo);
        }}
      >
        <div>
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
          <label htmlFor="description">Description</label>{" "}
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            type="text"
            name="description"
            onChange={handleChange}
            value={productInfo.description}
          ></input>
        </div>
        <div>
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
          <label htmlFor="quantity">Quantity</label>
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            type="number"
            name="quantity"
            onChange={handleChange}
            value={productInfo.quantity}
          ></input>
          <label htmlFor="image">Image</label>
        </div>
        <div>
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
            type="text"
            name="image"
            onChange={handleChange}
            value={productInfo.image}
          />
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="flex flex-wrap gap-2 text-white bg-gray-800 hover:bg-green-500 hover:text-white font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
