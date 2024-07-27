import "./appointment.css";
import WaterImage from '../../assets/water-is-life.jpg'
import { Link } from "react-router-dom";
import { FaRegHandPointRight } from "react-icons/fa6";

const Appointment = () => {
  return (
    <section className="appointment">
      <figure className="appointment__figure">
        <img className="appointment__figure--image" src={WaterImage} alt="Background water" />
      </figure>
      <div className="appointment__content">
        <h2 className="appointment__content--title">
          Chat With a Geologist on WhatsApp
        </h2>
        <p className="appointment__content--text">
          <strong>Click Here <FaRegHandPointRight/></strong>{" "}
          <Link className="appointment__content--link" to={"https://wa.me/254727637947"}>+254727637947</Link>
        </p>
        <div className="appointment__content--sub">
          <span className="appointment__content--text">
            <strong>Email: </strong>{" "}
            <Link className="appointment__content--link" to={"mailto:dimmerenterprisesltd@yahoo.com"}>
              dimmerenterprisesltd@yahoo.com
            </Link>
          </span>
          <span className="appointment__content--text">Mon - Sat: 8:00 AM - 5:00 PM</span>
        </div>
        <div className="appointment__content--buttons">
          <Link to={"https://wa.me/254727637947"} className="appointment__button">
            Chat Now
          </Link>
          <Link to={"#"} className="appointment__button">
            Book an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
