import React from "react";
import clsx from "clsx";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import styles from "./CouponsTable.module.scss";

const Popup = withReactContent(Swal);

const CouponsTableRow = () => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const openPopup = () => Popup.fire({
    title: "Добавление нового купона",
    showConfirmButton: false,
    html: (
      <form onSubmit={handleFormSubmit} className={styles.coupons__form}>
        <p className={styles.coupons__text}>Это то, что должен ввести пользователь, чтобы получить деньги на баланс</p>
        <div className={styles.coupons__content}>
          <div className={styles.coupons__item}>
            <label htmlFor="0" className={styles.coupons__label}>Текст</label>
            <input type="text" id="0" className={clsx(styles.coupons__input, "input")} />
          </div>
          <div className={styles.coupons__item}>
            <label htmlFor="1" className={styles.coupons__label}>Сумма</label>
            <input type="text" id="1" className={clsx(styles.coupons__input, "input")} />
          </div>
          <div className={styles.coupons__item}>
            <label htmlFor="2" className={styles.coupons__label}>Активации</label>
            <input type="text" id="2" className={clsx(styles.coupons__input, "input")} />
          </div>
        </div>
        <button type="button" className="button button_success">Добавить</button>
      </form>
    ),
  });

  return (
    <tr className="table__tr">
      {/* <td colSpan={6} className="table__td table__td_center">Купонов не найдено</td> */}
      <td className="table__td">1088</td>
      <td className="table__td">adwadwadw</td>
      <td className="table__td">1212₽</td>
      <td className="table__td">2 шт</td>
      <td className="table__td"><button onClick={openPopup} type="button" className="button button_success-outline">Редактировать</button></td>
      <td className="table__td"><button type="button" className={clsx(styles.coupons__icon, "button _icon-trash-alt")}></button></td>
    </tr>
  )
}

export default CouponsTableRow;