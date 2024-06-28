import { useContext, useState } from "react";
import EditForm from "./EditForm";
import { ProductContext } from "../context/product.context";
import { AuthContext } from "../context/auth.context";
import GenerateScoreLabel from "../assets/lib/generateScoreLabel";

function ProductDetailsCard({ product }) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const { deleteProduct } = useContext(ProductContext);
  const { user } = useContext(AuthContext);

  return (
    <div className="font-sophisto bg-gray-100 border border-black rounded-lg md:flex-row md:max-w-xl m-10 md: mx-10">
      <img className="object-cover rounded-t-lg" src={product.image}></img>
      <div className="ml-5 p-4 leading-normal">
        <h1 className="flex-wrap mb-2 text-4xl font-bold text-gray-900 dark:text-white">
          {product.name}
        </h1>
        <p>
          <span className="text-lg">
            {product.description} <br />
          </span>
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${product.price} <br />
          </span>
        </p>
        {user && user.isAdmin && (
          <div>
            <span className="p-5">
              {" "}
              Qty: <GenerateScoreLabel quantity={product.quantity} />
            </span>
            <button
              className="mt-5 mr-5 text-white bg-black hover:bg-gray-200 hover:text-black border border-black focus:ring-4 focus:outline-none focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
              onClick={() => setToggleEdit(!toggleEdit)}
            >
              Edit
            </button>
            <button
              className="text-white bg-black hover:bg-gray-200 hover:text-black border border-black focus:ring-4 focus:outline-none focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
              onClick={() => deleteProduct(product._id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
      {toggleEdit && (
        <EditForm toggleEdit={toggleEdit} setToggleEdit={setToggleEdit} />
      )}
    </div>
  );
}

export default ProductDetailsCard;
