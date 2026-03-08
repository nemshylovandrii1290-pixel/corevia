import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/widgets/Header/Header'
import Footer from '@/widgets/Footer/Footer'
import Sidebar from '@/widgets/Sidebar/Sidebar'
import './MainLayout.scss'

function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev)
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

      <Sidebar isOpen={sidebarOpen} />
    </div>
  )
}

export default MainLayout
