export default function ThemeToggle({ theme, setTheme }) { // Компонент перемикача теми
  return (
    <button // Кнопка для перемикання теми
      type="button" // Щоб кнопка не відправляла форму
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")} // При кліку: якщо dark ставимо light, інакше dark
      style={{ marginLeft: "auto" }} // Відсуває кнопку вправо
    >
      {theme === "dark" ? "Light" : "Dark"} {/* Текст кнопки: показує, на яку тему перемкне */}
    </button>
  );
}
