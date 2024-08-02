import { useState } from "react";
import testPump1 from "../../assets/drilling-video1.mp4";
import testImage1 from "../../assets/water-is-life.jpg";
import testImage2 from "../../assets/bannerImage.jpeg";

const TestPumping = () => {
  const [zoomedImage, setZoomedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setZoomedImage(imageSrc);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };
  return (
    <section className="testpumping" id="test-pumping">
      <div className="drilling__content">
        <div className="testpumping__content">
          <div className="testpumping__header">
            <h2 className="testpumpingComponent__title">
              Borehole Test Pumping
            </h2>
          </div>
          <div className="testpumping__details">
            <p className="textcomponent__intro">
              Test pumping is a critical process to assess the yield and
              performance of a borehole. At Dimmer Enterprises LTD, we conduct
              thorough test pumping to ensure the borehole's capacity meets your
              needs, whether for residential, agricultural, or industrial
              purposes.
            </p>
            <div className="testpumping__steps">
              <h3 className="testpumping__steps-title">
                Our Process Includes:
              </h3>
              <ul className="textcomponent__list">
                <li className="textcomponent__list--item">
                  <strong>Initial Assessment:</strong> We measure static water
                  levels and set up the necessary equipment to begin the test.
                </li>
                <li className="textcomponent__list--item">
                  <strong>Pumping Test:</strong> Over a period of hours to days,
                  we extract water at a controlled rate, monitoring changes in
                  water levels and flow rates.
                </li>
                <li className="textcomponent__list--item">
                  <strong>Data Analysis:</strong> The collected data is analyzed
                  to determine the borehole's sustainable yield and potential
                  drawdown.
                </li>
                <li className="textcomponent__list--item">
                  <strong>Final Reporting:</strong> We provide a comprehensive
                  report detailing the findings, including recommendations for
                  optimal pump installation and water usage.
                </li>
              </ul>
            </div>
            <div className="testpumping__benefits">
              <h3 className="testpumping__benefits-title">Why Choose Us?</h3>
              <p className="textcomponent__text">
                Our test pumping services are designed to provide you with
                accurate and reliable information about your borehole's
                capacity. This ensures that your investment is protected, and
                the borehole operates efficiently for years to come.
              </p>
            </div>
          </div>
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
              <source src={testPump1} type="video/mp4" />
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
              src={testImage2}
              alt="Drilling"
              className="drilling__image--content"
              onClick={() => handleImageClick(testImage2)}
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
    </section>
  );
};

export default TestPumping;
