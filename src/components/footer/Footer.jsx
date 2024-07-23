import "./footer.css";
import { subLinks, navItems } from "../navigation/NavList";
import { HashLink } from "react-router-hash-link";
import {
  FaChevronRight,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: FaFacebookF,
      link: "#",
      target: "_blank",
    },
    {
      id: 2,
      icon: FaWhatsapp,
      link: "#",
      target: "_blank",
    },
    {
      id: 3,
      icon: FaLinkedinIn,
      link: "#",
      target: "_blank",
    },
    { id: 4, icon: FaTiktok, link: "#", target: "_blank" },
    {
      id: 5,
      icon: MdOutlineMail,
      link: "mailto:dimmerenterprisesltd@yahoo.com",
      target: "_blank",
    },
  ];
  return (
    <section className="footer">
      <div className="footer__cols">
        <div className="footer__contanier footer__company">
          <p className="footer__company--slogan">Your One Stop Solution.</p>
          <h2 className="footer__company--title">Dimmer Enterpeises LTD</h2>
          <p className="footer__company--description">
            Dimmer Enterprises LTD is a prestigious borehole drilling company
            based in Kenya, renowned for our commitment to excellence and
            sustainability. With over 10 years of dedicated service to the
            community, we have established ourselves as a trusted provider of
            comprehensive water solutions.
          </p>
          <ul className="footer__company--icons">
            {socialLinks.map(({ id, icon: IconComponent, link, target }) => (
              <li className="footer__icons--list" key={id}>
                <Link target={target} to={link} className="footer__icons--link">
                  <IconComponent />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__contanier footer__services">
          <h2 className="footer__title">Our services</h2>
          <ul className="footer__services--list">
            {subLinks.map(({ id, title, path }) => (
              <li key={id} className="footer__services--links">
                <HashLink smooth to={path} className="footer__services--link">
                  <FaChevronRight className="footer__services--icon" />
                  {title}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__contanier footer__quicklinks">
          <h2 className="footer__title">Usefull Links</h2>
          {navItems.map(({ id, title, path }) => (
            <li key={id} className="footer__services--links">
              <HashLink smooth to={path} className="footer__services--link">
                <FaChevronRight className="footer__services--icon" />
                {title}
              </HashLink>
            </li>
          ))}
        </div>
        <div className="footer__contanier footer__contact">
          <h2 className="footer__title">Reach Us</h2>
          <div className="footer__contact--col">
            <div className="footer__contact--content">
              <span className="footer__content--title">Our Office</span>
              <span className="footer__content--text">
                Kabanas, Nairobi Kenya
              </span>
              <span className="footer__content--text">P.O. Box 3880-00506</span>
            </div>
            <div className="footer__contact--content">
              <span className="footer__content--title">Call Us</span>
              <span className="footer__content--text">0712 055 342</span>
              <span className="footer__content--text">0780 055 342</span>
            </div>
            <div className="footer__contact--content">
              <span className="footer__content--title">Email Us</span>
              <span className="footer__content--text">
                dimmerenterprisesltd@yahoo.com
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copy">
        <span className="footer__copyright">
          &copy; {new Date().getFullYear()} Dimmer Enterprises LTD | All Rights
          Reserved.
        </span>
      </div>
    </section>
  );
};

export default Footer;
