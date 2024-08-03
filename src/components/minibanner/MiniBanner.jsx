import "./minibanner.css";
import { FaHome, FaArrowRight } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const MiniBanner = ({ isAbout, hashLink, imageImg, imageAlt, breadcrumbTitle, miniBannerContent }) => {
  return (
    <section className="minibanner">
      <figure className="minibanner__figure">
        <img
          src={imageImg}
          alt={imageAlt}
          className="minibanner__image"
          loading="eager"
        />
      </figure>
      <div className="minibanner__overlay"></div>
      <div className="minibanner__container">
        <div className="minibanner__breadcrumbs">
          <Link to="/" className="minibanner__breadcrumbs--link">
            <FaHome className="minibanner__breadcrumbs--icon" />
          </Link>
          <FaAnglesRight className="minibanner__breadcrumbs--icon" />
          <span className="minibanner__breadcrumbs--title">{breadcrumbTitle}</span>
        </div>
        <div className="minibanner__content">
          <p className="minibanner__content--text">
            {miniBannerContent}
          </p>
          {isAbout ? (
            <span className="minibanner__content--title">
              Your One Stop Solution
            </span>
          ) : (
            <div className="minibar__content--learn">
              <HashLink to={hashLink} className="minibanner__content--link">
                Learn More <FaArrowRight className="minibanner__content--icon"/>
              </HashLink>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MiniBanner;
