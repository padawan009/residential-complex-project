import React from "react";
import styles from "./TestCheckbox.module.css"

function MultiTest({ currentTest, toggleCard, selectedOptions, handleNext}) {
  return (
    <>
      <div className={styles.cardsContainer}>
        {currentTest.options.map((option) => (
          <label
            className={`${styles.card} ${
              currentTest.box === "3" ? styles.extraStyle : ""
            }`}
          >
            <div className={styles.picBlock}>
              <img src={option.img} alt={option.label} />
              <input
                type="checkbox"
                id={option.id}
                onChange={() => toggleCard(option.id)}
                checked={selectedOptions.includes(option.id)}
              />
            </div>
            <p>{option.label}</p>
          </label>
        ))}
      </div>
      <button className={styles.nextBtn} onClick={handleNext}>
        Дальше
      </button>
    </>
  );
}

export default MultiTest;
