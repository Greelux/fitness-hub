import { useState } from "react";

export default function WorkoutForm({ onAdd }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("strength");
  const [minutes, setMinutes] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!name.trim()) return;

    onAdd({
      id: crypto.randomUUID(),
      name: name.trim(),
      type,
      minutes: Number(minutes) || 0,
      createdAt: new Date().toISOString(),
    });

    setName("");
    setType("strength");
    setMinutes("");
  }

  return (
    <form onSubmit={submit} style={{ display: "grid", gap: 10, maxWidth: 420 }}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Workout name (e.g. Push day)"
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="strength">Strength</option>
        <option value="cardio">Cardio</option>
        <option value="mobility">Mobility</option>
      </select>

      <input
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
        placeholder="Minutes"
        inputMode="numeric"
      />

      <button type="submit">Add workout</button>
    </form>
  );
}
