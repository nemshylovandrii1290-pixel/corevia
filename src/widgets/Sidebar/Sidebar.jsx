import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.scss'

const sectionItems = {
  repair: [
    { to: '/services/repair/pc', label: 'Ремонт ПК' },
    { to: '/services/repair/laptop', label: 'Ремонт ноутбуків' },
    { to: '/services/repair/phone', label: 'Ремонт телефонів' }
  ],
  software: [
    { to: '/software/chatbot', label: 'Замовити бота' },
    { to: '/software/app', label: 'Замовити застосунок' },
    { to: '/software/site', label: 'Замовити сайт' },
    { to: '/software/direct', label: 'Написати в дірект' }
  ],
  service: [
    { to: '/services/pc-build', label: 'Замовити збірку ПК' },
    { to: '/services/repair', label: 'Замовити ремонт' }
  ]
}

function Sidebar({ isOpen }) {
  const [opened, setOpened] = useState({
    repair: true,
    software: false,
    service: false
  })

  const toggleSection = (name) => {
    setOpened((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  return (
    <aside className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--closed'}`}>
      <div className="sidebar__inner">
        <h2 className="sidebar__title">Навігація</h2>

        <nav className="sidebar__nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link')}>
            Головна
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link')}>
            Проєкти
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link')}>
            Блог
          </NavLink>
          <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link')}>
            Контакти
          </NavLink>
          <NavLink to="/feedback" className={({ isActive }) => (isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link')}>
            Зворотний зв’язок
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link')}>
            Вхід
          </NavLink>

          <button type="button" className="sidebar__group" onClick={() => toggleSection('repair')}>
            Ремонт техніки
          </button>
          <div className={`sidebar__submenu ${opened.repair ? 'sidebar__submenu--open' : ''}`}>
            {sectionItems.repair.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? 'sidebar__sublink sidebar__sublink--active' : 'sidebar__sublink'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button type="button" className="sidebar__group" onClick={() => toggleSection('software')}>
            Замовити софт
          </button>
          <div className={`sidebar__submenu ${opened.software ? 'sidebar__submenu--open' : ''}`}>
            {sectionItems.software.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? 'sidebar__sublink sidebar__sublink--active' : 'sidebar__sublink'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <button type="button" className="sidebar__group" onClick={() => toggleSection('service')}>
            Сервіс
          </button>
          <div className={`sidebar__submenu ${opened.service ? 'sidebar__submenu--open' : ''}`}>
            {sectionItems.service.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? 'sidebar__sublink sidebar__sublink--active' : 'sidebar__sublink'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
