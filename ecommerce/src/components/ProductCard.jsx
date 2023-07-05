import { Link } from "react-router-dom";
import "../pages/Product/Product.css";
export const ProductCard = (product) => {
  const { imageLink, title, price, categoryName, _id, noDetail, highlights } =
    product;
  //   const {productId, productCategory} = useParams();
  return (
    <div className="Products-Under-Category">
      <ul>
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
          <button>Add to Cart</button>
        </div>
      )}
    </div>
  );
};
