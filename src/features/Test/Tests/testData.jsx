import flatPic from "./images/img.png";
import pentPic from "./images/img (1).png";

import plan1 from "./images/image 216.png";
import plan2 from "./images/image 217.png";
import plan3 from "./images/image 218.png";

import square1 from "./images/2.png";
import square2 from "./images/3.png";
import square3 from "./images/31221.png";

import whatsup from "./images/telegram.png";
import telega from "./images/telegram (1).png";
import viber from "./images/telegram (2).png";

export const tests = [
    {
      type: "multi",
      header: "Какая недвижимость вас интересует?",
      options: [
        { id: "flat", label: "Квартиры", img: flatPic },
        { id: "penthouse", label: "Пентхаусы", img: pentPic },
      ],
    },
    {
      type: "multi",
      box: "3",
      header: "Какая планировка вам подходит?",
      options: [
        { id: "plan1", label: "Студия", img: plan1 },
        { id: "plan2", label: "1-2 спальни", img: plan2 },
        { id: "plan3", label: "3-4 спальни", img: plan3 },
      ],
    },
    {
      type: "multi",
      box: "3",
      header: "Какую площадь объекта вы рассматриваете?",
      options: [
        { id: "square1", label: "26 м² - 100 м²", img: square1 },
        { id: "square2", label: "100 м² - 150 м²", img: square2 },
        { id: "square3", label: "150 м² - 192 м²", img: square3 },
      ],
    },
    {
      type: "parking",
      header: "Планируете ли вы использовать подземный паркинг?",
      options: [
        { id: "yes", label: "Да, планирую" },
        { id: "no", label: "Не планирую" },
      ],
    },
    {
      type: "connection",
      header:
        "Подобрали 4 варианта недвижимости по вашим параметрам. Куда их прислать?",
      options: [
        { id: "whats", label: "в Вотсап", img: whatsup },
        { id: "telega", label: "в Телеграм", img: telega },
        { id: "viber", label: "в Вайбер", img: viber },
      ],
    },
  ];