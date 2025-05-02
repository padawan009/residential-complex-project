import React, { useState } from "react";
import styles from "./TestCheckbox.module.css";

import flatPic from "./images/img.png";
import pentPic from "./images/img (1).png";

import plan1 from "./images/image 216.png";
import plan2 from "./images/image 217.png";
import plan3 from "./images/image 218.png";

import square1 from "./images/2.png";
import square2 from "./images/3.png";
import square3 from "./images/31221.png";

import whatsup from "./images/telegram.png";
import telega from "./images/telegram (1).png";
import viber from "./images/telegram (2).png";

function TestCheckbox() {
  const tests = [
    {
      type: "multi",
      header: "Какая недвижимость вас интересует?",
      options: [
        { id: "flat", label: "Квартиры", img: flatPic },
        { id: "penthouse", label: "Пентхаусы", img: pentPic },
      ],
    },
    {
      type: "multi",
      box: "3",
      header: "Какая планировка вам подходит?",
      options: [
        { id: "plan1", label: "Студия", img: plan1 },
        { id: "plan2", label: "1-2 спальни", img: plan2 },
        { id: "plan3", label: "3-4 спальни", img: plan3 },
      ],
    },
    {
      type: "multi",
      box: "3",
      header: "Какую площадь объекта вы рассматриваете?",
      options: [
        { id: "square1", label: "26 м² - 100 м²", img: square1 },
        { id: "square2", label: "100 м² - 150 м²", img: square2 },
        { id: "square3", label: "150 м² - 192 м²", img: square3 },
      ],
    },
    {
      type: "withoutBtn",
      header: "Планируете ли вы использовать подземный паркинг?",
      options: [
        { id: "yes", label: "Да, планирую" },
        { id: "no", label: "Не планирую" },
      ],
    },
    {
      type: "withInput",
      header:
        "Подобрали 4 варианта недвижимости по вашим параметрам. Куда их прислать?",
      options: [
        { id: "whats", label: "в Вотсап", img: whatsup },
        { id: "telega", label: "в Телеграм", img: telega },
        { id: "viber", label: "в Вайбер", img: viber },
      ],
    },
  ];

  const [test, setTest] = useState(0); // устанавливает номер теста
  const [isFinal, setIsFinal] = useState(false);

  const currentTest = tests[test]; // для отображения текущего теста

  function handleNext() {
    if (selectedOptions.length === 0) return;
    setTest((prev) => prev + 1);
    setSelectedOptions([]);
  }

  function handleBack() {
    if (test > 0) setTest((prev) => prev - 1);
  }

  const [selectedOptions, setSelectedOptions] = useState([]);

  function toggleCard(id) {
    setSelectedOptions((prevlist) =>
      prevlist.includes(id)
        ? prevlist.filter((index) => index !== id)
        : [...prevlist, id]
    );
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
      <div>Pagination</div>
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
            <input type="tel" required placeholder="+7 ___-___-__-__" />
            <button className={styles.nextBtn} type="submit">
              Получить варианты
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default TestCheckbox;
