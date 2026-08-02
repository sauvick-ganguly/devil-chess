import "./Rules.css";

function Rules() {
  return (
    <section id="rules" className="rule-strip">
      <div className="wrap">

        <div className="rule-item">

          <span className="mark">✦</span>

          <h4>Twin Check, Instant Death</h4>

          <p
            style={{
              minHeight: "140px",
            }}
          >
            The Queen's soul remains imprisoned by the Devil, leaving the Devil King to occupy her place until she returns. Though he serves the Devil, his survival is essential to the kingdom's fate. Checkmate either King, or place both Kings in check on the same move, and the game ends before your opponent can answer.
          </p>

        </div>

        <div className="rule-item">

          <span className="mark">✦</span>

          <h4>Two Kings, Two Castles</h4>

          <p
            style={{
              minHeight: "140px",
            }}
          >
            Though they rule beneath different crowns, the rightful King and the Devil King share perfect coordination. Either King may castle with any Rook, while each may also independently castle with the Rook guarding his own side of the board.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Rules;