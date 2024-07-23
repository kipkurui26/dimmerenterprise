import { FaShieldAlt, FaUserFriends, FaClock } from "react-icons/fa";
import "./features.css";

const Features = () => {
  return (
    <section className="features">
      <div className="features__feature">
        <div className="features__icon">
          <FaShieldAlt className="features__ico"/>
        </div>
        <div className="features__content">
          <h3 className="features__title">Integrity</h3>
          <p className="features__text">
            We adhere to the highest standards of integrity in all our actions,
            ensuring trust and transparency with our clients.
          </p>
        </div>
      </div>
      <div className="features__feature">
        <div className="features__icon">
          <FaUserFriends className="features__ico"/>
        </div>
        <div className="features__content">
          <h3 className="features__title">Customer Excellence</h3>
          <p className="features__text">
            Our priority is to exceed customer expectations by delivering
            exceptional service and solutions.
          </p>
        </div>
      </div>
      <div className="features__feature">
        <div className="features__icon">
          <FaClock className="features__ico"/>
        </div>
        <div className="features__content">
          <h3 className="features__title">Reliability</h3>
          <p className="features__text">
            We are committed to reliability and punctuality, ensuring that we
            deliver on our promises.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
