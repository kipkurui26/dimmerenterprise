import TopNav from "./TopNav"
import './navigation.css'
import DimmerLogo from '../../assets/dimmer-logo.jpeg';

const NavBar = () => {
  return (
    <section className="navigation">
        <TopNav />
        <nav className='nav'>
            <figure className="nav__logo">
                <img className="nav__logo--image" src={DimmerLogo} alt="Dimmer Enterprise LTD Logo" />
            </figure>
        </nav>
    </section>
  )
}

export default NavBar