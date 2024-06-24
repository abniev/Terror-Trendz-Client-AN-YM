import { useContext, useState } from "react";
import EditForm from "./EditForm";
import { ProductContext } from "../context/product.context";
import { AuthContext } from "../context/auth.context";

function ProductDetailsCard({ product }) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const { deleteProduct } = useContext(ProductContext);
  const { user } = useContext(AuthContext);

  return (
    <div>
      <img src={product.image}></img>
      <div>
        <h5>{product.name} </h5>
        <p>
          title: {product.title}
          <br />
          description: {product.description} <br />
          price: {product.price} <br />
          quantity: {product.quantity} <br />
        </p>
        {user && user.isAdmin && (
          <>
            <button className="btn" onClick={() => setToggleEdit(!toggleEdit)}>
              edit
            </button>
            <button className="btn" onClick={() => deleteProduct(product._id)}>
              delete
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
