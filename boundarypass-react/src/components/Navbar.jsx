function Navbar() {
  return (
    <header className="site-header" id="home">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="BoundaryPass home">
          <span className="brand-mark" aria-hidden="true">B</span>
          <span>Boundary<span className="brand-highlight">Pass</span></span>
        </a>
        <div className="nav-links">
          <a href="#matches">Matches</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#matches">Explore tickets</a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
