/* NavBar.jsx */
import TopNav from "./TopNav";
import "./navigation.css";
import DimmerLogo from "../../assets/dimmer-logo.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { navItems } from "./NavList";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [showMenu, handleShowMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const getScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getScreenWidth);
    if (screenWidth >= 800) {
      handleShowMenu(true);
    } else {
      handleShowMenu(false);
    }
    return () => {
      window.removeEventListener("resize", getScreenWidth);
    };
  }, [screenWidth]);

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
        {showMenu && (
          <ul className="nav__links">
            {navItems.map(({ id, title, path, cName }) => (
              <li key={id} className={cName}>
                <Link className="nav__link--item" to={path}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        )}
        <button className="nav__quote">Get A Quote</button>
        <div className="nav__menu" onClick={() => handleShowMenu(!showMenu)}>
          {showMenu ? (
            <IoClose className="nav__menu--button" />
          ) : (
            <GiHamburgerMenu className="nav__menu--button" />
          )}
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
