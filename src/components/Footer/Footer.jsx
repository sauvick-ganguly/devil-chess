import blackWolf from "../../assets/black/blackWolf.png";
import myPhoto from "../../assets/sauvick.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="wrap">

        {/* Brand */}
        <div className="brand">
          <img
            src={blackWolf}
            alt="Black Wolf"
            className="logo-wolf"
          />

          <p>
            © 2026{"   "} <span className="brand-name">Devil's Chess</span>. All Rights Reserved.
          </p>
        </div>

        {/* Creator */}
        <div className="creator">
          <img
            src={myPhoto}
            alt="Sauvick Ganguly"
            className="creator-photo"
          />

          <h4>Sauvick Ganguly</h4>

          <span>Creator & Developer</span>
        </div>

        {/* Tagline */}
        <p className="tagline">
          A twin-king chess variant. Two crowns, one board,
          no mercy for divided attention.
        </p>

        {/* Links */}
        <div className="foot-links">
          <a href="#pieces">Pieces</a>
          <a href="#modes">Play</a>
          <a href="#rules">Rules</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;