export default function MealList({ items, onDelete }) {
  if (!items.length) return <p>No meals yet.</p>;

  return (
    <div style={{ marginTop: 16, display: "grid", gap: 10 }}>
      {items.map((m) => (
        <div
          key={m.id}
          style={{ border: "1px solid #444", borderRadius: 10, padding: 12 }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
            <div>
              <b>{m.name}</b> <span style={{ opacity: 0.75 }}>({m.type})</span>
              <div style={{ opacity: 0.85 }}>
                {m.kcal} kcal • P {m.p} • F {m.f} • C {m.c}
              </div>
            </div>

            <button type="button" onClick={() => onDelete(m.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
