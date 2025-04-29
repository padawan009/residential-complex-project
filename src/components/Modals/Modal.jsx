
import React from "react"
import styles from "./Modal.module.css"

function Modal({ imgSrc, headerText, backgroundColor, buttonText, closeModal }) {
  return (
    <div className={styles.modShadow} onClick={closeModal}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.picContainer}>
          <img src={imgSrc} style={{ backgroundColor: backgroundColor }} alt="pic of modal" />
        </div>
        <div className={styles.textContainer}>
          <h5>{headerText}</h5>
          <p className={styles.textP}>PDF, можно скачать прямо сейчас</p>
          <hr />
          <form className={styles.formContainer} onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="tel"
                placeholder="+7 ___-___-__-__"
                required/>
                <button type="submit">{buttonText}</button>
              </div>
              <p className={styles.confident}>Нажимая на кнопку, вы даёте согласие на обработку персональных
                данных и соглашаетесь с 
                <span>политикой конфиденциальности</span>
              </p>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Modal