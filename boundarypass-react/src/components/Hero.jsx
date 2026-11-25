function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="hero-kicker"><span aria-hidden="true">✦</span> THE GAME IS BETTER LIVE</p>
        <h1 id="hero-title">Your seat.<br />Your team. <span>Your moment.</span></h1>
        <p className="hero-description">
          Feel every cheer, every boundary, every last-ball finish. Your next
          unforgettable cricket moment starts here.
        </p>
        <a className="hero-button" href="#matches">Browse matches <span aria-hidden="true">→</span></a>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="stadium-ring stadium-ring-outer" />
        <div className="stadium-ring stadium-ring-inner" />
        <div className="hero-ball">B</div>
        <span className="hero-spark hero-spark-one">✦</span>
        <span className="hero-spark hero-spark-two">✦</span>
        <span className="hero-caption">CHASE THE<br />CHEER</span>
      </div>
      <div className="hero-bottom-line">
        <span>THE STADIUM IS CALLING</span>
        <span>IPL MATCH EXPERIENCES <span className="gold-dot">●</span> MADE FOR FANS</span>
      </div>
    </section>
  )
}

export default Hero
