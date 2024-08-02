import TestImage1 from "../../assets/water-is-life.jpg";
import TestImage2 from "../../assets/bannerImage.jpeg";
import TestImage3 from "../../assets/landing.jpg";
import GalleryComponent from "./GalleryComponent"

const TowerConstruction = () => {
  const imageList = [
    {
      id: 1,
      src: TestImage1,
      alt: "Water is life"
    },
    {
      id: 2,
      src: TestImage2,
      alt: "Banner"
    },
    {
      id: 3,
      src: TestImage3,
      alt: "Banner"
    },
    {
      id: 4,
      src: TestImage2,
      alt: "Banner"
    },
  ];
  return (
    <section className="towerconstruction" id="tower-construction">
      <div className="tower-construction__container">
        <h2 className="towerConstructionComponent__title">Elevated Tank Tower Construction</h2>
        <p className="textcomponent__intro">
          At Dimmer Enterprises LTD, we offer professional elevated tank tower construction services to ensure reliable and elevated water storage solutions. Our services include:
        </p>
        <div className="tower-construction__sections">
          <div className="tower-construction__section">
            <h3 className="tower-construction__section-title">Design and Planning</h3>
            <p className="textcomponent__text">
              Our team provides comprehensive design and planning services to meet your specific needs and site conditions.
            </p>
            <ul className="textcomponent__list">
              <li className="textcomponent__list--item">
                <strong>Site Analysis:</strong> Detailed analysis to determine the best location for the tower.
              </li>
              <li className="textcomponent__list--item">
                <strong>Custom Designs:</strong> Tailored designs to match your requirements.
              </li>
              <li className="textcomponent__list--item">
                <strong>Structural Integrity:</strong> Ensuring the tower can withstand environmental conditions.
              </li>
            </ul>
          </div>
          <div className="tower-construction__section">
            <h3 className="tower-construction__section-title">Construction and Installation</h3>
            <p className="textcomponent__text">
              We use high-quality materials and adhere to strict safety standards to ensure the durability and longevity of the towers.
            </p>
            <ul className="textcomponent__list">
              <li className="textcomponent__list--item">
                <strong>Expert Construction:</strong> Skilled workforce for precise construction.
              </li>
              <li className="textcomponent__list--item">
                <strong>Quality Materials:</strong> Using the best materials to ensure longevity.
              </li>
              <li className="textcomponent__list--item">
                <strong>Safety Standards:</strong> Adhering to all safety regulations and guidelines.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <GalleryComponent imageList={imageList}/>
    </section>
  )
}

export default TowerConstruction;
