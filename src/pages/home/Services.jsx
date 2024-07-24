import TestImage from "../../assets/bannerImage.jpeg";
import { HashLink } from "react-router-hash-link";
import { FaArrowRight } from "react-icons/fa6";

const Services = () => {
  const serviceList = [
    {
      id: 1,
      title: "Hydrogeological Survey",
      content:
        "We conduct detailed hydrogeological surveys to identify groundwater resources and ensure optimal borehole placement.",
      preview: TestImage,
      path: "/services#hydrogeological-survey",
    },
    {
      id: 2,
      title: "Borehole Drilling",
      content:
        "Expert borehole drilling services tailored for both residential and commercial needs.",
      preview: TestImage,
      path: "/services#borehole-drilling",
    },
    {
      id: 3,
      title: "Camera Inspection",
      content:
        "Our camera inspection services provide a clear view of your borehole’s condition, ensuring efficient maintenance.",
      preview: TestImage,
      path: "/services#camera-inspection",
    },
    {
      id: 4,
      title: "Test Pumping",
      content:
        "We offer professional test pumping to assess groundwater yield and quality, critical for sustainable water management.",
      preview: TestImage,
      path: "/services#test-pumping",
    },
    {
      id: 5,
      title: "Pump & Solar Installation",
      content:
        "Specializing in the installation of pumps and solar systems, we provide energy-efficient solutions for your water needs.",
      preview: TestImage,
      path: "/services#pump-and-solar-installation",
    },
    {
      id: 6,
      title: "Tank & Tower Construction",
      content:
        "Our tank and tower construction services ensure robust and reliable water storage solutions.",
      preview: TestImage,
      path: "/services#tank-and-tower-construction",
    },
  ];

  return (
    <section className="homeservices">
      <div className="homeservices__header">
        <h2 className="homeservices__title">Serving the Community</h2>
        <p className="homeservices__description">
          Explore the comprehensive range of water solutions provided by Dimmer
          Enterprises LTD, including hydrogeological surveys, borehole drilling,
          and more.
        </p>
      </div>
      <div className="homeservices__container">
        {serviceList.map(({ id, title, content, preview, path }) => (
          <div className="homeservices__service" key={id}>
            <figure className="homeservices__figure">
              <img
                src={preview}
                alt={title}
                className="homeservices__figure--image"
              />
            </figure>
            <h3 className="homeservices__service--title">{title}</h3>
            <p className="homeservices__service--content">{content}</p>
            <HashLink to={path} smooth className="homeservices__service--link">
              Learn More{" "}
              <FaArrowRight className="homeservices__service--icon" />
            </HashLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
