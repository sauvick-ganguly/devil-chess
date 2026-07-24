import "./Modal.css";

const DIFFICULTIES = [
  {
    name: "Imp",
    description: "Reckless & new to sin",
  },
  {
    name: "Fiend",
    description: "Knows the old tricks",
  },
  {
    name: "Archdevil",
    description: "Merciless calculation",
  },
  {
    name: "Twin Sovereign",
    description: "Rules two thrones at once",
  },
];

function Modal({ isOpen, mode, onClose }) {
  if (!isOpen) return null;

  const getContent = () => {
    switch (mode) {
      case "Multiplayer":
        return {
          glyph: "⚔",
          title: "Summoning Circle Loading",
          body:
            "Matchmaking across the realm is still being carved into the stone. Multiplayer will open the moment the circle is complete — check back soon.",
        };

      case "Bots":
        return {
          glyph: "👹",
          title: "Choose Your Devil",
          body: "Pick your opponent's rank before you descend.",
        };

      case "Pass & Play":
        return {
          glyph: "⌛",
          title: "One Board, Two Sinners",
          body:
            "Challenge a friend on the same board and fight for the throne in Devil's Chess.",
        };

      default:
        return {
          glyph: "♚",
          title: "Devil's Chess",
          body: "Choose your trial.",
        };
    }
  };

  const content = getContent();


  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
    >
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <div className="glyph-lg">
          {content.glyph}
        </div>

        <h3>{content.title}</h3>

        <p>{content.body}</p>

        {mode === "Bots" ? (
          <div className="diff-grid">
            {DIFFICULTIES.map((difficulty) => (
              <div
                key={difficulty.name}
                className="diff-opt"
              >
                <div className="n">
                  {difficulty.name}
                </div>

                <div className="d">
                  {difficulty.description}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <button
            className="btn fire"
            style={{
              width: "100%",
              justifyContent: "center",
            }}
            onClick={handleAction}
          >
            {mode === "Pass & Play"
              ? "Enter the Battlefield"
              : "Return to the Board"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Modal;