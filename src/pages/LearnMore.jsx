import nameNumberChart from "../assets/images/chaldean-chart.png"; // Ensure this image exist
import "../assets/css/learnmore.css"; // Create this CSS file for styling

const LearnMore = () => {
  return (
    <div className="learnmore-wrapper">
      <h1 className="learnmore-heading">Learn More</h1>

      <section className="learnmore-section">
        <h2>1. What Are Psychic and Destiny Numbers?</h2>
        <p>
          Your <strong>Psychic Number</strong> (also called Birth Number) is derived from the day of your birth (1 to 31). It reflects your inner self, instincts, and natural tendencies.
        </p>
        <p>
          Your <strong>Destiny Number</strong> is calculated by adding all digits in your full date of birth. It reveals your life path, purpose, and overall direction.
        </p>
        <p>
          <em>Example:</em> For a birthdate of 26-09-1994:
          <br />
          Psychic Number = 2 + 6 = 8<br />
          Destiny Number = 2 + 6 + 0 + 9 + 1 + 9 + 9 + 4 = 40 → 4 + 0 = 4
        </p>
      </section>

      <section className="learnmore-section">
        <h2>2. What Is a Name Number?</h2>
        <p>
          A <strong>Name Number</strong> is derived by converting each letter of your full name into a number using the Chaldean numerology system. This number reflects your public persona, social influence, and the energy your name carries.
        </p>
        <p>
          Below is the Chaldean chart used for name number calculations:
        </p>
        <img src={nameNumberChart} alt="Chaldean Numerology Chart" className="numerology-chart" />
        <p>
          <em>Example:</em> For the name <strong>SANDEEP RAWAT</strong>:
        </p>
        <ul>
          <li>S → 3</li>
          <li>A → 1</li>
          <li>N → 5</li>
          <li>D → 4</li>
          <li>E → 5</li>
          <li>E → 5</li>
          <li>P → 8</li></ul>
        <ul>
          <li>R → 2</li>
          <li>A → 1</li>
          <li>W → 6</li>
          <li>A → 1</li>
          <li>T → 4</li>
        </ul>
        <p>
          Total = 3 + 1 + 5 + 4 + 5 + 5 + 8 + 2 + 1 + 6 + 1 + 4 = <strong>45</strong> → 4 + 5 = <strong>9</strong>
        </p>
        <p>
          So, the Name Number for <strong>SANDEEP RAWAT</strong> is <strong>9</strong>.
        </p>
      </section>


      <section className="learnmore-section">
        <h2>3. What Are Angel Numbers?</h2>
        <p>
          <strong>Angel Numbers</strong> are repeating number patterns (like 111, 222, 555) that hold spiritual or energetic significance. These are believed to be messages from the universe or guardian angels, guiding you toward your life purpose.
        </p>
        <p>
          You can calculate an Angel Number by observing repeating patterns in your daily life or significant numbers in your birth and name numbers.
        </p>
        <p>
          <em>Examples:</em><br />
          111 – New beginnings and manifestation<br />
          222 – Harmony and balance<br />
          555 – Major life change or transformation
        </p>
      </section>

      <section className="learnmore-section">
        <h2>4. What Is a Lo Shu Grid?</h2>
        <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Lo Shu Grid in Numerology</h1>

          <p className="mb-4">
            In numerology, the <strong>Lo Shu Grid</strong> (also spelled <strong>Lu Shu Grid</strong>) is a
            <strong> 3x3 magic square</strong> used to analyze a person’s birth date and reveal personality
            traits, strengths, and weaknesses. It originates from ancient Chinese numerology and is a foundational
            concept in <strong>Lo Shu Numerology</strong>.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">🔲 What Is the Lo Shu Grid?</h2>
          <p className="mb-4">The Lo Shu Grid is a 3x3 square arranged like this:</p>

          <pre className="bg-gray-100 p-4 rounded mb-4">
            {`4 | 9 | 2
---------
3 | 5 | 7
---------
8 | 1 | 6`}
          </pre>

          <ul className="list-disc ml-6 mb-4">
            <li>The numbers 1 through 9 each occupy one box.</li>
            <li>Every row, column, and diagonal adds up to <strong>15</strong>.</li>
            <li>It is used to map the digits of a person's date of birth.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">🧮 How It’s Used in Numerology</h2>
          <p className="mb-4">
            To analyze someone, their <strong>full birth date</strong> (DD/MM/YYYY) is broken down into individual digits.
            These digits are then placed into the Lo Shu Grid based on the positions assigned to each number:
          </p>

          <table className="w-full text-left table-auto mb-6 border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-2 py-1">Number</th>
                <th className="border px-2 py-1">Meaning (Brief)</th>
                <th className="border px-2 py-1">Grid Position</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border px-2 py-1">1</td><td className="border px-2 py-1">Creativity, leadership</td><td className="border px-2 py-1">Bottom center</td></tr>
              <tr><td className="border px-2 py-1">2</td><td className="border px-2 py-1">Cooperation, diplomacy</td><td className="border px-2 py-1">Top right</td></tr>
              <tr><td className="border px-2 py-1">3</td><td className="border px-2 py-1">Expression, joy</td><td className="border px-2 py-1">Middle left</td></tr>
              <tr><td className="border px-2 py-1">4</td><td className="border px-2 py-1">Discipline, stability</td><td className="border px-2 py-1">Top left</td></tr>
              <tr><td className="border px-2 py-1">5</td><td className="border px-2 py-1">Balance, adaptability</td><td className="border px-2 py-1">Center</td></tr>
              <tr><td className="border px-2 py-1">6</td><td className="border px-2 py-1">Responsibility, care</td><td className="border px-2 py-1">Bottom right</td></tr>
              <tr><td className="border px-2 py-1">7</td><td className="border px-2 py-1">Knowledge, spiritualism</td><td className="border px-2 py-1">Middle right</td></tr>
              <tr><td className="border px-2 py-1">8</td><td className="border px-2 py-1">Organization, power</td><td className="border px-2 py-1">Bottom left</td></tr>
              <tr><td className="border px-2 py-1">9</td><td className="border px-2 py-1">Compassion, wisdom</td><td className="border px-2 py-1">Top center</td></tr>
            </tbody>
          </table>

          <h2 className="text-2xl font-semibold mt-6 mb-2">📌 Example: DOB 26-09-1994</h2>
          <p className="mb-4">
            Break into digits: 2, 6, 0, 9, 1, 9, 9, 4 <br />
            Remove 0 (traditionally ignored): 2, 6, 9, 1, 9, 9, 4
          </p>

          <ul className="list-disc ml-6 mb-4">
            <li>1 → bottom center</li>
            <li>2 → top right</li>
            <li>4 → top left</li>
            <li>6 → bottom right</li>
            <li>9 → top center (three times)</li>
          </ul>

          <p className="mb-4">
            You then interpret how many times each number appears:
            <ul className="list-disc ml-6">
              <li><strong>Missing numbers</strong> indicate weaknesses or karmic lessons.</li>
              <li><strong>Repeated numbers</strong> show dominant traits.</li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">🧠 Interpretation Examples</h2>
          <ul className="list-disc ml-6 mb-4">
            <li><strong>No 3s</strong>: Lack of joy/expression.</li>
            <li><strong>Multiple 9s</strong>: Highly compassionate and wise.</li>
            <li><strong>No 7s or 8s</strong>: Weak spiritual or organizational side.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-2">📚 Lines in the Grid</h2>
          <p className="mb-4">
            Some numerologists analyze <strong>lines</strong> formed by the numbers:
          </p>
          <ul className="list-disc ml-6 mb-6">
            <li><strong>1-2-3</strong> (Bottom Row): Physical Plane</li>
            <li><strong>4-5-6</strong> (Middle Row): Mental Plane</li>
            <li><strong>7-8-9</strong> (Top Row): Emotional Plane</li>
          </ul>
        </div>
      </section>

      <section className="learnmore-section">
        <h2>5. How Can You Improve Your Lo Shu Grid?</h2>
        <p>
          You can improve your <strong>Lo Shu Grid</strong> by making minor changes to your full name. By adjusting the spelling or structure of your name, you can introduce missing numbers into your grid to balance your energy and align better with your goals.
        </p>
        <p>
          This process is often done with the help of a numerologist to ensure the new name harmonizes with your birth numbers and intended life path.
        </p>
      </section>
    </div>
  );
};

export default LearnMore;