import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.scss'

const menu = {
  service: [
    { to: '/services/pc-build', label: 'Замовити збірку ПК' },
    { to: '/services/repair/pc', label: 'Ремонт ПК' },
    { to: '/services/repair/phone', label: 'Ремонт телефона' },
    { to: '/services/repair/laptop', label: 'Ремонт ноутбука' }
  ],
  software: [
    { to: '/software/chatbot', label: 'Замовити бота' },
    { to: '/software/site', label: 'Замовити сайт' },
    { to: '/software/app', label: 'Замовити програму' }
  ]
}

function Sidebar({ isOpen, showCloseButton, onClose }) {
  const [opened, setOpened] = useState({ service: true, software: false })

  const toggle = (section) => {
    setOpened((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const handleNavigate = () => {
    if (showCloseButton) {
      onClose()
    }
  }

  return (
    <aside className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--closed'}`}>
      <div className="sidebar__inner">
        {showCloseButton && (
          <button type="button" className="sidebar__close" onClick={onClose}>
            Закрити меню
          </button>
        )}

        <nav className="sidebar__nav">
          <NavLink
            to="/"
            end
            onClick={handleNavigate}
            className={({ isActive }) => (isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link')}
          >
            Home
          </NavLink>

          <button type="button" className="sidebar__group" onClick={() => toggle('service')}>
            Сервіс
          </button>
          <div className={`sidebar__submenu ${opened.service ? 'sidebar__submenu--open' : ''}`}>
            {menu.service.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={handleNavigate}
                className={({ isActive }) => (isActive ? 'sidebar__sublink sidebar__sublink--active' : 'sidebar__sublink')}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button type="button" className="sidebar__group" onClick={() => toggle('software')}>
            Замовити софт
          </button>
          <div className={`sidebar__submenu ${opened.software ? 'sidebar__submenu--open' : ''}`}>
            {menu.software.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={handleNavigate}
                className={({ isActive }) => (isActive ? 'sidebar__sublink sidebar__sublink--active' : 'sidebar__sublink')}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <NavLink
            to="/projects"
            onClick={handleNavigate}
            className={({ isActive }) => (isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link')}
          >
            Проєкти
          </NavLink>
          <NavLink
            to="/blog"
            onClick={handleNavigate}
            className={({ isActive }) => (isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link')}
          >
            Блог
          </NavLink>
          <NavLink
            to="/contacts"
            onClick={handleNavigate}
            className={({ isActive }) => (isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link')}
          >
            Контакти
          </NavLink>
        </nav>

        <div className="sidebar__bottom">
          <NavLink
            to="/register"
            onClick={handleNavigate}
            className={({ isActive }) => (isActive ? 'sidebar__cta sidebar__cta--active' : 'sidebar__cta')}
          >
            Зареєструватися
          </NavLink>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
