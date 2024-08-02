import tankTower1 from '../../assets/tank-tower1.webp'
import tankTower2 from '../../assets/tank-tower2.webp'
import tankTower3 from '../../assets/tank-tower3.webp'
import tankTower4 from '../../assets/tank-tower4.webp'
import tankTower5 from '../../assets/tank-tower5.webp'
import tankTower6 from '../../assets/tank-tower6.webp'
import GalleryComponent from "./GalleryComponent"

const TowerConstruction = () => {
  const imageList = [
    {
      id: 1,
      src: tankTower1,
      alt: "Elevated Tank Tower Construction 1"
    },
    {
      id: 2,
      src: tankTower2,
      alt: "Elevated Tank Tower Construction 2"
    },
    {
      id: 3,
      src: tankTower3,
      alt: "Elevated Tank Tower Construction 3"
    },
    {
      id: 4,
      src: tankTower4,
      alt: "Elevated Tank Tower Construction 4"
    },
    {
      id: 5,
      src: tankTower5,
      alt: "Elevated Tank Tower Construction 5"
    },
    {
      id: 6,
      src: tankTower6,
      alt: "Elevated Tank Tower Construction 6"
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
