import { useMemo, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import MealForm from "../components/MealForm";
import MealList from "../components/MealList";

export default function Nutrition() {
  const [meals, setMeals] = useLocalStorage("meals", []);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("all");

  function addMeal(meal) {
    setMeals((prev) => [...prev, meal]);
  }

  function deleteMeal(id) {
    setMeals((prev) => prev.filter((m) => m.id !== id));
  }

  const filteredMeals = useMemo(() => {
    const q = query.trim().toLowerCase();
    return meals.filter((m) => {
      const okText = !q || m.name.toLowerCase().includes(q);
      const okType = mealType === "all" || m.type === mealType;
      return okText && okType;
    });
  }, [meals, query, mealType]);

  const totals = useMemo(() => {
    return filteredMeals.reduce(
      (acc, m) => {
        acc.kcal += m.kcal;
        acc.p += m.p;
        acc.f += m.f;
        acc.c += m.c;
        return acc;
      },
      { kcal: 0, p: 0, f: 0, c: 0 }
    );
  }, [filteredMeals]);

  return (
    <div>
      <h2>Nutrition</h2>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search meal..."
        />

        <select value={mealType} onChange={(e) => setMealType(e.target.value)}>
          <option value="all">All</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snack">Snack</option>
        </select>
      </div>

      <div style={{ marginBottom: 12, opacity: 0.9 }}>
        <b>Totals:</b> {totals.kcal} kcal • P {totals.p} • F {totals.f} • C {totals.c}
      </div>

      <MealForm onAdd={addMeal} />
      <MealList items={filteredMeals} onDelete={deleteMeal} />
    </div>
  );
}
