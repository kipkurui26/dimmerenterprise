import MiniBanner from "../../components/minibanner/MiniBanner";
import BannerImage from "../../assets/water-is-life.webp";
import "./about.css";
import Mission from "./Mission";
import Appointment from "../../components/appointment/Appointment";
import Faqs from "../../components/faqs/Faqs";
import Overview from "./Overview";
import WhyUs from "./WhyUs";
import Equipments from "./Equipments";
import MetaTags from "../../components/metas/MetaTags";

const About = () => {
  const canonicalUrl = "https://dimmerenterprises.co.ke/about-us";
  const metaTags = [
    {
      metaName: "description",
      metaContent:
        "Learn about Dimmer Enterprises Ltd, Kenya's trusted drilling company. Expert in hydrogeological surveys, borehole drilling, and more.",
    },
  ];
  return (
    <section className="about">
      {/* Meta Tags */}
      <MetaTags
        title={
          "About Us - Dimmer Eneterprises Limited"
        }
        metaTags={metaTags}
        canonicalUrl={canonicalUrl}
      />
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
