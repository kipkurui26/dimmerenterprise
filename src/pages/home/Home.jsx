import Banner from "../../components/banner/Banner";
import ContactForm from "../../components/contact_form/ContactForm";
import Faqs from "../../components/faqs/Faqs";
import Features from "../../components/features/Features";
import MiniAssure from "../../components/miniassure/MiniAssure";
import "./home.css";
import HomeAbout from "./HomeAbout";
import HomeServices from "./HomeServices";
import MetaTags from '../../components/metas/MetaTags'

const Home = () => {  
  const canonicalUrl = "https://dimmerenterprises.co.ke"
  const metaTags = [
    {
      metaName: "description",
      metaContent: "Dimmer Enterprises Ltd: Leading drilling experts in Kenya. Hydrogeological surveys, borehole drilling, solar installations & more. Contact us today!",
    }
  ]

  return (
    <section className="home">
      {/* Meta Tags */}
      <MetaTags
        title={"Dimmer Enterprises Limited | Borehole Drilling Company in Kenya"}
        metaTags={metaTags}
        canonicalUrl={canonicalUrl}
      />

      <Banner
        isSpan={true}
        bannerSpan={"Your One Stop Solution"}
        bannerTitle={"Dimmer Enterprises Limited."}
        bannerDescription={
          "We don’t just drill boreholes; we build lifelines for communities. Our mission is to provide innovative, sustainable water solutions that enhance quality of life and support regional growth. Join us in our journey toward a sustainable future—each drop of water contributing to health, prosperity, and empowerment. Dimmer Enterprises LTD—drilling for a better tomorrow."
        }
        bannerButton={"Request a Quote"}
      />
      <HomeAbout />
      <Features />
      <HomeServices />
      <MiniAssure />
      <ContactForm />
      <Faqs />
    </section>
  );
};

export default Home;
