import React, { useState } from "react";
import styles from "./Modal.module.css";

function Form({ buttonText }) {
  const [phone, setPhone] = useState(null);
  const [error, setError] = useState(null);

  const handleInput = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, ""); 
    if (digitsOnly.length <= 11) {
      setPhone(digitsOnly);
      // setError(null); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone === "") {
      setError("Поле не должно быть пустым");
      return;
    }

    if (phone.length < 11) {
      setError("Введите 11 цифр номера");
      return;
    }
    
    setError("");
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div>
        <input
          type="tel"
          placeholder="Введите номер телефона"
          value={phone}
          onChange={handleInput}
          required
          style={{ width: "100%", borderColor: error ? "red" : "" }}
        />
        <button type="submit" style={{ width: "100%" }}>
          {buttonText}
        </button>
        {error && <p style={{ color: "red", backgroundColor: "transparent", padding: "5px 0px 0px" }}>{error}</p>}
      </div>
      <p className={styles.confident}>
        Нажимая на кнопку, вы даёте согласие на обработку персональных данных и
        соглашаетесь с <span>политикой конфиденциальности</span>
      </p>
    </form>
  );
}

export default Form;
