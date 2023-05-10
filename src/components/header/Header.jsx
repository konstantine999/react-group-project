import "./header.css";
import imageOne from "../../Images/logo.png";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <img src={imageOne} alt="logo" className="logo" />
          <ul>
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>Solutions</li>
            </a>
            <a href="#">
              <li>Cases</li>
            </a>
            <a href="#">
              <li>About Us</li>
            </a>
            <a href="#">
              <li>Blog</li>
            </a>
            <a href="#">
              <li>Contact Us</li>
            </a>
          </ul>
          <button className="yellowButton">Get in Touch</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
