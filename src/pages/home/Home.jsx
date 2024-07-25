import Banner from "../../components/banner/Banner";
import ContactForm from "../../components/contact_form/ContactForm";
import Features from "../../components/features/Features";
import "./home.css";
import HomeAbout from "./HomeAbout";
import HomeServices from "./HomeServices";

const Home = () => {
  return (
    <section className="home">
      <Banner
        isSpan={true}
        bannerSpan={"Your One Stop Solution"}
        bannerTitle={"Dimmer Enterprises Limited."}
        bannerDescription={
          "We don’t just drill boreholes; we build lifelines for communities. Our mission is to provide innovative, sustainable water solutions that enhance quality of life and support regional growth. Join us in our journey toward a sustainable future—each drop of water contributing to health, prosperity, and empowerment. Dimmer Enterprises LTD—drilling for a better tomorrow."
        }
        bannerButton={"Request a Quore"}
      />
      <HomeAbout />
      <Features />
      <HomeServices />
      <ContactForm />
    </section>
  );
};

export default Home;
