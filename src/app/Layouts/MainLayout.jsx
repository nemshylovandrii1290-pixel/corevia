import Header from '@/widgets/Header/Header'
import Footer from '@/widgets/Footer/Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
