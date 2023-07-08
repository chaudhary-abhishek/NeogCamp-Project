import { useParams } from "react-router-dom";
import { products } from "../../backend/db/products";

import "./Product.css";
import { ProductCard } from "../../components/ProductCard";
import { Header } from "../../components/Header";
export const Product = () => {
  const { productCategory } = useParams();
  const productFilteredByCategory = products.filter(
    ({ categoryName }) => categoryName === productCategory
  );
  return (
    <div className="Products-Under-Category">
      <Header />
      <ul>
        {productFilteredByCategory.map((product) => {
          return <ProductCard {...product} noDetail />;
        })}
      </ul>
    </div>
  );
};
