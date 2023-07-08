import { categories } from "../../backend/db/categories";
import { Header } from "../../components/Header";
import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="CategoryList-container">
      <Header />
      <h1>ABHISHOP</h1>
      <div>
        <h2>SHOP BY CATEGORY</h2>
      </div>
      <ul>
        {categories.map(({ categoryName, description, _id }) => (
          <li key={_id}>
            <h3>{categoryName}</h3>
            <p>{description}</p>
            <button>
              <Link to={`/product/${categoryName}`}>Shop Now</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
