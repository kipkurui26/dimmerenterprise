import "./miniassure.css";
import miniVideo from "../../assets/miniVideo.mp4";
import miniVideoPoster from "../../assets/miniVideoPoster.png";

const MiniAssure = () => {
  return (
    <section className="miniassure">
      <div className="miniassure__container">
        <h2 className="miniassure__title">
          <span className="miniassure__title--block"></span>Serving The
          Community
        </h2>
        <p className="miniassure__text">
          At Dimmer Enterprises LTD, we are dedicated to providing clean,
          reliable water and uplifting our communities. Our high-quality
          borehole drilling and water management solutions transform lives,
          fostering better health and enhanced livelihoods.
        </p>
        <p className="miniassure__text">
          We prioritize sustainable practices and eco-friendly technologies,
          ensuring long-term water solutions that benefit both people and the
          environment. By offering training and employment opportunities, we
          empower local communities to maintain and manage their water
          resources.
        </p>
        <p className="miniassure__text">
          Through partnerships and philanthropic activities, we support projects
          that improve access to water and contribute to community development.
          Dimmer Enterprises LTD is committed to making a lasting, positive
          impact by providing essential water solutions and serving the
          community.
        </p>
        <div className="miniassure__cta">
          Let us collaborate together to build a better community for future
          generations.
        </div>
      </div>
      <figure className="miniassure__figure">
        <video
          className="miniassure__video"
          controls
          preload="metadata"
          poster={miniVideoPoster}
          muted
        >
          <source src={miniVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </figure>
    </section>
  );
};

export default MiniAssure;
