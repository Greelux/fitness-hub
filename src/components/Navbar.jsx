import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Navbar({ theme, setTheme }) {
  return (
    <header className="header">
      <nav className="navInner">
        <NavLink className="navLink" to="/">Home</NavLink>
        <NavLink className="navLink" to="/workouts">Workouts</NavLink>
        <NavLink className="navLink" to="/nutrition">Nutrition</NavLink>
        <NavLink className="navLink" to="/progress">Progress</NavLink>

        <ThemeToggle theme={theme} setTheme={setTheme} />
      </nav>
    </header>
  );
}
