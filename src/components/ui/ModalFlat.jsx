
import React from "react"
import Form from "./Form"
import styles from "./Modal.module.css"

function ModalFlat({ headerText, closeModal }) {
  return (
    <div className={styles.modShadow} onClick={closeModal}>
      <div className={styles.modalContainer} 
      onClick={(e) => e.stopPropagation()}
      style={{ borderRadius: "12px" }}>
        <div className={styles.textContainer}
        style={{ borderRadius: "12px", maxWidth: "500px" }}>
          <h5>Узнайте стоимость {headerText}</h5>
          <p className={styles.textP}>
            Более подробную информацию можно узнать, оставив свои контактные данные</p>
          <hr />
          <Form buttonText="Узнать стоимость" />
        </div>
      </div>
    </div>

  )
}

export default ModalFlat