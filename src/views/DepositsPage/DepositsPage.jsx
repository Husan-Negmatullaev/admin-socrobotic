import React from "react";
import clsx from "clsx";

import styles from "./DepositsPage.module.scss";

const DepositsPage = () => {

  console.log(styles);

  return (
    <div className={clsx(styles.depositPage, "page")}>
      <div className={clsx(styles.depositPage__body, "page__body")}>
        <div className={clsx(styles.depositPage__row, "page__row")}>
          <div className={clsx(styles.depositPage__replenishment, styles.replenishment)}>
            <h4 className={clsx(styles.replenishment__title, "title title_medium")}>
              Поплнение
            </h4>
            <form className={styles.replenishment__form}>
              <h6 className={clsx(styles.replenishment__subtitle, "title")}>Поиск</h6>
              <div className={styles.replenishment__items}>
                <div className={styles.replenishment__item}>
                  <input
                    type={"tel"}
                    inputMode={"numeric"}
                    autoComplete={"cc-number"}
                    placeholder="ID телеграм"
                    className={clsx(styles.replenishment__input, "input")}
                  />
                </div>
                <div className={styles.replenishment__item}>
                  <input
                    type={"tel"}
                    inputMode={"numeric"}
                    autoComplete={"cc-number"}
                    placeholder="Логин телеграм"
                    className={clsx(styles.replenishment__input, "input")}
                  />
                </div>
                <div className={styles.replenishment__item}>
                  <button className={clsx(styles.replenishment__button, "button button_success")}>Найти</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={clsx(styles.depositPage__row, "page__row")}>
          <div className={clsx(styles.depositPage__table, "table-blue")}>
            <table className="table-blue__content">
              <thead className="table-blue__head">
                <tr className="table-blue__tr">
                  <th className="table-blue__th">Магазин</th>
                  <th className="table-blue__th table-blue__th_center">Скрыт</th>
                  <th className="table-blue__th table-blue__th_center">Управление</th>
                  <th className="table-blue__th table-blue__th_center">Аренда истекает</th>
                  <th className="table-blue__th"></th>
                </tr>
              </thead>
              <tbody className="table-blue__body">
                <tr className="table-blue__tr">
                  <th colSpan={8} className="table-blue__td table-blue__td_bold">Здесь пока пусто</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.depositPage__pagging}>
            <div className="pagging">
              <button disabled type="button" className="pagging__arrow">Назад</button>
              <ul className="pagging__list">
                <li>
                  <button type="button" className="pagging__item _active">1</button>
                </li>
                <li>
                  <button type="button" className="pagging__item">2</button>
                </li>
                <li>
                  <button type="button" className="pagging__item">3</button>
                </li>
              </ul>
              <button type="button" className="pagging__arrow">Вперед</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DepositsPage;