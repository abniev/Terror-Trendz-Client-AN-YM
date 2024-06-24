import { useContext } from "react";
import { ProductContext } from "../context/product.context";
import ProductCard from "../components/ProductCard";

function ProductList() {
  const { products } = useContext(ProductContext);

  return (
    <div className="flex-wrap justify-content">
      {products ? (
        products.map((product) => <ProductCard {...product} />)
      ) : (
        <p>Loading...😈</p>
      )}
    </div>
  );
}

export default ProductList;
