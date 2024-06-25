import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/product.context";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import ProductDetailsCard from "../components/ProductDetailsCard";
import ReviewForm from "../components/ReviewForm";
import ReviewCard from "../components/ReviewCard";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { products } = useContext(ProductContext);
  const { productId } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    products && setProduct(products.find((curr) => curr._id === productId));
  }, [products, productId]);

  return (
    <div>
      <h1 className="text-3xl ml-20">Product Details</h1>
      {product ? (
        <ProductDetailsCard product={product} />
      ) : (
        <p>Loading ...😈</p>
      )}
      {!user || user.isAdmin ? (
        <button
          type="button"
          className="text-white bg-black hover:bg-black focus:ring-4 focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-black dark:hover:bg-black focus:outline-none dark:focus:ring-black ml-20"
        >
          <Link to="/login">Login to review</Link>
        </button>
      ) : (
        <ReviewForm />
      )}

      {product && product.reviews.length ? (
        product.reviews.map((review) => (
          <ReviewCard review={review} user={user} />
        ))
      ) : (
        <p className="max-w-md mx-auto mt-5">No reviews yet</p>
      )}
    </div>
  );
}

export default ProductDetails;
