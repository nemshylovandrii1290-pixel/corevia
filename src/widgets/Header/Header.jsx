import { Link } from 'react-router-dom'
import logo from '@/assets/logo/corevia-logo-gradient.svg'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="logo">
          <img src={logo} alt="Corevia logo" className="logo-img" />
        </Link>

        <nav className="nav">
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header