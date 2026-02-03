export default function WorkoutList({ items, onDelete }) {
  if (!items.length) return <p>No workouts yet.</p>;

  return (
    <div style={{ marginTop: 16, display: "grid", gap: 10 }}>
      {items.map((w) => (
        <div
          key={w.id}
          style={{ border: "1px solid #444", borderRadius: 10, padding: 12 }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
            <div>
              <b>{w.name}</b>
              <div style={{ opacity: 0.8 }}>
                {w.type} • {w.minutes} min
              </div>
            </div>

            <button type="button" onClick={() => onDelete(w.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
