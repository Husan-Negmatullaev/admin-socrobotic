import React from "react";
import clsx from "clsx";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import CouponsTableRow from "./CouponsTableRow";

import styles from "./CouponsTable.module.scss";

const Popup = withReactContent(Swal);
const CouponsTable = ({ classes }) => {

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
    <div className={clsx(classes, "table")}>
      <table className="table__wrapper">
        <thead className="table__head">
          <tr className="table__tr">
            <th className="table__th" style={{ width: "5%" }}>ID</th>
            <th className="table__th" style={{ width: "30%" }}>Текст</th>
            <th className="table__th" style={{ width: "60%" }}>Бонус</th>
            <th className="table__th" style={{ width: "10%" }}>Активаций</th>
            <th className="table__th"></th>
            <th className="table__th"></th>
          </tr>
        </thead>
        <tbody className="table__body">
          <CouponsTableRow />
        </tbody>
        <tfoot className="table__footer">
          <tr className="table__tr">
            <td colSpan={6} className="table__td table__td_center">
              <button onClick={openPopup} type="button" className="button button_success-outline">Новый купон</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default CouponsTable;