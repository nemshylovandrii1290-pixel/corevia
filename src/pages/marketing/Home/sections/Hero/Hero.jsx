import { Link } from 'react-router-dom'
import './Hero.scss'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__circuit" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--left" />
        <div className="hero__glow hero__glow--right" />
        <div className="hero__stage">
          <div className="hero__platform">
            <span className="hero__trace hero__trace--one" />
            <span className="hero__trace hero__trace--two" />
            <span className="hero__trace hero__trace--three" />
          </div>
          <div className="hero__orbital">
            <div className="hero__ring hero__ring--outer" />
            <div className="hero__ring hero__ring--inner" />
            <div className="hero__sphere">
              <div className="hero__sphere-core" />
              <div className="hero__sphere-grid" />
              <div className="hero__sphere-shine" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero__overlay" />

      <div className="container hero__content">
        <p className="hero__eyebrow">Corevia</p>
        <h1>Сервіс і розробка для вашого бізнесу та техніки</h1>
        <p className="hero__text">
          Ремонт ПК, ноутбуків і телефонів, збірка ПК під задачі, розробка сайтів, чат-ботів та
          невеликих застосунків. Усе в одному місці.
        </p>
        <div className="hero__actions">
          <Link to="/software/web-applications" className="btn-primary">
            Перейти до послуг
          </Link>
          <Link to="/contact" className="btn-secondary">
            Зв&apos;язатися
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
