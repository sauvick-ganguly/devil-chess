import blackWolf from "../../assets/black/blackWolf.png";
import "./Navbar.css";

function Navbar() {

  const scrollToModes = () => {
    document
      .getElementById("modes")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="nav">
      <div className="nav-inner">

        <div className="brand">

          <img
            src={blackWolf}
            alt="Black Wolf"
            className="logo-wolf"
          />

          <span className="word">
            DEVIL<em>'</em>S CHESS
          </span>

        </div>

        <nav className="links">

          <a href="#pieces">Pieces</a>

          <a href="#modes">Play</a>

          <a href="#rules">Rules</a>

        </nav>

        <button
          className="nav-cta"
          onClick={scrollToModes}
        >
          Play Now
        </button>

      </div>
    </header>
  );
}

export default Navbar;