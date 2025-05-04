import styles from "./Map.module.css"
import map from "./images/Map.png"
import panorama from "./images/panorama.png"
import icon from "./images/Vector.png"

import React, { useState } from 'react'

function Map() {

  const [isVisible, setIsVisible] = useState(false);

  function openPanorama() {
    setIsVisible(true);
  }

  function closePanorama() {
    setIsVisible(false);
  }

  return (
    <section className={styles.mapSection}>
      {!isVisible ? (
        <>
          <div className={styles.headerCont}>
            <hr />
            <h6>Престижное расположение</h6>
            <hr />
          </div>
          <h1>
            Один из самых зелёных <br />районов столицы --- <span>Раменки</span>
          </h1>
          <div className={styles.picContainer}>
            <img src={map} alt="map" />
          </div>
          <p className={styles.mapText}>
            ЖК West Garden окружен Матвеевским лесом, набережной реки Раменки и
            природным заказником "Долина реки Сетунь"
          </p>
          <button className={styles.panoramaBtn} onClick={openPanorama}>
            <img src={icon} alt="icon" />
            <span>Панорама района 360&deg;</span>
          </button>
        </>
      ) : (
        <div className={styles.panoramaPic}>
          <img src={panorama} alt="panorama view" />
          <button className={styles.closeBtn} onClick={closePanorama}>Close</button>
        </div>
      )}
    </section>
  );
};

export default Map