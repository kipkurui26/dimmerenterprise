import MiniBanner from "../../components/minibanner/MiniBanner";
import BannerImage from "../../assets/water-is-life.jpg";
import "./about.css";
import Mission from "./Mission";
import Appointment from "../../components/appointment/Appointment";
import Faqs from "../../components/faqs/Faqs";
import Overview from "./Overview";
import WhyUs from "./WhyUs";
import Equipments from "./Equipments";

const About = () => {
  return (
    <section className="about">
      <MiniBanner
        isAbout={true}
        miniBannerContent="Our commitment to quality and sustainability has earned us a reputation for excellence in the industry."
        breadcrumbTitle="About Us"
        imageAlt="About Dimmer Enterprises LTD Banner"
        imageImg={BannerImage}
      />
      <Overview />
      <Mission />
      <WhyUs />
      <Equipments />
      <Appointment />
      
      <Faqs />
    </section>
  );
};

export default About;
