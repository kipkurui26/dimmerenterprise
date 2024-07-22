/* NavBar.jsx */
import TopNav from "./TopNav";
import "./navigation.css";
import DimmerLogo from "../../assets/dimmer-logo.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <section className="navigation">
      <TopNav />
      <nav className="nav">
        <figure className="nav__logo">
          <Link to="/">
            <img
              className="nav__logo--image"
              src={DimmerLogo}
              alt="Dimmer Enterprise LTS Logo"
            />
          </Link>
        </figure>
        <ul className="nav__links">
            
        </ul>
        <div className="nav__menu">
          <GiHamburgerMenu className="nav__menu--button" />
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
