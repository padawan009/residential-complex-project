import React from "react";
import styles from "./TestCheckbox.module.css"

function ParkingTest({ currentTest, setTest }) {
  return (
    <div className={styles.cardsContainer}>
      {currentTest.options.map((option) => (
        <label
          className={styles.cardParking}
          onClick={() => setTest((prev) => prev + 1)}
        >
          <p>{option.label}</p>
        </label>
      ))}
    </div>
  );
}

export default ParkingTest;
