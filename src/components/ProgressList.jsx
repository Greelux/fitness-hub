export default function ProgressList({ items, onDelete }) {
  if (!items.length) return <p>No progress entries yet.</p>;

  return (
    <div style={{ marginTop: 16, display: "grid", gap: 10 }}>
      {items.map((e) => (
        <div
          key={e.id}
          style={{ border: "1px solid #444", borderRadius: 10, padding: 12 }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
            <div>
              <b>{e.weight} kg</b> <span style={{ opacity: 0.8 }}>{e.date}</span>
              {e.note && <div style={{ opacity: 0.85 }}>{e.note}</div>}
            </div>

            <button type="button" onClick={() => onDelete(e.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
