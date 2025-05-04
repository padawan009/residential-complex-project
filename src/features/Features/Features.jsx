import styles from "./Features.module.css"
import firstPic from "./images/bg.png"
import secondPic from "./images/1555.png"
import thirdPic from "./images/features_4.png"
import fourthPic from "./images/features_3.png"

import React from 'react'

function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.picContainer}>
          <img src={firstPic} alt="pic of RC" />
          <div className={styles.textContainer}>
            <h5>20 гектаров</h5>
            <p>территории ЖК - это как полтора Зарядья</p>            
          </div>
        </div>
        <div className={styles.picContainer}>
          <img src={secondPic} alt="pic of RC" />          
          <div className={styles.textContainer}>
            <h5>15 корпусов</h5>
            <p>по 12-14 этажей, просторная застройка</p>
          </div>
        </div>
        <div className={styles.picContainer}>
          <img src={thirdPic} alt="pic of RC" />
          <div className={styles.textContainer}>
            <h5>7 гектаров</h5>
            <p>приватного парка для жителей ЖК</p>            
          </div>
        </div>
        <div className={styles.picContainer}>
          <img src={fourthPic} alt="pic of RC" />
          <div className={styles.textContainer}>
            <h5>2 километра</h5>
            <p>набережной реки Раменка вдоль ЖК</p>            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features