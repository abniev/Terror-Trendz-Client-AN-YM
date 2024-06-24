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
    <div className="flex-wrap justify-content">
      <h1>Product Details</h1>
      {product ? (
        <ProductDetailsCard product={product} />
      ) : (
        <p>Loading ...😈</p>
      )}
      {!user || user.isAdmin ? (
        <p>
          <Link to="/login">Login</Link>
          {""} to Review
        </p>
      ) : (
        <ReviewForm />
      )}

      {product && product.reviews.length ? (
        product.reviews.map((review) => (
          <ReviewCard review={review} user={user} />
        ))
      ) : (
        <p>No reviews yet</p>
      )}
    </div>
  );
}

export default ProductDetails;
