import GalleryComponent from './GalleryComponent'
import solarImage1 from '../../assets/solar-image1.webp'
import solarImage2 from '../../assets/solar-image2.webp'
import solarImage3 from '../../assets/solar-image3.webp'
import solarImage4 from '../../assets/solar-image4.webp'
import solarImage5 from '../../assets/solar-image5.jpeg'
import solarImage6 from '../../assets/solar-image6.jpeg'

const PumpSolar = () => {
  const imageList = [
    {
      id: 1,
      src: solarImage1,
      alt: "Borehole Solar Installation"
    },
    {
      id: 3,
      src: solarImage3,
      alt: "Borehole Solar Installation 3"
    },
    {
      id: 2,
      src: solarImage2,
      alt: "Borehole Solar Installation 2"
    },
    {
      id: 4,
      src: solarImage4,
      alt: "Borehole Solar Installation 4"
    },
    {
      id: 5,
      src: solarImage5,
      alt: "Borehole Solar Installation 5"
    },
    {
      id: 6,
      src: solarImage6,
      alt: "Borehole Solar Installation 6"
    },
  ];
  return (
    <section className="pumpsolar" id="pump-and-solar-installation">
      <GalleryComponent imageList={imageList}/>
      <div className="pump-solar__container">
        <h2 className="pumpSolarComponent__title">Pump and Solar Installation</h2>
        <p className="textcomponent__intro">
          At Dimmer Enterprises LTD, we specialize in the installation of water pumps and solar energy systems, 
          ensuring reliable and sustainable water access. Our comprehensive services include:
        </p>
        <div className="pump-solar__sections">
          <div className="pump-solar__section">
            <h3 className="pump-solar__section-title">Pump Installation</h3>
            <p className="textcomponent__text">
              Our pump installation services cater to various needs, from domestic to industrial applications. 
              We ensure optimal performance and efficiency with high-quality equipment and expert installation.
            </p>
            <ul className="textcomponent__list">
              <li className="textcomponent__list--item">
                <strong>Submersible Pumps:</strong> Ideal for deep wells, offering efficient water extraction.
              </li>
              <li className="textcomponent__list--item">
                <strong>Surface Pumps:</strong> Suitable for shallow wells or reservoirs, designed for easy maintenance.
              </li>
              <li className="textcomponent__list--item">
                <strong>Booster Systems:</strong> For enhancing water pressure in applications requiring high flow rates.
              </li>
            </ul>
          </div>
          <div className="pump-solar__section">
            <h3 className="pump-solar__section-title">Solar System Installation</h3>
            <p className="textcomponent__text">
              Embracing renewable energy, our solar installation services include designing and installing solar 
              systems that power water pumps, ensuring sustainable and cost-effective operations.
            </p>
            <ul className="textcomponent__list">
              <li className="textcomponent__list--item">
                <strong>Solar Panels:</strong> High-efficiency panels that convert sunlight into electrical energy.
              </li>
              <li className="textcomponent__list--item">
                <strong>Inverters and Controllers:</strong> Ensuring optimal energy conversion and management.
              </li>
              <li className="textcomponent__list--item">
                <strong>Battery Storage:</strong> For reliable power supply even during cloudy conditions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PumpSolar;
