import styles from "./Inteko.module.css"

import React from 'react'

function Inteko() {
  return (
    <section className={styles.intekoSection}>
      <div className={styles.textBlock}>
        <div className={styles.textBlock__left}>
          <div className={styles.textBlock__leftHeader}>
            <h1>Девелопер ИНТЕКО</h1>
            <p>Реализует лучшие проекты в сфере недвижимости
              на основе анализа и прогноза предпочтений человека
            </p>            
          </div>
          <div>
            <h4>20 лет</h4>
            <p>на рынке недвижимости Москвы и регионов</p>
          </div>
          <div>
            <h4>80+ проектов</h4>
            <p>жилых домов сдано в Москве</p>
          </div>
          <div>
            <h4>5 000 000 м&#178;</h4>
            <p>общая площадь готовых объектов</p>
          </div>
          <div>
            <h4>500 сотрудников</h4>
            <p>в штате компании</p>
          </div>
        </div>
        <hr />
        <div className={styles.textBlock__right}>
          <h6>Документы West Garden</h6>
          <a href="#" onClick={(e) => e.preventDefault()}>Проектная документация</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Разрешение на строительство</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Проектная декларация (1 очередь)</a>
          <a href="#" onClick={(e) => e.preventDefault()}>Проектная декларация (2 очередь)</a>
        </div>
      </div>
    </section>
  )
}

export default Inteko