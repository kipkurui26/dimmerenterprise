import TestImage from "../../assets/bannerImage.jpeg";
import { HashLink } from "react-router-hash-link";
import { FaArrowRight } from "react-icons/fa";

const HomeAbout = () => {
  return (
    <section className="homeabout">
      <p className="homeabout__intro">We Are Dimmer Enterprises LTD.</p>
      <h2 className="homeabout__title">Discover Who We Are</h2>
      <div className="homeabout__content">
        <div className="homeabout__container">
          <p className="homeabout__description first--para">
            Dimmer Enterprises Limited is a leading provider of comprehensive
            borehole water solutions in Kenya.
          </p>
          <p className="homeabout__description">
            With over a decade of experience, we specialize in delivering
            high-quality services, including hydrogeological surveys, borehole
            drilling, pump installations, and sustainable water management
            systems.
          </p>
          <p className="homeabout__description">
            Our commitment to innovation, sustainability, and community
            development has made us a trusted partner for both residential and
            commercial projects across the region.
          </p>
          <HashLink to="/about-us" smooth className="homeabout__link">
            More About Us <FaArrowRight className="homeabout__link--icon" />
          </HashLink>
        </div>
        <figure className="homeabout__figure">
          <img
            className="homeabout__figure--image"
            src={TestImage}
            alt="About image Dimmer Enterpeises LTD"
          />
        </figure>
      </div>
    </section>
  );
};

export default HomeAbout;
