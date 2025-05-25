import React, { useState } from "react";
import "../assets/css/home.css"

export default function HomePage() {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Full Name:", fullName);
    console.log("Date of Birth:", dob);
  };

  return (
      <main className="main-content">
        <h2 className="main-heading">Welcome to Astro Utils</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </label>
          <label>
            Date of Birth
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </main>

     
  );
}
