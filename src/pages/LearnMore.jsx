import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import nameNumberChart from "../assets/images/chaldean-chart.png";

const LearnMore = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={10}>
          <h1 className="fw-bold text-center mb-5">Learn More</h1>

          {/* 1. Psychic & Destiny Numbers */}
          <section className="mb-5">
            <h2 className="fw-semibold mb-3">1. What Are Psychic and Destiny Numbers?</h2>
            <p>
              Your <strong>Psychic Number</strong> (also called Birth Number) is derived from the day of your birth (1 to 31). 
              It reflects your inner self, instincts, and natural tendencies.
            </p>
            <p>
              Your <strong>Destiny Number</strong> is calculated by adding all digits in your full date of birth. 
              It reveals your life path, purpose, and overall direction.
            </p>
            <p>
              <em>Example:</em> For a birthdate of 26-09-1994:
              <br />
              Psychic Number = 2 + 6 = 8<br />
              Destiny Number = 2 + 6 + 0 + 9 + 1 + 9 + 9 + 4 = 40 → 4 + 0 = 4
            </p>
          </section>

          {/* 2. Name Number */}
          <section className="mb-5">
            <h2 className="fw-semibold mb-3">2. What Is a Name Number?</h2>
            <p>
              A <strong>Name Number</strong> is derived by converting each letter of your full name into a number 
              using the Chaldean numerology system. This number reflects your public persona, social influence, 
              and the energy your name carries.
            </p>
            <p>Below is the Chaldean chart used for name number calculations:</p>
            <Image src={nameNumberChart} alt="Chaldean Numerology Chart" fluid className="mb-3 border" />
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
              <li>P → 8</li>
            </ul>
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

          {/* 3. Angel Numbers */}
          <section className="mb-5">
            <h2 className="fw-semibold mb-3">3. What Are Angel Numbers?</h2>
            <p>
              <strong>Angel Numbers</strong> are repeating number patterns (like 111, 222, 555) that hold spiritual or energetic significance. 
              These are believed to be messages from the universe or guardian angels, guiding you toward your life purpose.
            </p>
            <p>
              You can calculate an Angel Number by observing repeating patterns in your daily life or significant numbers 
              in your birth and name numbers.
            </p>
            <p>
              <em>Examples:</em><br />
              111 – New beginnings and manifestation<br />
              222 – Harmony and balance<br />
              555 – Major life change or transformation
            </p>
          </section>

          {/* 4. Lo Shu Grid */}
          <section className="mb-5">
            <h2 className="fw-semibold mb-3">4. What Is a Lo Shu Grid?</h2>
            <p>
              In numerology, the <strong>Lo Shu Grid</strong> (also spelled <strong>Lu Shu Grid</strong>) is a 
              <strong> 3x3 magic square</strong> used to analyze a person’s birth date and reveal personality traits, strengths, and weaknesses.
            </p>
            <pre className="bg-light p-3 rounded mb-3">
{`4 | 9 | 2
---------
3 | 5 | 7
---------
8 | 1 | 6`}
            </pre>
            <ul>
              <li>The numbers 1 through 9 each occupy one box.</li>
              <li>Every row, column, and diagonal adds up to <strong>15</strong>.</li>
              <li>It is used to map the digits of a person's date of birth.</li>
            </ul>

            <Table bordered striped hover className="mt-4">
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Meaning (Brief)</th>
                  <th>Grid Position</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>Creativity, leadership</td><td>Bottom center</td></tr>
                <tr><td>2</td><td>Cooperation, diplomacy</td><td>Top right</td></tr>
                <tr><td>3</td><td>Expression, joy</td><td>Middle left</td></tr>
                <tr><td>4</td><td>Discipline, stability</td><td>Top left</td></tr>
                <tr><td>5</td><td>Balance, adaptability</td><td>Center</td></tr>
                <tr><td>6</td><td>Responsibility, care</td><td>Bottom right</td></tr>
                <tr><td>7</td><td>Knowledge, spiritualism</td><td>Middle right</td></tr>
                <tr><td>8</td><td>Organization, power</td><td>Bottom left</td></tr>
                <tr><td>9</td><td>Compassion, wisdom</td><td>Top center</td></tr>
              </tbody>
            </Table>
          </section>

          {/* 5. Improve Lo Shu Grid */}
          <section>
            <h2 className="fw-semibold mb-3">5. How Can You Improve Your Lo Shu Grid?</h2>
            <p>
              You can improve your <strong>Lo Shu Grid</strong> by making minor changes to your full name. 
              By adjusting the spelling or structure of your name, you can introduce missing numbers into your grid 
              to balance your energy and align better with your goals.
            </p>
            <p>
              This process is often done with the help of a numerologist to ensure the new name harmonizes 
              with your birth numbers and intended life path.
            </p>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default LearnMore;
