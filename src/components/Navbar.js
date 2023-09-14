import { useState } from "react";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Eat 'N Split</h1>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">About</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
