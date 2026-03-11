import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import './Hero.scss'

const HeroScene = lazy(() => import('./HeroScene'))

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__viewport">
        <div className="hero__ambient hero__ambient--left" aria-hidden="true" />
        <div className="hero__ambient hero__ambient--right" aria-hidden="true" />
        <div className="hero__scene-wrap">
          <Suspense fallback={<div className="hero__scene-fallback" aria-hidden="true" />}>
            <HeroScene />
          </Suspense>
        </div>
      </div>

      <div className="container hero__content">
        <p className="hero__eyebrow">Corevia</p>
        <h1>Сервіс і розробка для вашого бізнесу та техніки</h1>
        <p className="hero__text">
          Ремонт ПК, ноутбуків і телефонів, збірка ПК під задачі, розробка сайтів, чат-ботів,
          автоматизація та цифрові системи для бізнесу. Усе в одному місці.
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
