import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.scss'

const menu = {
  software: [
    { to: '/software/web-applications', label: 'Web Applications' },
    { to: '/software/custom-software', label: 'Custom Software' },
    { to: '/software/saas-development', label: 'SaaS Development' },
    { to: '/software/api-development', label: 'API Development' }
  ],
  automation: [
    { to: '/automation/business-automation', label: 'Business Automation' },
    { to: '/automation/workflow-automation', label: 'Workflow Automation' },
    { to: '/automation/chat-bots', label: 'Telegram / Chat Bots' },
    { to: '/automation/ai-integration', label: 'AI Integration' }
  ],
  systems: [
    { to: '/systems/crm-systems', label: 'CRM Systems' },
    { to: '/systems/booking-systems', label: 'Booking Systems' },
    { to: '/systems/admin-panels', label: 'Admin Panels' },
    { to: '/systems/dashboards', label: 'Dashboards' }
  ]
}

function Sidebar({ isOpen, showCloseButton, onClose }) {
  const [opened, setOpened] = useState({
    software: false,
    automation: false,
    systems: false
  })

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
            Close menu
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

          <button type="button" className="sidebar__group" onClick={() => toggle('software')}>
            Software
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

          <button type="button" className="sidebar__group" onClick={() => toggle('automation')}>
            Automation
          </button>
          <div className={`sidebar__submenu ${opened.automation ? 'sidebar__submenu--open' : ''}`}>
            {menu.automation.map((item) => (
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

          <button type="button" className="sidebar__group" onClick={() => toggle('systems')}>
            Systems
          </button>
          <div className={`sidebar__submenu ${opened.systems ? 'sidebar__submenu--open' : ''}`}>
            {menu.systems.map((item) => (
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
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            onClick={handleNavigate}
            className={({ isActive }) => (isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link')}
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            onClick={handleNavigate}
            className={({ isActive }) => (isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link')}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={handleNavigate}
            className={({ isActive }) => (isActive ? 'sidebar__link sidebar__link--active' : 'sidebar__link')}
          >
            Contact
          </NavLink>
        </nav>

        <div className="sidebar__bottom">
          <NavLink
            to="/register"
            onClick={handleNavigate}
            className={({ isActive }) => (isActive ? 'sidebar__cta sidebar__cta--active' : 'sidebar__cta')}
          >
            Register
          </NavLink>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
