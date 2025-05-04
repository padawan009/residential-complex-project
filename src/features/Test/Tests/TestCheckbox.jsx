import React, { useEffect, useState } from "react";
import Test from "../Test";
import styles from "./TestCheckbox.module.css";

import { tests } from "./testData"; // файл с массивом данных и импортами картинок
import MultiTest from "./MultiTest";
import ParkingTest from "./ParkingTest";
import ConnectTest from "./ConnectTest";

function TestCheckbox() {
  const [test, setTest] = useState(0); // для индексов массива тестов
  const [isFinal, setIsFinal] = useState(false); // для отображения финальной картинки
  const [showTestComp, setShowTestComp] = useState(false); // для отображения Test.jsx
  const [selectedOptions, setSelectedOptions] = useState([]); // массив выбранных опций

  const currentTest = tests[test]; // для отображения текущего теста

  useEffect(() => {
    if (isFinal) {
      setTimeout(() => {
        setShowTestComp(true);
      }, 2000);
    }
  }, [isFinal]);

  function handleNext() {
    if (selectedOptions.length === 0) return;
    setTest((prev) => prev + 1);
    setSelectedOptions([]);
  }

  function handleBack() {
    if (test > 0) setTest((prev) => prev - 1);
  }

  function toggleCard(id) {
    setSelectedOptions((prevlist) =>
      prevlist.includes(id)
        ? prevlist.filter((index) => index !== id)
        : [...prevlist, id]
    );
  }

  if (showTestComp) {
    return <Test />;
  }

  if (isFinal) {
    return (
      <div className={styles.testContainer}>
        <h1 className={styles.finalHeader}>Мы скоро свяжемся с вами!</h1>
      </div>
    );
  }

  return (
    <div className={styles.testContainer}>
      <button className={styles.backBtn} onClick={handleBack}>
        &#8592; Назад
      </button>
      <div className={styles.paginationContainer}>
        <span className={`${styles.line} ${test >= 0 ? styles.activeLine : ""}`}></span>
        <span className={`${styles.line} ${test >= 1 ? styles.activeLine : ""}`}></span>
        <span className={`${styles.line} ${test >= 2 ? styles.activeLine : ""}`}></span>
        <span className={`${styles.line} ${test >= 3 ? styles.activeLine : ""}`}></span>
      </div>
      <h1>{currentTest.header}</h1>

      {currentTest.type === "multi" && (
        < MultiTest 
        currentTest={currentTest}
        toggleCard={toggleCard}
        selectedOptions={selectedOptions}
        handleNext={handleNext}
        />
      )}

      {currentTest.type === "parking" && (
        <ParkingTest 
        currentTest={currentTest}
        setTest={setTest} 
        />
      )}

      {currentTest.type === "connection" && (
        <ConnectTest 
        currentTest={currentTest}
        toggleCard={toggleCard}
        selectedOptions={selectedOptions}
        setIsFinal={setIsFinal} 
        />
      )}
    </div>
  )
}

export default TestCheckbox;
