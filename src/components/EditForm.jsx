import React from "react";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/product.context";
import { useParams } from "react-router-dom";

function EditForm({ toggleEdit, setToggleEdit }) {
  const [currProduct, setCurrProduct] = useState(null);
  const { productId } = useParams();
  const { products, updateProduct } = useContext(ProductContext);
  const handleChange = (e) => {
    setCurrProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    products &&
      setCurrProduct(products.find((product) => product._id === productId));
  }, [toggleEdit]);

  return (
    currProduct && (
      <form
        className="max-w-lg mx-auto p-5 m-5"
        onSubmit={(e) => {
          e.preventDefault();
          updateProduct(currProduct, productId, setToggleEdit);
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          className="w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
          type="text"
          name="name"
          onChange={handleChange}
          value={currProduct.name}
        ></input>
        <label htmlFor="description">Description</label>
        <input
          className="w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
          type="text"
          name="description"
          onChange={handleChange}
          value={currProduct.description}
        ></input>
        <label htmlFor="price">Price</label>
        <input
          className="w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
          type="number"
          name="price"
          onChange={handleChange}
          value={currProduct.price}
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          className="w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
          type="number"
          name="quantity"
          onChange={handleChange}
          value={currProduct.quantity}
        />
        <label htmlFor="image">Image</label>
        <input
          className="w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-900 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
          type="text"
          name="image"
          onChange={handleChange}
          value={currProduct.image}
        />
        <button
          type="submit"
          className="mt-5 text-white bg-black hover:bg-gray-200 hover:text-black border border-black focus:ring-4 focus:outline-none focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
        >
          Save
        </button>
      </form>
    )
  );
}

export default EditForm;
