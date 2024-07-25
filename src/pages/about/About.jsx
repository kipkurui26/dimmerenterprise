import MiniBanner from "../../components/minibanner/MiniBanner";
import BannerImage from "../../assets/water.jpeg";
import "./about.css";
import { GiCheckMark } from "react-icons/gi";
import Mission from "./Mission";

const About = () => {
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
  const paragraphText = [
    {
      id: 1,
      text: "Dimmer Enterprises LTD is a leading Borehole Drilling Firm located in Nairobi, Kenya. With over 10 years of industry experience, we specialize in providing high-quality water solutions for residential, commercial, and industrial clients.",
    },
    {
      id: 2,
      text: "Our dedication to quality and sustainability has established us as a trusted name in the industry. We offer a comprehensive range of services, including borehole drilling, hydrogeological surveys, pump and solar installation, and maintenance.",
    },
    {
      id: 3,
      text: "Our team of experienced professionals is committed to delivering reliable and efficient water solutions that meet the unique needs of our clients. Reach out to us today to learn more about how we can help you with your water needs.",
    },
  ];
  return (
    <section className="about">
      <MiniBanner
        isAbout={true}
        miniBannerContent="Our commitment to quality and sustainability has earned us a reputation for excellence in the industry."
        breadcrumbTitle="About Us"
        imageAlt="About Dimmer Enterprises LTD Banner"
        imageImg={BannerImage}
      />
      <div className="about__overview">
        <h1 className="about__overview--title">
          <span className="about__overview--span">Dimmer</span> Enterprises
          Limited
        </h1>
        {paragraphText.map(({ id, text }) => (
          <p className="about__overview--text" key={id}>
            {text}
          </p>
        ))}
      </div>
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
      <Mission />
      <div className="about__gallery"></div>
    </section>
  );
};

export default About;
