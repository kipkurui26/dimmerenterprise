import { useState, useEffect } from "react";
import { GiCheckMark } from "react-icons/gi";
import {
  FaBullseye,
  FaEye,
  FaHandsHelping,
  FaQuoteRight,
} from "react-icons/fa";

const Mission = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const missionList = [
    {
      id: 1,
      title: "Mission",
      icon: FaBullseye,
      text: "To provide reliable and efficient water solutions that meet the diverse needs of our clients, ensuring access to clean water for all.",
    },
    {
      id: 2,
      title: "Vision",
      icon: FaEye,
      text: "To be the leading provider of sustainable water solutions in Africa, recognized for our commitment to innovation, quality, and community support.",
    },
    {
      id: 3,
      title: "Values",
      icon: FaHandsHelping,
      text: [
        {
          id: 1,
          header: "Integrity",
          content:
            "We operate with honesty and transparency in all our dealings.",
        },
        {
          id: 2,
          header: "Excellence",
          content:
            "We strive for the highest standards in quality and service.",
        },
        {
          id: 3,
          header: "Sustainability",
          content:
            "We prioritize eco-friendly practices and long-term solutions.",
        },
        {
          id: 4,
          header: "Community",
          content:
            "We are committed to supporting and uplifting the communities we serve.",
        },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % missionList.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [missionList.length]);

  const { title, icon: Icon, text } = missionList[currentIndex];

  return (
    <section className="mission">
      <div className="mission__header">
        {missionList.map((item, index) => (
          <div
            key={item.id}
            className={`mission__header--col ${
              index === currentIndex ? "current__index" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <item.icon className="mission__header--icon" />
            <h3
              className={`mission__header--title ${
                index === currentIndex ? "current__index" : ""
              }`}
            >
              {item.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="mission__container">
        <div className="mission__container--content">
          <FaQuoteRight className="mission__container--quote" />
          <p className="mission__container--text">
            {Array.isArray(text) ? (
              <ul className="mission__container--list">
                {text.map(({ id, header, content }) => (
                  <li key={id} className="mission__container--items">
                    <strong>
                      <GiCheckMark className="mission__container--svg" />{" "}
                      {header}:{" "}
                    </strong>
                    {content}
                  </li>
                ))}
              </ul>
            ) : (
              text
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
