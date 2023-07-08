import { Link } from "react-router-dom";
import "../pages/Product/Product.css";
import { useContext } from "react";
import { CartContext } from "..";
export const ProductCard = (product) => {
  const { imageLink, title, price, categoryName, _id, noDetail, highlights } =
    product;
  const { addToCart } = useContext(CartContext);
  return (
    <div  className="Products-Under-Category">
      <ul key={_id}>
        <img src={imageLink} alt="no image found" />
        <h3>{title}</h3>
        <p>
          <b>{price}</b>
        </p>
      </ul>

      {noDetail && (
        <Link to={`/product/${categoryName}/${_id}`}>Show Details</Link>
      )}
      {!noDetail && (
        <div>
          <ul>
            {highlights.map((highlight) => (
              <p>{highlight}</p>
            ))}
          </ul>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      )}
    </div>
  );
};
