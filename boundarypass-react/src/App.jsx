import { useState } from 'react'
import Hero from './components/Hero.jsx'
import MatchCard from './components/MatchCard.jsx'
import Navbar from './components/Navbar.jsx'
import { matches } from './data/matches.js'
import './App.css'

function App() {
  const [selectedTeam, setSelectedTeam] = useState('All teams')
  const teams = [...new Set(matches.flatMap((match) => match.teams))].sort()
  const filteredMatches = matches.filter(
    (match) => selectedTeam === 'All teams' || match.teams.includes(selectedTeam),
  )

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="matches-section" id="matches" aria-labelledby="matches-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE UPCOMING FIXTURES</p>
              <h2 id="matches-title">Find your next match</h2>
              <p className="section-description">
                Pick a game, find your seats, and be there for every moment.
              </p>
            </div>

            <div className="filter-control">
              <label htmlFor="team-filter">Filter by team</label>
              <select
                id="team-filter"
                value={selectedTeam}
                onChange={(event) => setSelectedTeam(event.target.value)}
              >
                <option>All teams</option>
                {teams.map((team) => (
                  <option key={team}>{team}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="match-grid">
            {filteredMatches.map((match) => (
              <MatchCard key={match.id} {...match} />
            ))}
          </div>
          {filteredMatches.length === 0 && (
            <p className="empty-state">No sample matches found for this team.</p>
          )}
          <p className="sample-note">
            Sample fixtures and prices for this React learning activity.
          </p>
        </section>
      </main>

      <footer className="site-footer" id="about">
        <a className="footer-brand" href="#home">Boundary<span>Pass</span></a>
        <p>Made for the love of the game.</p>
      </footer>
    </>
  )
}

export default App
