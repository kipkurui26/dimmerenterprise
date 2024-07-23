import './services.css'
import { subLinks } from '../../components/navigation/NavList'
import Survey from './Survey'
import Drilling from './Drilling'
import Camera from './Camera'
import TestPumping from './TestPumping'
import PumpSolar from './PumpSolar'
import TowerConstruction from './TowerConstruction'
import { HashLink } from 'react-router-hash-link'

const Services = () => {
  return (
    <section className="services">
        <ul>
            {subLinks.map(({id, path, title})=>(
                <li key={id}>
                    <HashLink smooth to={path}>{title}</HashLink>
                </li>
            ))}
        </ul>
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