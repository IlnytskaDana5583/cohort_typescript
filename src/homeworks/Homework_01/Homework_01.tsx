// Создайте компонент Homework_06
// В нем нужно протипизировать следующий массив обьектов:
// const cars = [ { brand: "BMW", price: 20000, isDiesel: true }, { brand: "Mercedes", price: 22000, isDiesel: false },
//  { brand: "Porshe", price: 50000, isDiesel: true }, { brand: "Nissan", price: 25000, isDiesel: false },
// { brand: "Audi", price: 50000, isDiesel: true } ];
// Используя map JSX элементов, расположите данные из обьектов в карточках и покажите эти карточки на странице.
//  Стили на ваше усмотрение

import "./styles.css";
import { useState } from "react";

function Homework_06() {
  const [cars] = useState([
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ]);

  return (
    <div className="cars_wrapper">
      <div className="cars_container">
        {cars.map((car, index) => (
          <div key={index} className="car_card">
            <h3 className="brand">{car.brand}</h3>
            <p className="price">Price: {car.price} </p>
            <p>isDiesel:{car.isDiesel}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Homework_06;
