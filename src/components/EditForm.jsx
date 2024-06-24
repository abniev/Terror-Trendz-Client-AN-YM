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
        onSubmit={(e) => {
          e.preventDefault();
          updateProduct(currProduct, productId, setToggleEdit);
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={currProduct.name}
        ></input>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={currProduct.description}
        ></input>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          onChange={handleChange}
          value={currProduct.price}
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          onChange={handleChange}
          value={currProduct.quantity}
        />
        <label htmlFor="image">Image</label>
        <input
          type="text"
          name="image"
          onChange={handleChange}
          value={currProduct.image}
        />
        <button type="submit" className="btn">
          edit
        </button>
      </form>
    )
  );
}

export default EditForm;
