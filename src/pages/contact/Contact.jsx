import ContactForm from "../../components/contact_form/ContactForm";
import MiniBanner from "../../components/minibanner/MiniBanner";
import BannerImage from "../../assets/water-is-life.webp";
import "./contact.css";
import MetaTags from "../../components/metas/MetaTags";

const Contact = () => {
  const canonicalUrl = "https://dimmerenterprises.co.ke/contact-us";
  const metaTags = [
    {
      metaName: "description",
      metaContent:
        "Get in touch with Dimmer Enterprises Ltd. Call/WhatsApp: 0712 055 342 / 0780 055 342 | Email: dimmerenterprisesltd@yahoo.com",
    },
  ];
  return (
    <section className="contact">
      {/* Meta Tags */}
      <MetaTags
        title={"Contact Us - Dimmer Eneterprises Limited"}
        metaTags={metaTags}
        canonicalUrl={canonicalUrl}
      />
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
