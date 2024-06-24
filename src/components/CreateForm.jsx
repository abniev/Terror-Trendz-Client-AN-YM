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
        onSubmit={(e) => {
          e.preventDefault();
          createProduct(productInfo);
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={productInfo.name}
        ></input>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={productInfo.description}
        ></input>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          onChange={handleChange}
          value={productInfo.price}
        ></input>
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          onChange={handleChange}
          value={productInfo.quantity}
        ></input>
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          onChange={handleChange}
          value={productInfo.image}
        />
        <button type="submit" className="btn">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateForm;
