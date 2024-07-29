import { GiCheckMark } from "react-icons/gi";

const WhyUs = () => {
  const featuresList = [
    {
      id: 1,
      title: "Extensive Expertise",
      text: "Over 10 years of industry experience in delivering reliable and efficient water solutions.",
    },
    {
      id: 2,
      title: "Comprehensive Services",
      text: "From initial surveys to final installations, we offer end-to-end solutions for all water needs.",
    },
    {
      id: 3,
      title: "Sustainability Focused",
      text: "We prioritize sustainable practices and technologies to ensure environmentally friendly water management.",
    },
    {
      id: 4,
      title: "Community Commitment",
      text: "Dedicated to improving access to clean water and supporting local communities.",
    },
  ];
  return (
    <div className="about__content">
      <span className="minibanner__content--title about__content--title">
        Why should you choose us?
      </span>
      <ul className="homeabout__list">
        {featuresList.map(({ id, text, title }) => (
          <li className="homeabout__list-item" key={id}>
            <strong>
              <GiCheckMark className="homeabout__list--icon" /> {title}
            </strong>{" "}
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyUs;
