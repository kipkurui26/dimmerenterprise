import ButtonInput from "../../components/form/ButtonInput";
import TextArea from "../../components/form/TextArea";
import TextInput from "../../components/form/TextInput";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__container">
        <div className="contact__map">
          <div className="contact__map--info">
            <div className="contact__map--col">
              <span className="contact__col--title">
                <strong>Address</strong>
              </span>
              <p className="contact__col--content">Malaa Center, Thika Road</p>
            </div>
            <div className="contact__map--col">
              <span className="contact__col--title">
                <strong>Email</strong>
              </span>
              <p className="contact__col--content">
                dimmerenterprisesltd@yahoo.com
              </p>
            </div>
            <div className="contact__map--col">
              <span className="contact__col--title">
                <strong>Phone</strong>
              </span>
              <p className="contact__col--content">0712 055 342</p>
              <p className="contact__col--content">0780 055 342</p>
            </div>
          </div>
          <div className="contact__map--geo">
            <iframe
              className="contact__map--iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8274317418304!2d37.135236473881854!3d-1.276975235613744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f6588a29dfb89%3A0x5a5a73ebd74a3dcc!2sMalaa%20Center!5e0!3m2!1sen!2ske!4v1721833572946!5m2!1sen!2ske"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <form className="contact__form">
          <h3 className="contact__form--title">
            Feel free to drop us a message
          </h3>
          <TextInput
            formLabel={"Full Name"}
            type={"text"}
            formName={"fullname"}
            placeholder={"Enter your full names"}
          />
          <TextInput
            formLabel={"Email Address"}
            type={"email"}
            formName={"email"}
            placeholder={"Enter your email address"}
          />
          <TextInput
            formLabel={"Phone Number"}
            type={"tel"}
            formName={"phone"}
            placeholder={"Enter your phone number"}
          />
          <TextArea 
            formLabel={"Message"}
            formName={"message"}
            placeholder={"Enter your message"}
          />
          <ButtonInput buttonName={"Send Message"} />
        </form>
      </div>
    </section>
  );
};

export default Contact;
