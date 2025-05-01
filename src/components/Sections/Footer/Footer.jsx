import styles from "./Footer.module.css"

import React from 'react'
import mainLogo from "./images/mainLogo.png"
import estesLogo from "./images/logo.png"
import map from "./images/map.png"

function Footer() {
  return (
    <section className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <div className={styles.headerBlock}>
          <h2>Жилой комплекс "West Garden" — все преимущества жизни на природе</h2>
          <img src={mainLogo} alt="west garden logo" />
        </div>
        <hr className={styles.mainLine}/>
        <div className={styles.footerBlock}>
          <div className={styles.textBlock}>
            <img src={estesLogo} alt="estes logo" />
            <hr />
            <div className={styles.adressBlock}>
              <p>Офис продаж</p>
              <p>Москва, Локал наб. 2/4, строение 17, офис 308</p>
            </div>
            <hr />
            <div className={styles.telBlock}>
              <p>Телефон</p>
              <div>
                <p>+7 495 805 19 34</p>
                <span>· работаем</span>
              </div>
            </div>
          </div>

          <div className={styles.picDiv}>
            <img className={styles.map} src={map} alt="map" />
          </div>

        </div>
      </div>
      {/* <div className={styles.headerBlock}>
        <h2>Жилой комплекс "West Garden" — все преимущества жизни на природе</h2>
        <img src={mainLogo} alt="west garden logo" />
      </div>
      <hr />
      <div className={styles.footerBlock}>
        <div className={styles.textBlock}>
          <img src={estesLogo} alt="estes logo" />
          <hr />
          <div className={styles.adressBlock}>
            <p>Офис продаж</p>
            <p>Москва, Локал наб. 2/4, строение 17, офис 308</p>
          </div>
          <hr />
          <div className={styles.telBlock}>
            <p>Телефон</p>
            <div>
              <p>+7 495 805 19 34</p>
              <span>· работаем</span>
            </div>
          </div>
        </div>
        <div>
          <img className={styles.map} src={map} alt="map" />
        </div>

      </div> */}
    </section>
  )
}

export default Footer