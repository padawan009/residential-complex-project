import React from 'react'
import styles from "./Modal.module.css"

function Form({ buttonText }) {
  return (
  <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
    <div>
        <input type="tel"
        placeholder="+7 ___-___-__-__"
        required
        style={{ width: "100%" }}/>
        <button type="submit"
        style={{ width: "100%" }}>{buttonText}</button>
        </div>
        <p className={styles.confident}>
            Нажимая на кнопку, вы даёте согласие на обработку персональных
            данных и соглашаетесь с <span>политикой конфиденциальности</span>
            </p>
        </form>
  )
}

export default Form