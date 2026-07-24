import blackWolf from "../../assets/black/blackWolf.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="wrap">

        <div className="brand">

          <img
    src={blackWolf}
    alt="Black Wolf"
    className="logo-wolf"
/>

          <footer className="footer">
            <p>
              © 2026 <span className="brand">Devil's Chess</span>. All Rights Reserved.
            </p>
          </footer>

        </div>

        <p>
          A twin-king chess variant. Two crowns, one board,
          no mercy for divided attention.
        </p>

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