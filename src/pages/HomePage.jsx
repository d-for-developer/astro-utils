import React, { useState } from "react";
import "../assets/css/home.css";
import { useNavigate } from "react-router-dom";

export default function HomePage({props}) {
    const [fullName, setFullName] = useState("");
    const [dob, setDob] = useState();
    const [gender, setGender] = useState("male");
    const navigate = useNavigate();
const handleSubmit = (e)=>{
  e.preventDefault();
  
  console.log('Form submitted with:', { fullName, dob, gender });
  
  const dataToPass = {
    fullName,
    dob,
    gender,
  };

  navigate('/finalloshu', {state: dataToPass});
}
  return (
<main className="d-flex justify-content-center align-items-center">
  <div className="container" style={{ maxWidth: "500px" }}>
    <div className="card shadow-lg p-4">
      <h2 className="text-center mb-4">Welcome to Astro Utils</h2>

      <form className="needs-validation" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            value={fullName}
            name="fullName"
            className="form-control"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label className="form-label d-block">Gender</label>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              id="male"
              className="form-check-input"
              value="male"
              checked={gender === "male"}
              onChange={() => setGender("male")}
            />
            <label className="form-check-label" htmlFor="male">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              id="female"
              className="form-check-input"
              value="female"
              checked={gender === "female"}
              onChange={() => setGender("female")}
            />
            <label className="form-check-label" htmlFor="female">Female</label>
          </div>
        </div>

        {/* Date of Birth */}
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            value={dob}
            name="dob"
            className="form-control"
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  </div>
</main>



  );
}
