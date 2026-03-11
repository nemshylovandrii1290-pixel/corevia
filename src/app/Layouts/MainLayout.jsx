import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/widgets/Header/Header'
import Footer from '@/widgets/Footer/Footer'
import Sidebar from '@/widgets/Sidebar/Sidebar'
import './MainLayout.scss'

const COMPACT_QUERY = '(max-width: 1024px)'

function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isCompact, setIsCompact] = useState(() => window.matchMedia(COMPACT_QUERY).matches)

  useEffect(() => {
    const media = window.matchMedia(COMPACT_QUERY)

    const onChange = (event) => {
      setIsCompact(event.matches)
      if (event.matches) {
        setSidebarOpen(false)
      }
    }

    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev)
  }

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  return (
    <div className={`app-shell ${sidebarOpen ? 'app-shell--menu-open' : 'app-shell--menu-closed'}`}>
      <div className="app-shell__frame">
        <Header onToggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <main className="app-shell__content">
          <Outlet />
        </main>

        <Footer />
      </div>

      {isCompact && sidebarOpen && (
        <button type="button" className="app-shell__backdrop" aria-label="Закрити меню" onClick={closeSidebar} />
      )}

      <Sidebar isOpen={sidebarOpen} showCloseButton={isCompact} onClose={closeSidebar} />
    </div>
  )
}

export default MainLayout
