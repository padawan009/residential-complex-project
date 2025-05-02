import React, { useEffect, useState } from "react";
import Test from "../Test";
import styles from "./TestCheckbox.module.css";

import { tests } from "./testData"; // файл с массивом данных и импортами картинок

function TestCheckbox() {
  const [test, setTest] = useState(0); // для индексов массива тестов
  const [isFinal, setIsFinal] = useState(false); // для отображения финальной картинки
  const [showTestComp, setShowTestComp] = useState(false); // для отображения Test.sx
  const [selectedOptions, setSelectedOptions] = useState([]); // массив выбранных опций

  const currentTest = tests[test]; // для отображения текущего теста

  useEffect(() => {
    if (isFinal) {
      setTimeout(() => {
        setShowTestComp(true);
      }, 3000);
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
      )}

      {currentTest.type === "withoutBtn" && (
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
      )}

      {currentTest.type === "withInput" && (
        <>
          <div className={styles.cardsContainer}>
            {currentTest.options.map((option) => (
              <label className={styles.cardConnect}>
                <img src={option.img} alt={option.label} />
                <p>{option.label}</p>
                <input
                  type="checkbox"
                  id={option.id}
                  onChange={() => toggleCard(option.id)}
                  checked={selectedOptions.includes(option.id)}
                />
              </label>
            ))}
          </div>
          <form
            className={styles.cardConnectFooter}
            onSubmit={(e) => {
              e.preventDefault();
              if (selectedOptions.length > 0) setIsFinal(true);
            }}
          >
            <input
              type="tel"
              required
              placeholder="+7 ___-___-__-__"
              maxLength="11"
            />
            <button className={styles.nextBtn} type="submit">
              Получить варианты
            </button>
          </form>
          <p className={styles.confident}>
            Нажимая на кнопку, вы даёте согласие на обработку персональных
            данных и соглашаетесь с <span>политикой конфиденциальности</span>
          </p>
        </>
      )}
    </div>
  );
}

export default TestCheckbox;
