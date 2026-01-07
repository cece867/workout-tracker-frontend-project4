import React from 'react';

function WorkoutList({ workouts, onDelete }) {
  if (workouts.length === 0) {
    return (
      <div className="alert alert-info" role="alert">
        <p>No workouts found. Create your first workout to get started!</p>
      </div>
    );
  }

  return (
    <div className="row">
      {workouts.map((workout) => (
        <div key={workout._id} className="col-md-6 col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{workout.name}</h5>
              <p className="card-text">
                <strong>Type:</strong> {workout.type}
              </p>
              <p className="card-text">
                <strong>Duration:</strong> {workout.duration} minutes
              </p>
              <p className="card-text">
                <strong>Date:</strong> {new Date(workout.date).toLocaleDateString()}
              </p>
              <p className="card-text">
                <strong>Status:</strong> {workout.completed ? 'Completed' : 'In Progress'}
              </p>
              {workout.notes && (
                <p className="card-text">
                  <strong>Notes:</strong> {workout.notes}
                </p>
              )}
            </div>
            <div className="card-footer">
              <button 
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(workout._id)}
                aria-label={`Delete ${workout.name} workout`}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkoutList;