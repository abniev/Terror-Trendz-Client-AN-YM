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
    <div className="space-x-5">
      {product ? (
        <ProductDetailsCard product={product} />
      ) : (
        <p>Loading ...😈</p>
      )}
      {!user || user.isAdmin ? (
        <button
          type="button"
          className="mb-5 mr-5 text-white bg-black hover:bg-gray-200 hover:text-black border border-black focus:ring-4 focus:outline-none focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
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
        <p className="max-w-md mx-auto mb-5 ml-5 px-5">No reviews yet</p>
      )}
    </div>
  );
}

export default ProductDetails;
