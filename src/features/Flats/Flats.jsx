import styles from "./Flats.module.css"

import React, { useState } from 'react'
import flat1 from "./images/img.png"
import flat2 from "./images/img (1).png"
import flat3 from "./images/img (2).png"
import flat4 from "./images/img (3).png"
import ModalFlat from "../../components/ui/ModalFlat"


function Flats() {
  const[openFlatModal, setOpenFlatModal] = useState(null);

  function openModal(e, type) {
    e.preventDefault();
    setOpenFlatModal(type);
  }

  function closeModal() {
    setOpenFlatModal(null);
  }
  
  return (
    <section className={styles.flatSection}>
      <h1>Более 100 свободных квартир <span>редких форматов</span></h1>
      <div className={styles.flatBlock}>
        <div className={styles.textBlock}>
          <h4>Свободная планировка, возможность объединить
            квартиры <span>до 500 м&#178;</span>
          </h4>
          <p>Не ограничивайте себя при создании жилого пространства
            Вашей мечты, воспользуйтесь возможностью увеличения
            площади до комфортного Вам размера
          </p>
          <a href="#" onClick={(e) => openModal(e, 'flat1')}>Узнать стоимость	&#8594;</a>
        </div>
        <img src={flat1} alt="flat" />
      </div>

      <div className={styles.flatBlock}>
        <div className={styles.textBlock}>
          <h4>Настоящий <br />дровяной камин</h4>
          <p>В пентхаусах предусмотрен дымоход с возможностью
            установки камина, чтобы Вы получали наслаждение от 
            живого тепла в холодное время года
          </p>
          <a href="#" onClick={(e) => openModal(e, 'flat2')}>Узнать стоимость &#8594;</a>
        </div>
        <img src={flat2} alt="flat" />
      </div>

      <div className={styles.flatBlock}>
        <div className={styles.textBlock}>
          <h4>Собственная <br />терраса до 17 м&#178;</h4>
          <p>Современная терраса с необыкновенными видами
            на благоустроенную набережную, МГУ им.
            М.В. Ломоносова и Воробьевы горы
          </p>
          <a href="#" onClick={(e) => openModal(e, 'flat3')}>Узнать стоимость	&#8594;</a>
        </div>
        <img src={flat3} alt="flat" />
      </div>

      <div className={styles.flatBlock}>
        <div className={styles.textBlock}>
          <h4>Увеличенная <br />высота потолка</h4>
          <p>Почувствуйте простор помещений в полной 
            мере с увеличенной высотой потолка 4,2 м
          </p>
          <a href="#" onClick={(e) => openModal(e, 'flat4')}>Узнать стоимость &#8594;</a>
        </div>
        <img src={flat4} alt="flat" />
      </div>

      {openFlatModal === 'flat1' && (
        <ModalFlat 
        headerText="квартир со свободной планировкой"
        closeModal={closeModal}
        />
      )}
        {openFlatModal === 'flat2' && (
        <ModalFlat 
        headerText="квартир с дровяным камином"
        closeModal={closeModal}
        />
      )}
        {openFlatModal === 'flat3' && (
        <ModalFlat 
        headerText="квартир с собственной террасой"
        closeModal={closeModal}
        />
      )}
        {openFlatModal === 'flat4' && (
        <ModalFlat 
        headerText="квартир с увеличенной высотой потолка"
        closeModal={closeModal}
        />
      )}
      
    </section>
  )
}

export default Flats