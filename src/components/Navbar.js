import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Main navigation">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" aria-label="Workout Tracker Home">
          Workout Tracker
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation menu"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" aria-label="Go to home page">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
