import React, { useEffect, useState } from "react";
import '../assets/css/LoShuGridFinal.css'
import { useLocation } from "react-router-dom";
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


  return (
    <div className="main-container">
      <div>
        <h5 className="grid">{loshuNumber[4]?'4'.repeat(loshuNumber[4]):'-'}</h5>
        <h5 className="grid">{loshuNumber[3]?'3'.repeat(loshuNumber[3]):'-'}</h5>
        <h5 className="grid">{loshuNumber[8]?'8'.repeat(loshuNumber[8]):'-'}</h5>
      </div>
      <div>
        <h5 className="grid">{loshuNumber[9]?'9'.repeat(loshuNumber[9]):'-'}</h5>
        <h5 className="grid">{loshuNumber[5]?'5'.repeat(loshuNumber[5]):'-'}</h5>
        <h5 className="grid">{loshuNumber[1]?'1'.repeat(loshuNumber[1]):'-'}</h5>
      </div>
      <div>
        <h5 className="grid">{loshuNumber[2]?'2'.repeat(loshuNumber[2]):'-'}</h5>
        <h5 className="grid">{loshuNumber[7]?'7'.repeat(loshuNumber[7]):'-'}</h5>
        <h5 className="grid">{loshuNumber[6]?'6'.repeat(loshuNumber[6]):'-'}</h5>
      </div>
    </div>
  );
};

export default LoShuGridFinal;