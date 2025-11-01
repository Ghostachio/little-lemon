import { Link } from "react-router-dom";
import BannerImage from "../assets/images/BannerImage.jpg";

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediteranian Restaurant, focused on traditional recipes
            setved with modern twist
          </p>
          <Link to="/booking">
            <button aria-label="On Click">Reserve a Table</button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={BannerImage} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;
