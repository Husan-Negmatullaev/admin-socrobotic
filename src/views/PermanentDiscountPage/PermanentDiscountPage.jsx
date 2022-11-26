import React from "react";
import clsx from "clsx";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import styles from "./PermanentDiscountPage.module.scss";

const Popup = withReactContent(Swal);

const PermanentDiscountPage = () => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const openPopup = () => Popup.fire({
    title: "Добавить вечную скидка",
    confirmButtonColor: "#3085d6",
    html: (
      <form className={styles.discount__form} onSubmit={handleFormSubmit}>
        <input type="number" min={0} className={clsx(styles.discount__input, "input")} placeholder="ID пользователя" />
        <input type="number" min={0} max={100} className={clsx(styles.discount__input, "input")} placeholder="% скидки" />
      </form>
    )
  })

  return (
    <div className={clsx(styles.discount, "page")}>
      <div className={clsx(styles.discount__body, "page__body")}>
        <div className={clsx(styles.discount__row, "page__row")}>
          <div className={styles.discount__header}>
            <h1 className={clsx(styles.discount__title, "title title_medium")}>Вечные скидки</h1>
            <p className={styles.discount__text}>Для своих постоянных клиентов (и не только), вы можете добавить постоянные скидки, которые будут действовать на любой товар, пока вы не удалите или не измените скидку.</p>
            <button onClick={openPopup} type="button" className={clsx(styles.discount__button, "button button_success-outline")}>Добавить</button>
          </div>
          <div className={clsx(styles.discount__content, "table table_solid")}>
            <table className="table__wrapper">
              <thead className="table__head">
                <tr className="table__tr">
                  <th className="table__th" style={{ width: "70%" }}>Пользователь</th>
                  <th className="table__th">Скидка</th>
                  <th className="table__th"></th>
                </tr>
              </thead>
              <tbody className="table__body">
                {/* <tr className="table__tr">
                  <td colSpan={99} className="table__td table__td_center">
                    Пока что вы не добавили ни одной вечной ссылки
                  </td>
                </tr> */}
                <tr className="table__tr">
                  <td className="table__td">
                    <div className={styles.discount__subtitle}>633067570</div>
                    <button type="button" className={clsx(styles.discount__link_min, "button-link")}>@lazaSs</button>
                  </td>
                  <td className="table__td">
                    <button type="button" className={clsx(styles.discount__link, "button-link")}>3%</button>
                  </td>
                  <td className="table__td">
                    <button type="button" className="button button_red-outline">Удалить</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PermanentDiscountPage;