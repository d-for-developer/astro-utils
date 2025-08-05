import react, { useEffect } from "react";
import { useState } from "react";

export default useFetch = () => {
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
      value = value
        .toString()
        .split("")
        .reduce((a, b) => a + Number(b), 0);
    }
    return Number(value);
  };

  useEffect(() => {
    e.preventDefault();
    const [yyyy, mm, dd] = dob.split("-").map(String);

    const reducedDD = reduceToSingleDigit(dd);
    const reducedMM = reduceToSingleDigit(mm);
    const reducedYYYY = reduceToSingleDigit(yyyy);

    // Destiny Number
    const destinyTotal = reduceToSingleDigit(
      reducedDD + reducedMM + reducedYYYY
    );

    // Angel Number
    if (gender === "male") {
      setAngelNumber(11 - reducedYYYY);
    } else {
      setAngelNumber(9 - reducedYYYY);
    }

    // Name Number
    const charValues = {
      a: 1,
      i: 1,
      j: 1,
      q: 1,
      y: 1,
      b: 2,
      k: 2,
      r: 2,
      c: 3,
      g: 3,
      l: 3,
      s: 3,
      d: 4,
      m: 4,
      t: 4,
      e: 5,
      h: 5,
      n: 5,
      x: 5,
      u: 6,
      v: 6,
      w: 6,
      o: 7,
      z: 7,
      f: 8,
      p: 8,
    };

    let nameTotal = 0;
    const updatedLoshu = { ...loshuNumber };

    for (const char of fullName.toLowerCase()) {
      const value = charValues[char];
      if (value) {
        nameTotal += value;
        updatedLoshu[value] += 1;
      }
    }

    const nameNumberTotal = reduceToSingleDigit(nameTotal);

    updatedLoshu[psychic]++;
    updatedLoshu[destinyTotal]++;
    updatedLoshu[nameNumberTotal]++;
    updatedLoshu[angelNumber]++;
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
    setLoshuNumber(updatedLoshu);

    // Log updated values
    console.log("Full Name:", fullName);
    console.log("Date of Birth:", dob);
    console.log("Psychic Number:", psychic);
    console.log("Destiny Number:", destiny);
    console.log("Name Number:", nameNumber);
    console.log("Angel Number: ", angelNumber);
    console.log("Loshu Numbers:", updatedLoshu);
  }, []);

  return {};
};
