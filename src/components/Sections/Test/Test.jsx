import styles from "./Test.module.css"

import React from 'react'
import pic1 from "./images/Group 10144.png"
import pic2 from "./images/Group 10145.png"

function Test() {
  return (
    <section className={styles.testSection}>
      <div className={styles.testContainer}>
        <h2>Какая квартира <br />подойдет именно вам?</h2>
        <p>Ответьте на 4 вопроса, чтобы подобрать
          идеальный вариант недвижимости
        </p>
        <button>Пройти тест</button>
        <div className={styles.picContainer}>
          <img src={pic1} alt="pic 1" />
          <img src={pic2} className={styles.secondPic} alt="pic 2" />          
        </div>
      </div>

    </section>
  )
}

export default Test