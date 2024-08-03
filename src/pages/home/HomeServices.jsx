import TestImage from "../../assets/bannerImage.jpeg";
import drillingImage from '../../assets/drillingImage.png'
import SurveyImage from '../../assets/surveykit.jpg'
import testPumping from '../../assets/image1.jpg'
import solarImage from '../../assets/solar-image2.webp'
import towerContruction from '../../assets/tank-tower1+(Copy).webp'
import { HashLink } from "react-router-hash-link";
import { FaArrowRight } from "react-icons/fa6";

const HomeServices = () => {
  const serviceList = [
    {
      id: 1,
      title: "Hydrogeological Survey",
      content:
        "Conduct comprehensive hydrogeological surveys to identify groundwater resources, ensuring optimal placement for your boreholes and maximizing water extraction efficiency.",
      preview: SurveyImage,
      path: "/services#hydrogeological-survey",
    },
    {
      id: 2,
      title: "Borehole Drilling",
      content:
        "Offering expert borehole drilling services, customized for both residential and commercial applications. Our precision drilling ensures a reliable water supply tailored to your specific needs.",
      preview: drillingImage,
      path: "/services#borehole-drilling",
    },
    {
      id: 3,
      title: "Camera Inspection",
      content:
        "Utilize advanced camera inspection technology to assess the condition of your boreholes. Our detailed inspections help maintain optimal performance and identify any issues early.",
      preview: TestImage,
      path: "/services#camera-inspection",
    },
    {
      id: 4,
      title: "Test Pumping",
      content:
        "Providing professional test pumping services to evaluate groundwater yield and quality. This critical step ensures sustainable water management and accurate system sizing.",
      preview: testPumping,
      path: "/services#test-pumping",
    },
    {
      id: 5,
      title: "Pump & Solar Installation",
      content:
        "Specialists in installing efficient pumps and solar power systems, we offer sustainable and cost-effective solutions for your water supply needs, reducing long-term energy costs.",
      preview: solarImage,
      path: "/services#pump-and-solar-installation",
    },
    {
      id: 6,
      title: "Tank & Tower Construction",
      content:
        "Our robust tank and tower construction services provide secure and reliable water storage solutions, designed to meet the highest standards of durability and functionality.",
      preview: towerContruction,
      path: "/services#tank-and-tower-construction",
    },
  ];

  return (
    <section className="homeservices">
      <div className="homeservices__header">
        <h2 className="homeservices__title">Comprehensive Water Solutions</h2>
        <p className="homeservices__description">
          Discover the extensive range of services offered by Dimmer Enterprises LTD, from detailed hydrogeological surveys to advanced borehole drilling and sustainable pump installations.
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
              Learn More <FaArrowRight className="homeservices__service--icon" />
            </HashLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
