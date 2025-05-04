import React, { useState }  from 'react'
import CustomSwiper from './CustomSwiper';
import ModalCluster from '../../components/ui/ModalCluster'

import riverIcon from "./images/River-Line/Vector.png"
import parkIcon from "./images/Park-Line/parkline.png"

import river1 from "./images/River-Line/img.png"
import river2 from "./images/River-Line/img (1).png"
import river3 from "./images/River-Line/img (2).png"
import river4 from "./images/River-Line/img (3).png"
import river5 from "./images/River-Line/img (4).png"
import river6 from "./images/River-Line/img (5).png"
import modRiverPic from "./images/River-Line/rrrr.png"

import park1 from "./images/Park-Line/img.png"
import park2 from "./images/Park-Line/img (1).png"
import park3 from "./images/Park-Line/img (2).png"
import park4 from "./images/Park-Line/img (3).png"
import park5 from "./images/Park-Line/img (4).png"
import park6 from "./images/Park-Line/img (5).png"
import modParkPic from "./images/Park-Line/pppp.png"

import 'swiper/css';
import 'swiper/css/bundle';

import styles from "./Clusters.module.css"

function Clusters() {
  const [openModalType, setOpenModalType] = useState(null);

  function openModal(type) {
    setOpenModalType(type);
  }

  function closeModal() {
    setOpenModalType(null);
  }

  return (
    <section className={styles.clusterSection}>
      <h1>Жилой комплекс состоит из двух кластеров</h1>
      <div className={styles.riverContainer}>
        <div className={styles.river__mainCont}>
          <div className={styles.river__textCont}>
            <div className={styles.river__headerCont}>
              <h4>River Line</h4>
              <img src={riverIcon} alt="river icon" />              
            </div>
            <p>Восемь жилых корпусов по 12-14 этажей 
              выстроены вдоль реки Раменки
            </p>
          </div>
          <button onClick={() => openModal('river')}>Посмотреть планировки</button>
        </div>    
        <CustomSwiper
          images={[river1, river2, river3, river4, river5, river6]}
        />
      </div>
      <div className={styles.parkContainer}>
        <div className={styles.park__mainCont}>
          <div className={styles.park__textCont}>
            <div className={styles.park__headerCont}>
              <h4>Park Line</h4>
              <img src={parkIcon} alt="park icon" />              
            </div>
            <p>Семь 14-этажных жилых корпусов,
              расположенных вдоль Матвеевского леса
            </p>
          </div>
          <button onClick={() => openModal('park')}>Посмотреть планировки</button>
        </div>
        <CustomSwiper
          images={[park1, park2, park3, park4, park5, park6]}
        />
      </div>
      {openModalType === 'river' && (
        <ModalCluster 
          imgSrc={modRiverPic}
          headerText="Получите подробное описание и цены на свободные планировки в кластере River Line"
          buttonText="Получить планировки"
          backgroundColor="rgba(31, 32, 87, 1)"
          closeModal={closeModal}
        />
      )}

      {openModalType === 'park' && (
        <ModalCluster 
          imgSrc={modParkPic}
          headerText="Получите подробное описание и цены на свободные планировки в кластере Park Line"
          buttonText="Получить планировки"
          backgroundColor="rgba(160, 167, 71, 1)"
          closeModal={closeModal}
        />
      )}
    </section>
  )
}

export default Clusters