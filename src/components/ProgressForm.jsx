import { useState } from "react"; // useState хук для зберігання стану даних у компоненті

export default function ProgressForm({ onAdd }) {  //onAdd,callback для додавання запису
  const today = new Date().toISOString().slice(0, 10);    // Отримуємо сьогоднішню дату у форматі YYYY-MM-DD

  const [date, setDate] = useState(today);
  const [weight, setWeight] = useState("");
  const [note, setNote] = useState("");

  function submit(e) {
    e.preventDefault();
    const w = Number(weight);
    if (!date) return;  // Якщо дата не вибрана — виходимо
    if (!w || w <= 0) return;  // Якщо вага не число або <= 0 — виходимо
    onAdd({    // Викликаємо callback і передаємо новий запис прогресу
      id: crypto.randomUUID(), // Генеруємо унікальний id для запису
      date,
      weight: +w.toFixed(1),
      note: note.trim(),
    });

    setWeight("");    // Очищаємо поле ваги після додавання
    setNote("");   // Очищаємо поле нотатки після додавання
  }

  return (
    <form onSubmit={submit} style={{ display: "grid", gap: 10, maxWidth: 420 }}>
      <input 
      type="date" 
      value={date} // При зміні записуємо нову дату в state
      onChange={(e) => setDate(e.target.value)} /> 
      <input
        value={weight}
        onChange={(e) => setWeight(e.target.value)} 
        placeholder="Weight (kg)"
        inputMode="decimal"
      />

      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Note (optional)"
      />
    
      <button type="submit">Add entry</button>
    </form>
  );
}
