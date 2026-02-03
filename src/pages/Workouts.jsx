import useLocalStorage from "../hooks/useLocalStorage";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutList from "../components/WorkoutList";

export default function Workouts() {
  const [workouts, setWorkouts] = useLocalStorage("workouts", []);

  function addWorkout(workout) {
    setWorkouts((prev) => [...prev, workout]);
  }

  function deleteWorkout(id) {
    setWorkouts((prev) => prev.filter((w) => w.id !== id));
  }

  return (
    <div>
      <h2>Workouts</h2>
      <WorkoutForm onAdd={addWorkout} />
      <WorkoutList items={workouts} onDelete={deleteWorkout} />
    </div>
  );
}