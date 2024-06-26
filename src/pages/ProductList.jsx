import { useContext } from "react";
import { ProductContext } from "../context/product.context";
import ProductCard from "../components/ProductCard";

function ProductList() {
  const { products } = useContext(ProductContext);

  return (
    <div className="flex flex-wrap justify-center p-5 m-5 gap-10">
      {products ? (
        products.map((product) => <ProductCard {...product} />)
      ) : (
        <p>Loading...😈</p>
      )}
    </div>
  );
}

export default ProductList;
