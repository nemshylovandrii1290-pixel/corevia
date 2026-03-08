import { Link } from 'react-router-dom'
import './Hero.scss'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="container hero__content">
        <p className="hero__eyebrow">Corevia</p>
        <h1>Сервіс і розробка для вашого бізнесу та техніки</h1>
        <p className="hero__text">
          Ремонт ПК, ноутбуків і телефонів, збірка ПК під задачі, розробка сайтів, чат-ботів та
          невеликих застосунків. Усе в одному місці.
        </p>
        <div className="hero__actions">
          <Link to="/services" className="btn-primary">
            Перейти до послуг
          </Link>
          <Link to="/contacts" className="btn-secondary">
            Зв’язатися
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
