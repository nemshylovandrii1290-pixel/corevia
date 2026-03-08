import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <section className="container" style={{ paddingTop: '32px', paddingBottom: '32px' }}>
      <h1 style={{ marginBottom: '12px' }}>Панель керування</h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px' }}>
        Тут зібрані всі твої розділи. Обирай вкладку в сайдбарі або переходь по швидких посиланнях.
      </p>

      <div style={{ display: 'grid', gap: '12px', maxWidth: '520px' }}>
        <Link to="/dashboard/pc-build">Збірка ПК</Link>
        <Link to="/dashboard/repair">Ремонт техніки</Link>
        <Link to="/dashboard/chatbots">Чат-боти</Link>
        <Link to="/dashboard/web-apps">Сайти та застосунки</Link>
        <Link to="/dashboard/projects">Проєкти</Link>
        <Link to="/dashboard/blog">Блог</Link>
        <Link to="/dashboard/contacts">Контакти</Link>
        <Link to="/dashboard/feedback">Зворотний зв’язок</Link>
      </div>
    </section>
  )
}

export default Dashboard
