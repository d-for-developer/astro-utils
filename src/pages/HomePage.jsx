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
    <main className="main-content">
      <h2 className="main-heading">Welcome to Astro Utils</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Full Name
          <input
            type="text"
            value={fullName}
            name={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
        <div className="radio"><input
          type="radio"
          id="male"
          className="inputRadio"
          value="male"
          checked={gender === "male"}
          onChange={() => setGender("male")}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          id="female"
          className="inputRadio"
          value="female"
          checked={gender === "female"}
          onChange={() => setGender("female")}
        />
        <label htmlFor="female">Female</label></div>
        <label>
          Date of Birth
          <input
            type="date"
            value={dob}
            name={fullName}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
