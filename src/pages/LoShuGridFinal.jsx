/* eslint-disable */

import React, { useEffect, useState } from "react";
import '../assets/css/LoShuGridFinal.css'
import { useLocation, NavLink} from "react-router-dom";

const LoShuGridFinal = () => {
    
const location = useLocation();
  
  console.log('Location state:', location.state);
  
  const {
    fullName,
    dob,
    gender,
  } = location.state || {};


    const [psychic, setPsychic] = useState();
    const [destiny, setDestiny] = useState();
    const [nameNumber, setNameNumber] = useState();
    const [angelNumber, setAngelNumber] = useState();
    const [loshuNumber, setLoshuNumber] = useState({
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
    });

  const reduceToSingleDigit = (value) => {
    while (value > 9) {
      value = value && value
        .toString()
        .split("")
        .reduce((a, b) => a + Number(b), 0);
    }
    return Number(value);
  };

  useEffect(()=>{
    console.log('useEffect triggered');
    console.log('Data received:', { fullName, dob, gender });
    
    if (!fullName || !dob || !gender) {
      return;
    }
    
    console.log('All data present, proceeding with calculations...');
    
    const [yyyy, mm, dd] = dob.split("-");

    const reducedDD = reduceToSingleDigit(Number(dd));
    const reducedMM = reduceToSingleDigit(Number(mm));
    const reducedYYYY = reduceToSingleDigit(Number(yyyy));

    // Destiny Number
    const destinyTotal = reduceToSingleDigit(reducedDD + reducedMM + reducedYYYY);

    // Angel Number
    const calculatedAngel = gender === "male" ? 11-reducedYYYY : 9-reducedYYYY;

    // Name Number
    const charValues = {
      a: 1, i: 1, j: 1, q: 1, y: 1,
      b: 2, k: 2, r: 2,
      c: 3, g: 3, l: 3, s: 3,
      d: 4, m: 4, t: 4,
      e: 5, h: 5, n: 5, x: 5,
      u: 6, v: 6, w: 6,
      o: 7, z: 7,
      f: 8, p: 8,
    };

    let nameTotal = 0;
    const updatedLoshu = { ...loshuNumber };

    for (const char of fullName.toLowerCase()) {
      const value = charValues[char];
      if (value) {
        console.log(value, nameTotal)
        nameTotal += value;
        updatedLoshu[value] += 1;
      }
    }

    const nameNumberTotal = reduceToSingleDigit(nameTotal);

    // Add counts to loshu grid
    updatedLoshu[reducedDD]++;
    updatedLoshu[destinyTotal]++;
    updatedLoshu[nameNumberTotal]++;
    updatedLoshu[calculatedAngel]++;
    
    // Add individual date digits
    updatedLoshu[dd[0]]++;
    updatedLoshu[dd[1]]++;
    updatedLoshu[mm[0]]++;
    updatedLoshu[mm[1]]++;
    updatedLoshu[yyyy[0]]++;
    updatedLoshu[yyyy[1]]++;
    updatedLoshu[yyyy[2]]++;
    updatedLoshu[yyyy[3]]++;
    // Update all state
    setPsychic(reducedDD);
    setDestiny(destinyTotal);
    setNameNumber(nameNumberTotal);
    setAngelNumber(calculatedAngel);
    setLoshuNumber(updatedLoshu);

    console.log("Calculations completed:", {
      psychic: reducedDD,
      destiny: destinyTotal,
      nameNumber: nameNumberTotal,
      angel: calculatedAngel
    });
    
},[fullName,dob,gender]);

// helper (anywhere in the file)
function getFrequencyStats(loshuNumber = {}) {
  // Step 1: Convert to array and filter only existing numbers (>0 count)
  const entries = Object.entries(loshuNumber)
    .map(([k, v]) => [Number(k), Number(v)])
    .filter(([_, v]) => v > 0);

  if (entries.length === 0) {
    return {
      highest: { numbers: [], count: 0 },
      medium: { numbers: [], count: 0 },
      lowest: { numbers: [], count: 0 }
    };
  }

  // Step 2: Extract counts
  const counts = entries.map(([_, v]) => v);

  // Step 3: Find min, max, and medium counts
  const minCount = Math.min(...counts);
  const maxCount = Math.max(...counts);
  const uniqueCounts = [...new Set(counts)].sort((a, b) => a - b);
  const mediumCount =
    uniqueCounts.length >= 3
      ? uniqueCounts[Math.floor(uniqueCounts.length / 2)]
      : null;

  // Step 4: Build results
  const highest = {
    numbers: entries.filter(([_, v]) => v === maxCount).map(([k]) => k),
    count: maxCount
  };

  const lowest = {
    numbers: entries.filter(([_, v]) => v === minCount).map(([k]) => k),
    count: minCount
  };

  const medium = mediumCount
    ? {
        numbers: entries
          .filter(([_, v]) => v === mediumCount)
          .map(([k]) => k),
        count: mediumCount
      }
    : { numbers: [], count: 0 };

  return { highest, medium, lowest };
}

const { highest, medium, lowest } = getFrequencyStats(loshuNumber);

function getMissingNumbers(loshuNumber = {}) {
  const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const missing = allNumbers.filter(
    (num) => !loshuNumber[num] || loshuNumber[num] === 0
  );

  return missing;
}

const missingNumbers = getMissingNumbers(loshuNumber);


  return (

<div className="container my-4" style={{ maxWidth: "800px" }}>
{/* Tab Navigation */}
<ul className="nav nav-pills justify-content-center mb-3 shadow-sm rounded overflow-hidden" id="loshuTab" role="tablist">
  <li className="nav-item flex-fill" role="presentation">
    <button
      className="nav-link active w-100 py-2 fw-bold"
      id="grid-tab"
      data-bs-toggle="tab"
      data-bs-target="#grid"
      type="button"
      role="tab"
      aria-controls="grid"
      aria-selected="true"
    >
      LO SHU GRID
    </button>
  </li>
  <li className="nav-item flex-fill" role="presentation">
    <button
      className="nav-link w-100 py-2 fw-bold"
      id="details-tab"
      data-bs-toggle="tab"
      data-bs-target="#details"
      type="button"
      role="tab"
      aria-controls="details"
      aria-selected="false"
    >
      Details
    </button>
  </li>
</ul>

<div className="mt-4">
  <div className="card shadow-lg border-0 w-100">
    <div className="card-body text-center px-3 px-md-4">
      <h5 className="card-title mb-3">User Details</h5>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
        {/* Name */}
        <p className="mb-2 mb-md-0 me-md-3">
          <strong>Name:</strong> <span className="fw-normal">{fullName}</span>
        </p>

        {/* Gender - centered on mobile */}
        <p className="mb-2 mb-md-0 mx-md-3 text-center flex-grow-1">
          <strong>Gender:</strong> <span className="fw-normal">{gender.toUpperCase()}</span>
        </p>

        {/* DOB */}
        <p className="mb-2 mb-md-0 ms-md-3">
          <strong>DOB:</strong> <span className="fw-normal">{dob}</span>
        </p>
      </div>
    </div>
  </div>
</div>




  {/* Tab Content */}
  <div className="tab-content mt-3" id="loshuTabContent">
    {/* Tab 1: Loshu Grid */}
    <div
      className="tab-pane fade show active"
      id="grid"
      role="tabpanel"
      aria-labelledby="grid-tab"
    >
      <span className="text-center d-block mb-3  mt-4">
        Click on each cell to view more in detail
      </span>
      <div className="card shadow-lg p-3">
        <div className="row g-2 text-center">
          {/* Column 1 */}
          <div className="col-4">
            <div className="border bg-light p-3 rounded">
              {
                loshuNumber[4] ? (
                  <NavLink to="/NumerologyFour" className="text-decoration-none text-dark">
                    {'4'.repeat(loshuNumber[4])}
                  </NavLink>
                ) : (
                  '-'
                )
              }
              </div>
            <div className="border bg-light p-3 rounded mt-2">
                {
                loshuNumber[3] ? (
                  <NavLink to="/NumerologyThree" className="text-decoration-none text-dark">
                    {'3'.repeat(loshuNumber[3])}
                  </NavLink>
                ) : (
                  '-'
                )
              }
            </div>
            <div className="border bg-light p-3 rounded mt-2">
              {
                loshuNumber[8] ? (
                  <NavLink to="/NumerologyEight" className="text-decoration-none text-dark">
                    {'8'.repeat(loshuNumber[8])}
                  </NavLink>
                ) : (
                  '-'
                )
              }
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-4">
            <div className="border bg-light p-3 rounded">
              {
                loshuNumber[9] ? (
                  <NavLink to="/NumerologyNine" className="text-decoration-none text-dark">
                    {'9'.repeat(loshuNumber[9])}
                  </NavLink>
                ) : (
                  '-'
                )
              }
            </div>
            <div className="border bg-light p-3 rounded mt-2">
              {
                loshuNumber[5] ? (
                  <NavLink to="/NumerologyFive" className="text-decoration-none text-dark">
                    {'5'.repeat(loshuNumber[5])}
                  </NavLink>
                ) : (
                  '-'
                )
              }
            </div>
            <div className="border bg-light p-3 rounded mt-2">
              {
                loshuNumber[1] ? (
                  <NavLink to="/NumerologyOne" className="text-decoration-none text-dark">
                    {'1'.repeat(loshuNumber[1])}
                  </NavLink>
                ) : (
                  '-'
                )
              }
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-4">
            <div className="border bg-light p-3 rounded">
                {
                loshuNumber[2] ? (
                  <NavLink to="/NumerologyTwo" className="text-decoration-none text-dark">
                    {'2'.repeat(loshuNumber[2])}
                  </NavLink>
                ) : (
                  '-'
                )
              }
            </div>
            <div className="border bg-light p-3 rounded mt-2">
                {
                loshuNumber[7] ? (
                  <NavLink to="/NumerologySeven" className="text-decoration-none text-dark">
                    {'7'.repeat(loshuNumber[7])}
                  </NavLink>
                ) : (
                  '-'
                )
              }
            </div>
            <div className="border bg-light p-3 rounded mt-2">
              {
                loshuNumber[6] ? (
                  <NavLink to="/NumerologySix" className="text-decoration-none text-dark">
                    {'6'.repeat(loshuNumber[6])}
                  </NavLink>
                ) : (
                  '-'
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Tab 2: Details */}
    <div
      className="tab-pane fade"
      id="details"
      role="tabpanel"
      aria-labelledby="details-tab"
    >
      <span className="text-center d-block mb-3 mt-4">
        Click on each cell to view more in detail
      </span>
      <div className="card shadow-lg p-3">
        <div className="row g-2 text-center">
          {/* Row 1 */}
          <div className="col-6 col-md-3">
            <div className="border bg-light p-3 rounded">
              <b>Psychic Number : </b>{psychic}
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="border bg-light p-3 rounded">
              <b>Destiny Number : </b>{destiny}
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="border bg-light p-3 rounded">
              <b>Name Number : </b>{nameNumber}
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="border bg-light p-3 rounded">
              <b>Angel Number : </b>{angelNumber}
            </div>
          </div>

          {/* Row 2 */}
          <div className="col-6 col-md-3">
            <div className="border bg-light p-3 rounded">
               <b>Highest Frequency: </b>{highest.numbers.join(", ") || "—"}
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="border bg-light p-3 rounded">
              <b>Medium Frequency: </b>{medium.numbers.join(", ") || "—"}
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="border bg-light p-3 rounded">
             <b>Low Frequency: </b>{lowest.numbers.join(", ") || "—"}
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="border bg-light p-3 rounded">
             <b>Missing Numbers: </b>{missingNumbers.length ? missingNumbers.join(", ") : "—"}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</div>


  );
};

export default LoShuGridFinal;