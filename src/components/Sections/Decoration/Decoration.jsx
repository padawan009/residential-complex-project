import styles from "./Decoration.module.css"

import React from 'react'
import pic1 from "./images/Frame 1956.png"
import pic2 from "./images/image 210.png"
import pic3 from "./images/Frame 1953.png"

function Decoration() {
  return (
    <section className={styles.decorSection}>
      <h1>Отделка от застройщика</h1>
      <h4>Экономьте на стоимости ремонта, покупая квартиру с готовой отделкой</h4>
      <div className={styles.cardsContainer}>
        <div className={styles.cardBlock}>
          <img src={pic1} alt="otdelka pic1" />
          <h5>Готовый дизайн-проект</h5>
          <p>Воспользуйтесь возможностью сразу же заняться
            меблировкой и благоустройством новой квартиры,
            как только получите ключи
          </p>
        </div>

        <div className={styles.cardBlock}>
          <img src={pic2} alt="otdelka pic2" />
          <h5>Чистота и тишина, без шума и пыли</h5>
          <p>Забудьте шум от "бесконечного ремонта" соседей 
            и лифт, декорированный защитными материалами
          </p>
        </div>

        <div className={styles.cardBlock}>
          <img src={pic3} alt="otdelka pic3" />
          <h5>Выгода за счет оптовых закупок</h5>
          <p>Благодаря оптовым закупкам застройщика,
            вы получаете возможность сэкономить на стоимости
            ремонта
          </p>
        </div>
      </div>
    </section>
  )
}

export default Decoration