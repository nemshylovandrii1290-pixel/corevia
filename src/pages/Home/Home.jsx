import heroBg from '@/assets/images/hero-bg.png'
import './Home.scss'

function Home() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`
      }}
    >
      <div className="container">
        <h1>
          Full-Stack Developer <br />& Digital Creator
        </h1>

        <p>I build scalable web platforms, automation tools and digital ecosystems.</p>

        <div className="hero__actions">
          <button className="btn-primary">View Work</button>
          <button className="btn-secondary">Contact Me</button>
        </div>
      </div>
    </section>
  )
}

export default Home
