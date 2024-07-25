import './services.css'
import Survey from './Survey'
import Drilling from './Drilling'
import Camera from './Camera'
import TestPumping from './TestPumping'
import PumpSolar from './PumpSolar'
import TowerConstruction from './TowerConstruction'

const Services = () => {
  return (
    <section className="services">
        <Survey />
        <Drilling/>
        <Camera/>
        <TestPumping/>
        <PumpSolar/>
        <TowerConstruction/>
    </section>
  )
}

export default Services