/* NavBar.jsx */
import TopNav from "./TopNav";
import "./navigation.css";
import DimmerLogo from "../../assets/dimmer-logo.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { navItems } from "./NavList";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const location = useLocation(); // Get the current location

  const getScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getScreenWidth);
    if (screenWidth >= 800) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
    return () => {
      window.removeEventListener("resize", getScreenWidth);
    };
  }, [screenWidth]);

  useEffect(() => {
    // Close the menu when the location changes on small screens
    if (screenWidth < 800) {
      setShowMenu(false);
    }
    window.scrollTo(0, 0);
  }, [location, screenWidth]); // Dependency on location and screenWidth

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
        <Link className="nav__quote" to={"https://wa.me/254712055342"}>Let`s Chat</Link>
        <div className="nav__menu" onClick={() => setShowMenu(!showMenu)}>
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
