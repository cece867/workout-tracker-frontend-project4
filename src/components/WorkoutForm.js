import React, { useState } from 'react';

function WorkoutForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    type: 'strength',
    duration: '',
    notes: '',
    completed: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      date: '',
      type: 'strength',
      duration: '',
      notes: '',
      completed: false
    });
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h3 className="card-title">Add New Workout</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Workout Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-required="true"
              aria-describedby="nameHelp"
            />
            <div id="nameHelp" className="form-text">
              Give your workout a descriptive name
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date <span className="text-danger">*</span>
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="type" className="form-label">
              Workout Type <span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              aria-required="true"
            >
              <option value="strength">Strength Training</option>
              <option value="yoga">Yoga</option>
              <option value="pilates">Pilates</option>
              <option value="tai-chi">Tai Chi</option>
              <option value="stretching">Stretching</option>
              <option value="cardio">Cardio</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="duration" className="form-label">
              Duration (minutes) <span className="text-danger">*</span>
            </label>
            <input
              type="number"
              className="form-control"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              min="1"
              required
              aria-required="true"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="notes" className="form-label">
              Notes (optional)
            </label>
            <textarea
              className="form-control"
              id="notes"
              name="notes"
              rows="3"
              value={formData.notes}
              onChange={handleChange}
              aria-describedby="notesHelp"
            />
            <div id="notesHelp" className="form-text">
              Add any additional details about your workout
            </div>
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="completed"
              name="completed"
              checked={formData.completed}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="completed">
              Mark as completed
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Add Workout
          </button>
        </form>
      </div>
    </div>
  );
}

export default WorkoutForm;