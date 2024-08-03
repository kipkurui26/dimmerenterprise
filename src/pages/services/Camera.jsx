import GalleryComponent from "./GalleryComponent";
import TestImage1 from "../../assets/water-is-life.webp";
import TestImage2 from "../../assets/bannerImage.jpeg";
import TestImage3 from "../../assets/landing.jpg";

const Camera = () => {
  const imageList = [
    {
      id: 1,
      src: TestImage1,
      alt: "Water is life",
    },
    {
      id: 2,
      src: TestImage2,
      alt: "Banner",
    },
    {
      id: 3,
      src: TestImage3,
      alt: "Banner",
    },
    {
      id: 4,
      src: TestImage2,
      alt: "Banner",
    },
  ];
  return (
    <section className="camera" id="camera-inspection">
      <GalleryComponent imageList={imageList} />
      <div className="textcomponent camera__container">
        <h2 className="textcomponent__title">Borehole Camera Inspection</h2>
        <p className="textcomponent__text">
          Borehole camera inspection is an essential service for evaluating the
          internal condition of water wells. Dimmer Enterprises LTD employs the
          use of cutting-edge camera technology to provide a detailed visual
          assessment of boreholes, identifying potential issues such as casing
          defects, blockages, and sediment accumulation.
        </p>
        <p className="textcomponent__text">
          Our inspection services include the following steps:
        </p>
        <ul className="textcomponent__list">
          <li className="textcomponent__list--item">
            <strong>Interior Examination:</strong> We use high-resolution
            cameras to capture clear images and videos of the borehole's
            interior, allowing for a thorough examination of its structural
            state.
          </li>
          <li className="textcomponent__list--item">
            <strong>Issue Identification:</strong> The inspection helps pinpoint
            specific problems such as corrosion, cracks, or blockages, which can
            affect the efficiency and safety of the water supply.
          </li>
          <li className="textcomponent__list--item">
            <strong>Comprehensive Analysis:</strong> After the inspection, we
            provide a detailed report that includes video footage and expert
            analysis, offering recommendations for any necessary repairs or
            maintenance actions.
          </li>
        </ul>
        <p className="textcomponent__text">
          Dimmer Enterprises LTD is committed to ensuring the optimal
          performance and longevity of your borehole systems.
        </p>
      </div>
    </section>
  );
};

export default Camera;
