import logo from "../../assets/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt="logo" srcset="" />
      <nav>
        <ul className="nav-links">
          <li>
            <a to="/">Home</a>
          </li>
          <li>
            <a to="/progress">Progress</a>
          </li>
          <li>
            <a to="/plans">Plans</a>
          </li>
          <li>
            <a to="/whyus">Why Us</a>
          </li>
          <li>
            <a to="/testimonials">Testimonials</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
