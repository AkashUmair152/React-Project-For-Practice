import "./Footer.css";
import logo from "../../assets/logo.png";
import Linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="blur-f footer-blur-1"></div>
      <div className="blur-f footer-blur-2"></div>
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={github} alt="" />
          <img src={instagram} alt="" />
          <img src={Linkedin} alt="" />
        </div>
        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
