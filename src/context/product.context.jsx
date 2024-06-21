import { createContext, useState, useEffect } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProductContext = createContext();

function ProductProvider({ children }) {
  const [Products, setProducts] = useState(null);
  const navigate = useNavigate();

  const getAllProducts = async () => {
    try {
      const response = await api.get("/product/all");

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createProduct = async (body) => {
    try {
      const response = await api.post("/product", body);

      if (response.status === 200 || response.status === 201) {
        toast.success(body.name + " created succesfully");

        getAllProducts();
        navigate("/product");
      }
    } catch (error) {
      console.log("error while creating the product", error);
    }
  };

  const updateProduct = async (body, id, toggle) => {
    try {
      const response = await api.put("/product/" + id, body);

      if (response.status === 200 || response.status === 201) {
        toast.success(response.data.updated.name + " was updated succesfully");
        getAllProducts();
        toggle(false);
      }
    } catch (error) {
      toast.error("Error updating this product");
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const check = confirm("Are you sure you want to delete this product?");
      if (check) {
        const response = await api.delete("/product/" + id);

        if (response.status === 200) {
          toast.success("Product deleted succesfully");
          getAllProducts();

          navigate(-1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        Products,
        createProduct,
        updateProduct,
        deleteProduct,
        getAllProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export { ProductContext, ProductProvider };
