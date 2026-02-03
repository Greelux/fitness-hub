import { Routes, Route } from "react-router-dom"; // перемикання сторінок без перезавантаження)
import Navbar from "./components/Navbar.jsx"; // Імпорт шапки
import Home from "./pages/Home.jsx"; // Імпорт сторінки Home
import Workouts from "./pages/Workouts.jsx"; // Імпорт сторінки Workouts 
import Nutrition from "./pages/Nutrition.jsx"; // Імпорт сторінки Nutrition
import Progress from "./pages/Progress.jsx"; // Імпорт сторінки Progress
import useLocalStorage from "./hooks/useLocalStorage"; // Хук для збереження даних
import "./App.css"; // Підключаємо стилі для App

export default function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <div className={theme}> {/* Додаємо клас "dark" або "light" для зміни тем*/}
      <Navbar theme={theme} setTheme={setTheme} /> {/* Передаємо тему і функцію зміни теми в Navbar*/}

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </main>
    </div>
  );
}
