import styles from "./Presentation.module.css"
import photo from "./images/photo.png"

import React from 'react'

function Presentation() {
  return (
    <section className={styles.presentationSection}>
      <div className={styles.presentForm}>
        <div className={styles.textContainer}>
          <h5>Специально для вас</h5>
          <h1>Персональная презентация West Garden</h1>
          <ul>
            <li>Подробно расскажем про жилой комплекс</li>
            <li>Ознакомитесь со всеми планировками и ценами</li>
            <li>Прогуляетесь по благоустроенной набережной</li>
          </ul>
          <hr />
          <form className={styles.formContainer} action="">
            <span className={styles.firstSpan}>Закрепить за номером</span>
            <div>
              <input type="tel"
              placeholder="+7 ___-___-__-__"
              required/>
              <button type="submit">Записаться на презентацию</button>
            </div>
            <p>Нажимая на кнопку, вы даёте согласие на обработку персональных
              данных и соглашаетесь с <span className={styles.secondSpan}>политикой конфиденциальности</span>
            </p>
          </form>
        </div>

        <div className={styles.picContainer}>
          <img src={photo} className={styles.alenaPic} alt="Alena" />
          <div>
            <h6>Алёна Кирющенко</h6>
            <p>ведущий эксперт по недвижимости в ESTES</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Presentation