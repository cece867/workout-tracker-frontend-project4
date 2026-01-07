import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

// Workouts
export const getWorkouts = () => axios.get(`${API_URL}/api/workouts`);
export const getWorkout = (id) => axios.get(`${API_URL}/api/workouts/${id}`);
export const createWorkout = (workout) => axios.post(`${API_URL}/api/workouts`, workout);
export const updateWorkout = (id, workout) => axios.patch(`${API_URL}/api/workouts/${id}`, workout);
export const deleteWorkout = (id) => axios.delete(`${API_URL}/api/workouts/${id}`);

// Exercises
export const getExercises = () => axios.get(`${API_URL}/api/exercises`);
export const getExercise = (id) => axios.get(`${API_URL}/api/exercises/${id}`);
export const createExercise = (exercise) => axios.post(`${API_URL}/api/exercises`, exercise);
export const deleteExercise = (id) => axios.delete(`${API_URL}/api/exercises/${id}`);

// Records
export const getRecords = () => axios.get(`${API_URL}/api/records`);
export const createRecord = (record) => axios.post(`${API_URL}/api/records`, record);
export const deleteRecord = (id) => axios.delete(`${API_URL}/api/records/${id}`);