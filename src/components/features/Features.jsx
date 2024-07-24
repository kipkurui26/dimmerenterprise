import { FaShieldAlt, FaUserFriends, FaClock } from "react-icons/fa";
import "./features.css";

const Features = () => {
  const featuresList = [
    {
      id: 1,
      title: "Integrity",
      icon: FaShieldAlt,
      content:
        "We adhere to the highest standards of integrity in all our actions, ensuring trust and transparency with our clients.",
    },
    {
      id: 2,
      title: "Customer Excellence",
      icon: FaUserFriends,
      content:
        "Our priority is to exceed customer expectations by delivering exceptional service and solutions.",
    },
    {
      id: 3,
      title: "Reliability",
      icon: FaClock,
      content:
        "We are committed to reliability and punctuality, ensuring that we deliver on our promises.",
    },
  ];
  return (
    <section className="features">
      {featuresList.map(({ id, title, icon: IconComponent, content }) => (
        <div className="features__feature" key={id}>
          <div className="features__icon">
            <IconComponent className="features__ico" />
          </div>
          <div className="features__content">
            <h3 className="features__title">{title}</h3>
            <p className="features__text">{content}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;
