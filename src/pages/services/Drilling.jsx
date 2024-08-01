import { useState } from 'react';
import testVideo from '../../assets/miniVideo.mp4';
import testImage1 from '../../assets/image1.jpg';
import textImage2 from '../../assets/surveykit.jpg';

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
          <h2 className="boreholeDrillingComponent__title">Borehole Drilling</h2>
          <p className="textcomponent__text">
            Borehole drilling is essential for accessing underground water. At
            Dimmer Enterprises LTD, we offer reliable and efficient drilling
            services, ensuring a sustainable water supply.
          </p>
          <p className="textcomponent__text">
            Key activities in our borehole drilling process include:
          </p>
          <ul className="textcomponent__list">
            <li className="textcomponent__list--item">
              <strong>Site Survey:</strong> Assessing geological and hydrological
              conditions.
            </li>
            <li className="textcomponent__list--item">
              <strong>Drilling:</strong> Using advanced rigs to reach the desired
              depth.
            </li>
            <li className="textcomponent__list--item">
              <strong>Casing Installation:</strong> Protecting the borehole and
              preventing contamination.
            </li>
            <li className="textcomponent__list--item">
              <strong>Pump Installation:</strong> Installing pumps for efficient
              water extraction.
            </li>
            <li className="textcomponent__list--item">
              <strong>Pump Testing:</strong> Ensuring optimal performance and yield.
            </li>
            <li className="textcomponent__list--item">
              <strong>Water Quality Testing:</strong> Checking for contaminants to
              ensure safe water use.
            </li>
          </ul>
          <p className="textcomponent__text">
            Dimmer Enterprises LTD is dedicated to delivering high-quality and
            sustainable borehole drilling services. Contact us for more information.
          </p>
        </div>
        <div className="drilling__figure">
          <div className="drilling__video">
            <video className="drilling__video--content" muted controls autoPlay loop>
              <source src={testVideo} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="drilling__image">
            <img src={testImage1} alt="Drilling" className="drilling__image--content" onClick={() => handleImageClick(testImage1)} />
            <img src={textImage2} alt="Drilling" className="drilling__image--content" onClick={() => handleImageClick(textImage2)} />
            <img src={testImage1} alt="Drilling" className="drilling__image--content" onClick={() => handleImageClick(testImage1)} />
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
