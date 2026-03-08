import { NavLink } from 'react-router-dom'
import './Sidebar.scss'

const links = [
  { to: '/dashboard', label: 'Огляд', end: true },
  { to: '/dashboard/pc-build', label: 'Збірка ПК' },
  { to: '/dashboard/repair', label: 'Ремонт техніки' },
  { to: '/dashboard/chatbots', label: 'Чат-боти' },
  { to: '/dashboard/web-apps', label: 'Сайти та застосунки' },
  { to: '/dashboard/projects', label: 'Проєкти' },
  { to: '/dashboard/blog', label: 'Блог' },
  { to: '/dashboard/contacts', label: 'Контакти' },
  { to: '/dashboard/feedback', label: 'Зворотний зв\'язок' }
]

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__title">Corevia</h2>
      <nav className="sidebar__nav">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
