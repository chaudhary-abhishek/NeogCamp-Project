import { useParams } from "react-router-dom";
import { products } from "../../backend/db/products"


import "./Product.css";
import { ProductCard } from "../../components/ProductCard";
export const Product = ()=>{
  const { productCategory } = useParams();
  const productFilteredByCategory = products.filter(({categoryName})=>categoryName===productCategory);
    return(
        <div className="Products-Under-Category">
            <ul>
           {
            productFilteredByCategory.map((product)=>{
             return <ProductCard {...product} noDetail/>
            })
           }
           </ul>
        </div>
    )
}