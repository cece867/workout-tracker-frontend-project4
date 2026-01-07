import axios from "axios"; // react talks to backend...react-express and receives response back

const API_URL = "http://localhost:5001/api/workouts";

export const getWorkouts = () => axios.get(API_URL);
export const createWorkout = (workout) => axios.post(API_URL, workout);
export const deleteWorkout = (id) => axios.delete(`${API_URL}/${id}`);
