import door from "./images/Vector.png"
import lift from "./images/Vector (1).png"
import star from "./images/Star 4.png"
import lobby1 from "./images/image 153 (1).png"
import lobby2 from "./images/image 154 (1).png"
import lobby3 from "./images/image 154.png"
import lobby4 from "./images/image 153.png"


import styles from "./Lobby.module.css"

import React from 'react'

function Lobby() {
  return (
    <section className={styles.lobbySection}>
      <h1>Современная эстетика лобби</h1>
      <div className={styles.firstBlock}>
        <div className={styles.headerBlock}>
          <img src={door} alt="door icon" />
          <h4>Центральные входные группы</h4>
        </div>
        <div className={styles.textBlock}>
          <div>
            <img src={star} alt="star" />
            <p>Зоны ожидания и встреч</p>
          </div>
          <div>
            <img src={star} alt="star" />
            <p>Пост охраны</p>
          </div>
          <div>
            <img src={star} alt="star" />
            <p>Переговорная комната</p>
          </div>
          <div>
            <img src={star} alt="star" />
            <p>Колясочная</p>
          </div>
        </div>
        <div className={styles.picBlock}>
          <img src={lobby1} alt="lobby" />
          <img src={lobby2} alt="lobby" />
        </div>
      </div>

      <div className={styles.secondBlock}>
        <div className={styles.headerBlock}>
          <img src={lift} alt="lift icon" />
          <h4>Лифтовый холл</h4>
        </div>
        <div className={styles.textBlock}>
          <div>
            <img src={star} alt="star" />
            <p>2-4 лифта</p>
          </div>
          <div>
            <img src={star} alt="star" />
            <p>Грузовые и пассажирские</p>
          </div>
          <div>
            <img src={star} alt="star" />
            <p>Ведущие производители</p>
          </div>
        </div>
        <div className={styles.picBlock}>
          <img src={lobby3} alt="lobby" />
          <img src={lobby4} alt="lobby" />
        </div>
      </div>

    </section>
  )
}

export default Lobby