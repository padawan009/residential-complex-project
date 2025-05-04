import styles from "./Interior.module.css"

import React, { useState } from 'react'
import ModalCluster from "../../components/ui/ModalCluster"

import light1 from "./images/Light-flat/Light_1.png"
import light2 from "./images/Light-flat/Light_2.png"
import light3 from "./images/Light-flat/Light_3.png"
import lightIcon from "./images/Light-flat/Group 1926.png"
import lightMod from "./images/Light-flat/img (2).png"

import dark1 from "./images/Dark-flat/Dark_1.png"
import dark2 from "./images/Dark-flat/Dark_2.png"
import dark3 from "./images/Dark-flat/Dark_3.png"
import darkIcon from "./images/Dark-flat/Group 1926.png"
import darkMod from "./images/Dark-flat/img (3).png"

function Interior() {
    const [openModalType, setOpenModalType] = useState(null);
  
    function openModal(type) {
      setOpenModalType(type);
    }
  
    function closeModal() {
      setOpenModalType(null);
    }

  return (
    <section className={styles.interiorSection}>
      <h1>2 варианта отделки</h1>
      <hr />
      <div className={styles.interiorBlock}>
        <div className={styles.interiorBlock__header}>
          <h4>Светлая отделка</h4>
          <button onClick={() => openModal('light')}>Скачать дизайн-буклет</button>
        </div>
        <div className={styles.firstBlock}>
          <img src={light1} className={styles.blockImg} alt="light 1" />
          <div className={`${styles.textBlock} ${styles.light}`}>
            <img src={lightIcon} alt="icon" />
            <h6>Особенности интерьера</h6>
            <p>Сочетание белых стен и светлой напольной доски с 
              текстурой дерева расширяет пространство, формируя
              гармоничную, наполненную светом атмосферу
            </p>
          </div>
        </div>
        <div className={styles.secondBlock}>
          <img src={light2} alt="light 2" />
          <img src={light3} alt="light 3" />
        </div>
      </div>

      <hr />
      <div className={styles.interiorBlock}>
        <div className={styles.interiorBlock__header}>
          <h4>Тёмная отделка</h4>
          <button  onClick={() => openModal('dark')}>Скачать дизайн-буклет</button>
        </div>
        <div className={styles.firstBlock}>
          <img src={dark1} className={styles.blockImg} alt="dark 1" />
          <div className={`${styles.textBlock} ${styles.dark}`}>
            <img src={darkIcon} alt="icon" />
            <h6>Особенности интерьера</h6>
            <p>Отделка в тёмном варианте формируется за счёт 
              нейтральных оттенков стен, а также напольной доски,
              выполненной в цвете темного дерева
            </p>
          </div>
        </div>
        <div className={styles.secondBlock}>
          <img src={dark2} alt="dark 2" />
          <img src={dark3} alt="dark 3" />
        </div>
      </div>

      {openModalType === 'light' && (
        <ModalCluster 
          imgSrc={lightMod}
          headerText="Получите дизайн-буклет с подробным описанием отделки светлого интерьера"
          buttonText="Получить буклет"
          backgroundColor="#faf8f5"
          closeModal={closeModal}
        />
      )}

      {openModalType === 'dark' && (
        <ModalCluster 
          imgSrc={darkMod}
          headerText="Получите дизайн-буклет с подробным описанием отделки тёмного интерьера"
          buttonText="Получить буклет"
          backgroundColor="rgba(66, 53, 42, 1)"
          closeModal={closeModal}
        />
      )}
    </section>
  )
}

export default Interior