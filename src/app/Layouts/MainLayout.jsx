import { Outlet } from 'react-router-dom'
import Header from '@/widgets/Header/Header'
import Footer from '@/widgets/Footer/Footer'

function MainLayout() {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
