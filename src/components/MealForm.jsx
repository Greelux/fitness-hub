import { useState } from "react";

export default function MealForm({ onAdd }) {
  const [name, setName] = useState(""); // Стан назви страви
  const [type, setType] = useState("breakfast"); // Стан типу прийому їжі
  const [kcal, setKcal] = useState(""); // Стан калорій
  const [p, setP] = useState(""); // Стан білків
  const [f, setF] = useState(""); // Стан жирів
  const [c, setC] = useState(""); // Стан вуглеводів

  function submit(e) {  
    e.preventDefault();  // Забороняємо перезавантаження сторінки
    if (!name.trim()) return;  // Якщо назва порожня return 0
    onAdd({
      id: crypto.randomUUID(),   // Генеруємо унікальний id
      name: name.trim(),  // Зберігаємо назву без зайвих пробілів
      type,
      kcal: Number(kcal) || 0,
      p: Number(p) || 0,
      f: Number(f) || 0,
      c: Number(c) || 0,
      createdAt: new Date().toISOString(),
    });

    setName(""); // Очищаємо поле назви після додавання
    setType("breakfast"); // Повертаємо тип до breakfast
    setKcal(""); // Очищаємо калорії
    setP(""); // Очищаємо білки
    setF(""); // Очищаємо жири
    setC(""); // Очищаємо вуглеводи
  }

  return (
    <form onSubmit={submit} style={{ display: "grid", gap: 10, maxWidth: 520 }}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Meal name (e.g. Oatmeal)"
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="snack">Snack</option>
      </select>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <input value={kcal} onChange={(e) => setKcal(e.target.value)} placeholder="kcal" inputMode="numeric" />
        <input value={p} onChange={(e) => setP(e.target.value)} placeholder="P" inputMode="numeric" />
        <input value={f} onChange={(e) => setF(e.target.value)} placeholder="F" inputMode="numeric" />
        <input value={c} onChange={(e) => setC(e.target.value)} placeholder="C" inputMode="numeric" />
      </div>

      <button type="submit">Add meal</button>
    </form>
  );
}
