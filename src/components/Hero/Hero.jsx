import "./Hero.css";
import blackKing from "../../assets/black/blackKing2.png";
import whiteKing from "../../assets/white/whiteKing1.png";
import EmberBackground from "../EmberBackground/EmberBackground";

function Hero() {

  const scrollToModes = () => {
    document
      .getElementById("modes")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero">

      <EmberBackground />

      <div className="eyebrow">
        A Chess Variant Forged Below
      </div>

      <svg
        className="emblem"
        viewBox="0 0 400 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

        <defs>
          <linearGradient id="kingGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ede6e2" />
            <stop offset="100%" stopColor="#7a1530" />
          </linearGradient>
        </defs>

        <line
          x1="200"
          y1="10"
          x2="200"
          y2="150"
          stroke="#ff5a36"
          strokeWidth="1"
          opacity="0.55"
        />

        <g transform="translate(70,20)" fill="url(#kingGrad)" opacity="0.92">
          <image
            href={whiteKing}
            x="0"
            y="15"
            width="90"
            height="120"
          />
        </g>

        <g transform="translate(230,20)" fill="url(#kingGrad)" opacity="0.92">
          <image
            href={blackKing}
            x="35"
            y="15"
            width="90"
            height="120"
          />
        </g>

        <text
          x="200"
          y="46"
          textAnchor="middle"
          fontSize="30"
          fill="#d4af6a"
        >
          ☩
        </text>

      </svg>

      <h1 className="title">
        <span className="small">
          Two Kings Descend
        </span>

        Devil's Chess
      </h1>

      <p className="tagline">
        The Devil has rewritten the laws of chess. The King and his Twin corrupted by the Devil lead the Army, Wolves stalk the battlefield, and the Devil's Prelate rises from death itself. In this cursed realm, the fall of a single King is enough to end the game.
      </p>

      <div className="hero-ctas">
        <a
          href="http://story.devilchess.com/"
          className="btn ghost"
        >
          Read the Story & Game Rules
        </a>

        <button
          className="btn fire"
          onClick={scrollToModes}
        >
          Enter the Board
        </button>

        <a
          className="btn ghost"
          href="#pieces"
        >
          Meet the Cursed Pieces
        </a>

      </div>

      <div className="scroll-cue">

        <span>Descend</span>

        <span className="stem"></span>

      </div>

    </section>
  );
}

export default Hero;