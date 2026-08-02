import "./Pieces.css";
import pieceImages from "../../assets/pieceImages";

function Pieces() {
  return (
    <section id="pieces">
      <div className="wrap">

        <div className="section-head">
          <div className="eyebrow">
            The Roster
          </div>

          <h2>Pieces Bound in Brimstone</h2>

          <p>
            Four of the eight are unlike anything on a mortal board.
            Learn them before they learn you.
          </p>
        </div>

        <div className="pieces-grid">

          <div className="piece-card">

            <div className="glyph twin-kings">
              <img
                src={pieceImages.b.K2}
                alt="Black King"
                className="black-king"
              />
              <img
                src={pieceImages.w.K1}
                alt="White King"
              />
            </div>

            <span className="tag">
              Core Rule
            </span>

            <h4>Twin Kings</h4>

            <p>
              Each army is commanded by the rightful King and the Devil King, the Devil's own representative. Born of the Devil's bargain for the Queen's soul, he bears authority equal to the King's. The fall of either King seals the kingdom's fate, ending the game at once.
            </p>

          </div>

          <div className="piece-card new">

            <div className="glyph">
              <img src={pieceImages.w.W} alt="White Wolf" />
              <img
                src={pieceImages.b.W}
                alt="Black Wolf"
                className="black-wolf"
              />
            </div>

            <span className="tag">
              New Piece
            </span>

            <h4>The Wolves</h4>

            <p>
              Once faithful Knights, they were cursed by the Devil's Prelate and transformed into Wolves. They move up to two squares in any direction. When a friendly piece blocks their path, they leap over it and land exactly three squares away.
            </p>

          </div>

          <div className="piece-card new">

            <div className="glyph">
              <img
                src={pieceImages.w.D}
                alt="White Devil Prelate"
              />
              <img
                src={pieceImages.b.D}
                alt="Black Devil Prelate"
                className="black-prelate"
              />
            </div>
            <span className="tag">
              New Piece
            </span>

            <h4>Devil's Prelate</h4>

            <p>
              Once a faithful Bishop, he was corrupted by the Devil himself. He now serves the infernal realm and may return from death once per game, provided his birth square is empty
            </p>

          </div>

          <div className="piece-card">

            <div className="glyph">
  <img
    src={pieceImages.w.R}
    alt="White Rook"
  />
  <img
    src={pieceImages.b.P}
    alt="Black Pawn"
    className="black-pawn"
  />
</div>
            <span className="tag">
              Unchanged
            </span>

            <h4>Rooks & Pawns</h4>

            <p>
              The remaining pieces remain untouched by the Devil's corruption, standing as the last defenders of the light. Together, they create the perfect conflict between Good and Evil.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Pieces;