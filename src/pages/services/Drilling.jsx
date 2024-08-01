import { useState } from "react";
import testVideo from "../../assets/miniVideo.mp4";
import testImage1 from "../../assets/image1.jpg";
import textImage2 from "../../assets/surveykit.jpg";

const Drilling = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setZoomedImage(imageSrc);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  return (
    <section className="drilling" id="borehole-drilling">
      <div className="drilling__content">
        <div className="drilling__container">
          <h2 className="boreholeDrillingComponent__title">
            Borehole Drilling
          </h2>
          <p className="textcomponent__text">
            Borehole drilling is a vital process for tapping into underground
            water resources. At Dimmer Enterprises LTD, we specialize in
            providing comprehensive and efficient borehole drilling services,
            tailored to meet the specific needs of our clients. Our expertise
            ensures access to clean and sustainable water, supporting both
            residential and commercial needs.
          </p>
          <p className="textcomponent__text">
            Key activities in our borehole drilling process include:
          </p>
          <ul className="textcomponent__list">
            <li className="textcomponent__list--item">
              <strong>Site Survey:</strong> Assessing geological and
              hydrological conditions to identify the optimal drilling location.
            </li>
            <li className="textcomponent__list--item">
              <strong>Drilling:</strong> Utilizing advanced drilling rigs and
              techniques to penetrate various soil and rock layers, reaching the
              desired aquifer.
            </li>
            <li className="textcomponent__list--item">
              <strong>Casing Installation:</strong> Installing durable casings
              to prevent borehole collapse and protect water from surface
              contaminants.
            </li>
            <li className="textcomponent__list--item">
              <strong>Pump Installation:</strong> Setting up efficient pumping
              systems to ensure reliable water extraction from the borehole.
            </li>
            <li className="textcomponent__list--item">
              <strong>Pump Testing:</strong> Conducting performance tests to
              verify the well's capacity and sustainability.
            </li>
            <li className="textcomponent__list--item">
              <strong>Water Quality Testing:</strong> Analyzing water samples
              for contaminants to ensure safe and potable water for all uses.
            </li>
          </ul>
          <p className="textcomponent__text">
            At Dimmer Enterprises LTD, we are committed to delivering
            high-quality borehole drilling services that are both sustainable
            and cost-effective. Whether you need a borehole for residential,
            agricultural, or industrial purposes, we provide end-to-end
            solutions, including consultation, drilling, and ongoing
            maintenance.
          </p>
        </div>
        <div className="drilling__figure">
          <div className="drilling__video">
            <video
              className="drilling__video--content"
              muted
              controls
              autoPlay
              loop
            >
              <source src={testVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="drilling__image">
            <img
              src={testImage1}
              alt="Drilling"
              className="drilling__image--content"
              onClick={() => handleImageClick(testImage1)}
            />
            <img
              src={textImage2}
              alt="Drilling"
              className="drilling__image--content"
              onClick={() => handleImageClick(textImage2)}
            />
            <img
              src={testImage1}
              alt="Drilling"
              className="drilling__image--content"
              onClick={() => handleImageClick(testImage1)}
            />
          </div>
        </div>
      </div>
      {zoomedImage && (
        <div className="zoom-overlay" onClick={closeZoom}>
          <img src={zoomedImage} alt="Zoomed" className="zoom-image" />
        </div>
      )}
      <div className="drilling__cross"></div>
    </section>
  );
};

export default Drilling;
