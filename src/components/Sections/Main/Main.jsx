import styles from "./Main.module.css"
import logoEstes from "./images/logo-estes.png"
import logo from "./images/logo.png"
import mainPic from "./images/img.png"
import award from "./images/award.png"
import mobile from "./images/phone.png"


import React from 'react'

function Main() {
  return (
    <section className={styles.mainSection}>
      <header>
        <div className={styles.leftHeader}>
          <img src={logoEstes} alt="logo of RC" />
          <p>Официальный партнер АО "КККК"</p>
        </div>
        <div className={styles.rightHeader}>
          <p className={styles.rightHeader__number}>+7 495 845 19 34</p>
          <hr />
          <p className={styles.rightHeader__work}>· работаем</p>
        </div>
        <img className={styles.mobile} src={mobile} alt="mobile icon" />        
      </header>
      <div className={styles.textContainer}>
        <img className={styles.mainLogo} src={logo} alt="main logo" />
        <h1>Жизнь в зеленом оазисе  в статусном районе Москвы</h1>
        <div className={styles.textWithLine}>
          <p>Жилой комплекс бизнес-класса в 20 минутах от Кремля</p>
        </div>
      </div>
      <div className={styles.picContainer}>
        <img className={styles.mainPic} src={mainPic} alt="hero pic" />
        <div className={styles.picContainer__award}>
          <img className={styles.awardPic} src={award} alt="award pic" />  
          <p>Победитель федеральной премии Urban Awards 2019</p>
        </div>
        <div className={styles.picContainer__queue}>
          <div><p>1 очередь <span>2022</span></p></div>
          <div><p>2 очередь <span>2023</span></p></div>
          
          
        </div>
      </div>
    </ section>
  )
}

export default Main