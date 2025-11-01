import Logo from "../assets/images/Logo.jpg";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="company-info">
          <img src={Logo} alt="Little Lemon" />
          <p>
            We are a family owned Mediteranian Restaurant, focused on traditional recipes
            setved with modern twist
          </p>
        </div>
        <div>
          <h3>Important Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/booking">Reservations</a>
            </li>
            <li>
              <a href="/">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact US</h3>
          <ul>
            <li>Adresse: 123 TwonCity, USA</li>
            <li>Phone: +1 (123) 456 789</li>
            <li>Email: Little@lemon.com</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
