import { Outlet } from 'react-router-dom'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import Footer from '../Footer/Footer'

import './Header.css'

const Header = () => {
  return (
    <div>
      <nav>
        <Logo />
        <Button to={'/'}>Home</Button>
        <Button to={'/product'}>Shoes</Button>
        <Button to={'/product/add'}>Add Shoe</Button>
      </nav>
      <Outlet /> {/* This will render the child routes */}
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  )
}

export default Header
