/* NavBar.jsx */
import TopNav from "./TopNav";
import "./navigation.css";
import DimmerLogo from "../../assets/dimmer-logo.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { navItems, subLinks } from "./NavList";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
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
          {navItems.map(({ id, title, path, cName }) => (
            <li key={id} className={cName}>
              {title === "Services" ? (
                <>
                  <span
                    className="nav__link--item"
                    onClick={() => setShowLinks(!showLinks)}
                  >
                    {title} {showLinks ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                  {showLinks && (
                    <ul className="nav__sub--links">
                      {subLinks.map(({ id, title, path, cName }) => (
                        <li key={id} className={cName}>
                          <Link className="nav__link--item" to={path}>
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link className="nav__link--item" to={path}>
                  {title}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <button className="nav__quote">Get A Quote</button>
        <div className="nav__menu">
          <GiHamburgerMenu className="nav__menu--button" />
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
