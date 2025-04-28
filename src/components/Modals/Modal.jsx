
import React, { useState } from 'react'
import styles from "./Modal.module.css"

function Modal({ imgSrc, headerText, backgroundColor, buttonText }) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.picContainer}>
        <img src={imgSrc} style={{ backgroundColor: backgroundColor }} alt="pic of modal" />
      </div>
      <div className={styles.textContainer}>
        <h5>{headerText}</h5>
        <p className={styles.textP}>PDF, можно скачать прямо сейчас</p>
        <hr />
          <form className={styles.formContainer} action="">
            <div>
              <input type="tel"
              placeholder="+7 ___-___-__-__"
              required/>
              <button type="button">{buttonText}</button>
            </div>
            <p>Нажимая на кнопку, вы даёте согласие на обработку персональных
              данных и соглашаетесь с 
              <span className={styles.secondSpan}>политикой конфиденциальности</span>
            </p>
          </form>
      </div>
    </div>
  )
}

export default Modal