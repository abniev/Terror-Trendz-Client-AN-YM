import { useContext } from "react";
import { ProductContext } from "../context/product.context";
import ProductCard from "../components/ProductCard";

function ProductList() {
  const { products } = useContext(ProductContext);

  return (
    <div className="flex flex-wrap p-5 m-5 gap-10 justify-around">
      {products ? (
        products.map((product) => <ProductCard {...product} />)
      ) : (
        <p>Loading...😈</p>
      )}
    </div>
  );
}

export default ProductList;
