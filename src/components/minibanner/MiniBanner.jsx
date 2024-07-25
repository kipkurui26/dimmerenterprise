import "./minibanner.css";
import MiniBannerImg from "../../assets/water.jpeg";
import { FaHome } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MiniBanner = () => {
  return (
    <section className="minibanner">
      <figure className="minibanner__figure">
        <img
          src={MiniBannerImg}
          alt="About Dimmer Enterprises LTD Banner"
          className="minibanner__image"
        />
      </figure>
      <div className="minibanner__overlay"></div>
      <div className="minibanner__container">
        <div className="minibanner__breadcrumbs">
          <Link to="/" className="minibanner__breadcrumbs--link">
            <FaHome className="minibanner__breadcrumbs--icon" />
          </Link>
          <FaAnglesRight className="minibanner__breadcrumbs--icon" />
          <span className="minibanner__breadcrumbs--title">About Us</span>
        </div>
        <div className="minibanner__content">
          <p className="minibanner__content--text">
            Our commitment to quality and sustainability has earned us a
            reputation for excellence in the industry.
          </p>
          <span className="minibanner__content--title">
            Your One Stop Solution
          </span>
        </div>
      </div>
    </section>
  );
};

export default MiniBanner;
