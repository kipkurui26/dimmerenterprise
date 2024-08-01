import pumpImage1 from '../../assets/water.jpeg'; 
import pumpImage2 from '../../assets/aboutBanner.jpeg';

const PumpSolar = () => {
  return (
    <section className="pumpsolar" id="pump-and-solar-installation">
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
      <div className="pump-solar__gallery">
        <img src={pumpImage1} alt="Pump Installation" className="pump-solar__image" />
        <img src={pumpImage2} alt="Pump Installation" className="pump-solar__image" />
        <img src={pumpImage2} alt="Pump Installation" className="pump-solar__image" />
      </div>
    </section>
  )
}

export default PumpSolar;
