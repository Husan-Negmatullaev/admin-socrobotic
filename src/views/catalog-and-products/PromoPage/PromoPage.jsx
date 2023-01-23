import React from "react";
import clsx from "clsx";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import styles from "./PromoPage.module.scss";

const Popup = withReactContent(Swal);

const PromoPage = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const openPopup = () =>
    Popup.fire({
      showConfirmButton: false,
      width: 450,
      html: (
        <div className={styles.popupPromo}>
          <div className={styles.popupPromo__header}>
            <h2 className={styles.popupPromo__title}>
              Добавление нового промокода
            </h2>
            <p className={clsx(styles.popupPromo__text, "text")}>
              Это то, что должно ввести пользователь при покупке, чтобы получить
              скидку
            </p>
          </div>
          <form
            onSubmit={handleFormSubmit}
            className={clsx(styles.popupPromo__form, styles.formPopup)}
          >
            <div className={styles.formPopup__body}>
              <div className={styles.formPopup__row}>
                <div className={styles.formPopup__column}>
                  <label htmlFor={"0"} className={styles.formPopup__label}>
                    Текст
                  </label>
                </div>
                <div className={styles.formPopup__column}>
                  <input
                    id={"0"}
                    type="text"
                    placeholder={"Промокод"}
                    className={clsx(styles.formPopup__input, "input")}
                  />
                </div>
              </div>
              <div className={styles.formPopup__row}>
                <div className={styles.formPopup__column}>
                  <label htmlFor={"1"} className={styles.formPopup__label}>
                    Скидка
                  </label>
                </div>
                <div className={styles.formPopup__column}>
                  <input
                    id={"1"}
                    type="number"
                    placeholder={"% скидка"}
                    className={clsx(styles.formPopup__input, "input")}
                  />
                </div>
              </div>
              <div className={styles.formPopup__row}>
                <div className={styles.formPopup__column}>
                  <label htmlFor={"2"} className={styles.formPopup__label}>
                    Активации
                  </label>
                </div>
                <div className={styles.formPopup__column}>
                  <input
                    id={"2"}
                    type="number"
                    placeholder={"Промокод"}
                    className={clsx(styles.formPopup__input, "input")}
                  />
                </div>
              </div>
              <div className={styles.formPopup__row}>
                <div className={styles.formPopup__column}>
                  <label htmlFor={"3"} className={styles.formPopup__label}>
                    Макс.
                  </label>
                </div>
                <div className={styles.formPopup__column}>
                  <input
                    id={"3"}
                    type="number"
                    placeholder={"Промокод"}
                    className={clsx(styles.formPopup__input, "input")}
                  />
                </div>
              </div>
              <div className={styles.formPopup__row}>
                <div className={styles.formPopup__column}>
                  <label htmlFor={"4"} className={styles.formPopup__label}>
                    Категория
                  </label>
                </div>
                <div className={styles.formPopup__column}>
                  <select
                    id={"4"}
                    type="number"
                    placeholder={"Промокод"}
                    className={clsx(styles.formPopup__select, "select")}
                  >
                    <option value="0">Все категории</option>
                    <option value="1">Some title</option>
                    <option value="2">Some title 2</option>
                  </select>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className={clsx(
                styles.formPopup__button,
                "button button_success"
              )}
            >
              Добавить
            </button>
          </form>
        </div>
      ),
    });

  return (
    <div className={clsx(styles.promo, "page")}>
      <div className={clsx(styles.promo__body, "page__body")}>
        <div className={clsx(styles.promo__row, "page__row")}>
          <div className={styles.promo__header}>
            <h1 className={clsx(styles.promo__title, "title title_large")}>
              Скидочные промокоды
            </h1>
            <p className={clsx(styles.promo__text, "text")}>
              Здесь вы можете добавить промокоды, которые дадут скидку
              пользователям, которые их введутКолонка &quot;Макс&quot; показывает
              максимальное кол-во активаций промокода для одного пользователя
            </p>
          </div>
          <div className={clsx(styles.promo__table, "table")}>
            <table className="table__wrapper">
              <thead className="table__head">
                <tr className="table__tr">
                  <th className="table__th" style={{ width: "5%" }}>
                    ID
                  </th>
                  <th className="table__th" style={{ width: "30%" }}>
                    Промокод
                  </th>
                  <th className="table__th" style={{ width: "60%" }}>
                    Категория
                  </th>
                  <th className="table__th" style={{ width: "10%" }}>
                    Скидка
                  </th>
                  <th className="table__th" style={{ width: "15%" }}>
                    Осталось
                  </th>
                  <th className="table__th" style={{ width: "5%" }}>
                    Макс
                  </th>
                  <th className="table__th" style={{ width: "5%" }}></th>
                  <th className="table__th"></th>
                </tr>
              </thead>
              <tbody className="table__body">
                <tr className="table__tr">
                  {/*<td className="table__td table__td_center" colSpan={8}>Не найдено промокодов</td>*/}
                  <td className="table__td">148931</td>
                  <td className="table__td">some</td>
                  <td className="table__td">Some title</td>
                  <td className="table__td">50%</td>
                  <td className="table__td">10</td>
                  <td className="table__td">10</td>
                  <td className="table__td">
                    <button
                      onClick={openPopup}
                      type="button"
                      className="button button_success-outline"
                    >
                      Редактировать
                    </button>
                  </td>
                  <td className="table__td">
                    <button
                      type="button"
                      className={clsx(styles.promo__icon, "_icon-trash-alt")}
                    ></button>
                  </td>
                </tr>
              </tbody>
              <tfoot className="table__footer">
                <tr className="table__tr">
                  <td colSpan={8} className="table__td table__td_center">
                    <button
                      onClick={openPopup}
                      type="button"
                      className="button-link button-link_size"
                    >
                      Добавить промокод
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPage;
