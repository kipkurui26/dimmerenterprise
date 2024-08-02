import pumpImage1 from '../../assets/water.jpeg'; 
import pumpImage2 from '../../assets/aboutBanner.jpeg';
import TextComponent from "./TextComponent"



const Survey = () => {
  return (
    <section className="survey" id="hydrogeological-survey">
      <TextComponent />
      <div className="pump-solar__figure">
        <img src={pumpImage1} alt="Water is life" className="pump-solar__figure--image"/>
        <img src={pumpImage2} alt="Banner" className="pump-solar__figure--image"/>
      </div>
    </section>
  )
}

export default Survey