import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/">
          <h2 className="main-title">Event Planner</h2>
        </NavLink>
        <SearchBar />
      </nav>
    </header>
  );
}
