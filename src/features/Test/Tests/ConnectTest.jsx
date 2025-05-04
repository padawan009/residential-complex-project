import React from "react";
import styles from "./TestCheckbox.module.css";

function ConnectTest({ currentTest, toggleCard, selectedOptions, setIsFinal}) {
  return (
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
        Нажимая на кнопку, вы даёте согласие на обработку персональных данных и
        соглашаетесь с <span>политикой конфиденциальности</span>
      </p>
    </>
  );
}

export default ConnectTest;
