import MiniBanner from "../../components/minibanner/MiniBanner";
import BannerImage from '../../assets/water.jpeg';

const About = () => {
  return (
    <section className="about">
      <MiniBanner  isAbout={true}
      miniBannerContent={"Our commitment to quality and sustainability has earned us a reputation for excellence in the industry."}
      breadcrumbTitle={"About Us"}
      imageAlt={"About Dimmer Enterprises LTD Banner"}
      imageImg={BannerImage}
      
      />

      {/* <ul className="homeabout__list">
        <li className="homeabout__list-item">
          <strong>Extensive Expertise:</strong> Over 10 years of industry
          experience in delivering reliable and efficient water solutions.
        </li>
        <li className="homeabout__list-item">
          <strong>Comprehensive Services:</strong> From initial surveys to final
          installations, we offer end-to-end solutions for all water needs.
        </li>
        <li className="homeabout__list-item">
          <strong>Sustainability Focused:</strong> We prioritize sustainable
          practices and technologies to ensure environmentally friendly water
          management.
        </li>
        <li className="homeabout__list-item">
          <strong>Community Commitment:</strong> Dedicated to improving access
          to clean water and supporting local communities.
        </li>
      </ul> */}
    </section>
  );
};

export default About;
