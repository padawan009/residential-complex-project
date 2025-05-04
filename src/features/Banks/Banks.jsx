import styles from "./Banks.module.css"

import React from 'react'
import banks from "./images/logos.png"

function Banks() {
  return (
    <section className={styles.bankSection}>
      <h1>Самые выгодные условия кредитования от 20 банков</h1>
      <div>
         <img src={banks} alt="banks" />       
      </div>
    </section>
  )
}

export default Banks