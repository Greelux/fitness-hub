import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage"; // Хук для збереження/читання даних з localStorage
import heroImg from "../assets/gym.jpg"; // Імпорт картинки, щоб показати її на головній

export default function Home() { // Функціональний компонент сторінки Home
  const [workouts] = useLocalStorage("workouts", []); // Беремо тренування з localStorage (якщо нема — пустий масив)
  const [meals] = useLocalStorage("meals", []); // Беремо їжу з localStorage
  const [progress] = useLocalStorage("progress", []); // Беремо записи прогресу з localStorage

  return (   
    <div className="homeTop">
      <div>
        <h2>Fitness Hub</h2>
        <p style={{ opacity: 0.9, maxWidth: 700 }}>
          Тут ти можеш додавати тренування, вести харчування та відстежувати прогрес.
          Дані зберігаються у браузері (localStorage).
        </p>

        <div style={{ display: "flex", gap: 100, flexWrap: "wrap", margin: "16px 0" }}>
          <div className="card">
            <b>Workouts</b>
            <div style={{ opacity: 0.85 }}>{workouts.length} items</div>
          </div>
          <div className="card">
            <b>Meals</b>
            <div style={{ opacity: 0.85 }}>{meals.length} items</div>
          </div>
          <div className="card">
            <b>Progress</b>
            <div style={{ opacity: 0.85 }}>{progress.length} entries</div>
          </div>
        </div>

        <div className="homeBtns">
           <Link className="homeBtn" to="/workouts">Go to Workouts</Link> {/* Перехід на сторінку тренувань */}
          <Link className="homeBtn" to="/nutrition">Go to Nutrition</Link> {/* Перехід на сторінку харчування */}
          <Link className="homeBtn" to="/progress">Go to Progress</Link> {/* Перехід на сторінку прогресу */}
        </div>

      </div>

      <img className="homeImg" src={heroImg} alt="Fitness" />
    </div>
  );
}
