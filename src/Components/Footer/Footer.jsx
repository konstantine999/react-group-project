import "./footer.css";
import FirmLogo from "../../Images/FirmLogo.png";
import SocialMedia from "./SocialMedia";
import { sociaslArray } from "./SocialsArray";

function Footer() {
  return (
    <footer>
      <div>
        <img src={FirmLogo} />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Solutions</li>
          <li>Cases</li>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <div className="flex social-wrapper">
        {sociaslArray.map((social) => {
          return <SocialMedia src={social.img} />;
        })}
      </div>
      <p className="nunito">Copyrights ©2020 Thefirm. All Right Reserved</p>
    </footer>
  );
}

export default Footer;
