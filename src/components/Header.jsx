import { Link } from "react-router-dom";

export default function Header({ onSearch }) {
  return (
    <header className="site-header">
      <nav className="nav">
        <Link to="/" className="logo">
          MySite
        </Link>
        <Link to="/portfolio" className="nav-link">
          Portfolio / CV
        </Link>
      </nav>

      <div className="search">
        <input
          type="text"
          placeholder="Search posts..."
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </header>
  );
}
