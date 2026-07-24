import "./Rules.css";

function Rules() {
  return (
    <section id="rules" className="rule-strip">
      <div className="wrap">

        <div className="rule-item">

          <span className="mark">✦</span>

          <h4>Twin Check, Instant Death</h4>

          <p>
            Checkmate one king the old way, or catch both
            kings in check on the very same move — either
            way, the game is over before your opponent
            gets to answer.
          </p>

        </div>

        <div className="rule-item">

          <span className="mark">✦</span>

          <h4>Two Kings, Two Castles</h4>

          <p>
            The Twin Kings command unmatched coordination. Either King may castle with any Rook, or both Twins may independently castle with the Rook guarding their respective side of the board.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Rules;