function MatchCard({ teams, date, venue, ticketPrices }) {
  return (
    <article className="match-card">
      <div className="match-card-top">
        <span className="match-label">IPL · SAMPLE MATCH</span>
        <span className="availability"><span aria-hidden="true">●</span> Tickets available</span>
      </div>

      <div className="teams-row">
        <div className="team-name">{teams[0]}</div>
        <span className="versus">VS</span>
        <div className="team-name">{teams[1]}</div>
      </div>

      <div className="match-details">
        <p><span className="detail-icon" aria-hidden="true">◷</span>{date}</p>
        <p><span className="detail-icon" aria-hidden="true">⌖</span>{venue}</p>
      </div>

      <div className="ticket-prices">
        {Object.entries(ticketPrices).map(([category, price]) => (
          <div className="price-option" key={category}>
            <span>{category}</span>
            <strong>₹{price.toLocaleString('en-IN')}</strong>
          </div>
        ))}
      </div>
    </article>
  )
}

export default MatchCard
