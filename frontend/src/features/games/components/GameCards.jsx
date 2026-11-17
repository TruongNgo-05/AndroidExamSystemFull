import { Link } from "react-router-dom";
import { GAMES } from "../data/games.js";
export default function GameCards() {
  return (
    <div className="game-grid">
      {GAMES.map((g) => (
        <Link
          className={`game-card game-${g.id}`}
          to={`/tro-choi/${g.id}`}
          key={g.id}
        >
          <span className="game-emoji">{g.emoji}</span>
          <small>{g.tag}</small>
          <h3>{g.name}</h3>
          <p>{g.description}</p>
          <b>Chọn chủ đề →</b>
        </Link>
      ))}
    </div>
  );
}
