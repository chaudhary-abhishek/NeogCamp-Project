import { useParams, Link } from "react-router-dom";

import { products } from "../../backend/db/products";
import { ProductCard } from "../../components/ProductCard";

export const ProductDetail = ()=>{
    const {productId} = useParams();
    const findProductById = products.find(({_id})=>_id===productId)
    return <ProductCard {...findProductById}/>
}