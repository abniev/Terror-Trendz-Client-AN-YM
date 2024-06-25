import { useContext, useState } from "react";
import EditForm from "./EditForm";
import { ProductContext } from "../context/product.context";
import { AuthContext } from "../context/auth.context";

function ProductDetailsCard({ product }) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const { deleteProduct } = useContext(ProductContext);
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-md mx-auto flex justify-center items-stretch bg-gray-100 border border-black rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-black dark:bg-gray-800 dark:hover:bg-gray-700 m-10 ml-20">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={product.image}
      ></img>
      <div className="flex flex-wrap justify-between p-4 leading-normal">
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.name}{" "}
        </h1>
        <p>
          <span className="text-lg">
            {" "}
            {product.description} <br />
          </span>
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {" "}
            {product.price} <br />
          </span>
          Qty: {product.quantity} <br />
        </p>
        {user && user.isAdmin && (
          <>
            <button
              className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
              onClick={() => setToggleEdit(!toggleEdit)}
            >
              Edit
            </button>
            <button
              className="text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
              onClick={() => deleteProduct(product._id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
      {toggleEdit && (
        <EditForm toggleEdit={toggleEdit} setToggleEdit={setToggleEdit} />
      )}
    </div>
  );
}

export default ProductDetailsCard;
