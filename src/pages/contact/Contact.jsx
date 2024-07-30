import ContactForm from "../../components/contact_form/ContactForm";
import MiniBanner from "../../components/minibanner/MiniBanner";
import BannerImage from "../../assets/water-is-life.jpg";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact">
        <MiniBanner
        isAbout={true}
        miniBannerContent="We'd love to hear from you! Reach out to us using the form below or via the contact details provided."
        breadcrumbTitle="Contact Us"
        imageAlt="Contact Dimmer Enterprises LTD Banner"
        imageImg={BannerImage}
      />
      <ContactForm />
    </section>
  );
};

export default Contact;
