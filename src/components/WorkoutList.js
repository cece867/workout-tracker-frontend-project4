import React from "react";

export default function WorkoutList({ workouts, onDelete }) {
  if (!workouts || workouts.length === 0) {
    return <p className="text-muted">No workouts yet. Add one above.</p>;
  }

  return (
    <div className="row g-3">
      {workouts.map((w) => (
        <div className="col-md-6" key={w._id}>
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">{w.name}</h5>

              <p className="mb-1">
                <strong>Date:</strong> {w.date}
              </p>

              {/* ✅ ADDED — duration */}
              <p className="mb-1">
                <strong>Duration:</strong> {w.duration} minutes
              </p>

              {w.time && (
                <p className="mb-2">
                  <strong>Time:</strong> {w.time}
                </p>
              )}

              {w.notes && (
                <p className="card-text">
                  <strong>Comments:</strong> {w.notes}
                </p>
              )}

              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => onDelete(w._id)}
                aria-label={`Delete workout ${w.name}`}
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
