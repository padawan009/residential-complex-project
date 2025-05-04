
import React from "react"
import Form from "./Form"
import styles from "./Modal.module.css"

function ModalCluster({ imgSrc, headerText, backgroundColor, buttonText, closeModal }) {
  return (
    <div className={styles.modShadow} onClick={closeModal}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <div className={styles.picContainer}>
          <img src={imgSrc} style={{ backgroundColor: backgroundColor }} alt="pic of modal" />
        </div>
        <div className={styles.textContainer}>
          <h5>{headerText}</h5>
          <p className={styles.textP}>PDF, можно скачать прямо сейчас</p>
          <hr />
          <Form buttonText={buttonText} />
        </div>
      </div>
    </div>

  )
}

export default ModalCluster