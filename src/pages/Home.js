import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import WorkoutList from "../components/WorkoutList";
import WorkoutForm from "../components/WorkoutForm";
import { getWorkouts, createWorkout, deleteWorkout } from "../services/api";

export default function Home() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchWorkouts = async () => {
    try {
      setError("");
      setLoading(true);
      const { data } = await getWorkouts();
      setWorkouts(data);
    } catch (err) {
      console.error("Error fetching workouts:", err);
      setError("Failed to load workouts. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const handleCreateWorkout = async (workoutData) => {
    try {
      setError("");
      const { data } = await createWorkout(workoutData);
      setWorkouts((prev) => [data, ...prev]); // put newest first
    } catch (err) {
      console.error("Error creating workout:", err);
      setError("Failed to create workout. Please try again.");
    }
  };

  const handleDeleteWorkout = async (id) => {
    try {
      setError("");
      await deleteWorkout(id);
      setWorkouts((prev) => prev.filter((w) => w._id !== id));
    } catch (err) {
      console.error("Error deleting workout:", err);
      setError("Failed to delete workout. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />

      <main className="container mt-4" role="main">
        <h1 className="mb-3">My Workouts</h1>

        {error && (
          <div className="alert alert-danger" role="alert" aria-live="assertive">
            {error}
          </div>
        )}

        <WorkoutForm onSubmit={handleCreateWorkout} />

        {loading ? (
          <div className="text-center mt-4" aria-busy="true" aria-live="polite">
            <div className="spinner-border" role="status" aria-label="Loading workouts">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <WorkoutList workouts={workouts} onDelete={handleDeleteWorkout} />
        )}
      </main>
    </div>
  );
}
