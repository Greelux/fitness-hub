import { useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import ProgressForm from "../components/ProgressForm";
import ProgressList from "../components/ProgressList";

export default function ProgressPage() {
  const [entries, setEntries] = useLocalStorage("progress", []);

  function addEntry(entry) {
    setEntries((prev) => [entry, ...prev]);
  }

  function deleteEntry(id) {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }

  const stats = useMemo(() => {
    if (entries.length === 0) return { last: null, diff: null };

    const sorted = [...entries].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    const last = sorted[sorted.length - 1];
    const prev = sorted.length >= 2 ? sorted[sorted.length - 2] : null;
    const diff = prev ? +(last.weight - prev.weight).toFixed(1) : null;

    return { last, diff };
  }, [entries]);

  return (
    <div>
      <h2>Progress</h2>

      <div style={{ marginBottom: 12, opacity: 0.9 }}>
        <b>Last:</b>{" "}
        {stats.last ? `${stats.last.weight} kg (${stats.last.date})` : "—"}{" "}
        <b>Diff:</b>{" "}
        {stats.diff === null ? "—" : `${stats.diff > 0 ? "+" : ""}${stats.diff} kg`}
      </div>

      <ProgressForm onAdd={addEntry} />
      <ProgressList items={entries} onDelete={deleteEntry} />
    </div>
  );
}
