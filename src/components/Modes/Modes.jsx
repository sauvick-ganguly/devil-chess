import "./Modes.css";
import duel from "../../assets/duel.png";
import bots from "../../assets/bots.png";
import PnP from "../../assets/pnp.png";

function Modes() {

  const handleModeClick = (mode) => {
    switch (mode) {
      case "Multiplayer":
        // Future multiplayer page
        break;

      case "With Bots":
        // Future bot page
        break;

      case "Pass & Play":
        window.location.assign("https://devil-chess-engine-ten.vercel.app/");
        break;

      default:
        break;
    }
  };

  return (
    <section id="modes">
      <div className="wrap">

        <div className="section-head">
          <div className="eyebrow">
            Choose Your Trial
          </div>

          <h2>Three Ways to Damnation</h2>

          <p>
            However you arrive at the board, both kings leave the
            same way — together, or not at all.
          </p>
        </div>

        <div className="modes-grid">

          <div
            className="gate-card"
            onClick={() => handleModeClick("Multiplayer")}
          >
            <div className="num">I</div>

            <img
              src={duel}
              alt="Duel"
              className="icon"
            />

            <h3>Multiplayer</h3>

            <p>
              Summon an opponent from across the realm and settle it
              in real time, king against king.
            </p>

            <span className="enter">
              Find an Opponent
            </span>
          </div>

          <div
            className="gate-card"
            onClick={() => handleModeClick("With Bots")}
          >
            <div className="num">II</div>

            <img
              src={bots}
              alt="Mechanical Bot"
              className="icon"
            />

            <h3>With Bots</h3>

            <p>
              Face a devil of your choosing, from a mischievous imp
              to a sovereign of the twin thrones.
            </p>

            <span className="enter">
              Choose Your Devil
            </span>
          </div>

          <div
            className="gate-card"
            onClick={() => handleModeClick("Pass & Play")}
          >
            <div className="num">III</div>

            <img
              src={PnP}
              alt="Pass And Play"
              className="icon"
            />

            <h3>Pass & Play</h3>

            <p>
              One board, one screen, two sinners. Hand the device
              across the table and take turns damning each other.
            </p>

            <span className="enter">
              Share the Board
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Modes;