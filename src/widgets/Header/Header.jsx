import { Link } from 'react-router-dom'
import logo from '@/assets/logo/corevia-logo-gradient.svg'
import './Header.scss'

function Header({ onToggleSidebar, sidebarOpen }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="logo">
          <img src={logo} alt="Corevia logo" className="logo-img" />
        </Link>

        <button className="menu-toggle" type="button" onClick={onToggleSidebar}>
          {sidebarOpen ? 'Сховати меню' : 'Меню'}
        </button>
      </div>
    </header>
  )
}

export default Header
