import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import WorkoutList from '../components/WorkoutList';
import WorkoutForm from '../components/WorkoutForm';
import { getWorkouts, createWorkout, deleteWorkout } from '../services/api';

function Home() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      setLoading(true);
      const response = await getWorkouts();
      setWorkouts(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to load workouts. Please try again.');
      console.error('Error fetching workouts:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateWorkout = async (workoutData) => {
    try {
      const response = await createWorkout(workoutData);
      setWorkouts([...workouts, response.data]);
    } catch (err) {
      setError('Failed to create workout. Please try again.');
      console.error('Error creating workout:', err);
    }
  };

  const handleDeleteWorkout = async (id) => {
    try {
      await deleteWorkout(id);
      setWorkouts(workouts.filter(workout => workout._id !== id));
    } catch (err) {
      setError('Failed to delete workout. Please try again.');
      console.error('Error deleting workout:', err);
    }
  };

  return (
    <div>
      <Navbar />
      <main className="container mt-4" role="main">
        <h1>My Workouts</h1>
        
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <WorkoutForm onSubmit={handleCreateWorkout} />

        {loading ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
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

export default Home;