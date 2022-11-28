import React from "react";
import clsx from "clsx";

import styles from "./SellsPage.module.scss";

const SellsPage = () => {
  const handleSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className={clsx(styles.sells, "page")}>
      <div className={clsx(styles.sells__body, "page__body")}>
        <div className={clsx(styles.sells__row, "page__row")}>
          <form
            onSubmit={handleSubmitForm}
            className={clsx(styles.sells__form, styles.formSells)}
          >
            <div className={styles.formSells__body}>
              <div
                className={clsx(
                  styles.formSells__column,
                  styles.formSells__column_min
                )}
              >
                <h2 className={styles.formSells__title}>Поиск</h2>
                <div className={styles.formSells__item}>
                  <input
                    type="text"
                    placeholder={"Название"}
                    className={clsx(styles.formSells__input, "input")}
                  />
                </div>
                <div className={styles.formSells__item}>
                  <input
                    type="email"
                    placeholder={"Email"}
                    className={clsx(styles.formSells__input, "input")}
                  />
                </div>
                <div className={styles.formSells__item}>
                  <input
                    type="text"
                    placeholder={"IP"}
                    className={clsx(styles.formSells__input, "input")}
                  />
                </div>
                <div className={styles.formSells__item}>
                  <input
                    type="text"
                    placeholder={"Реквизиты оплаты"}
                    className={clsx(styles.formSells__input, "input")}
                  />
                </div>
                <div className={styles.formSells__item}>
                  <input
                    type="text"
                    placeholder={"ID телеграм"}
                    className={clsx(styles.formSells__input, "input")}
                  />
                </div>
                <div className={styles.formSells__item}>
                  <input
                    type="text"
                    placeholder={"Логин телеграм"}
                    className={clsx(styles.formSells__input, "input")}
                  />
                </div>
              </div>
              <div className={styles.formSells__column}>
                <h2 className={styles.formSells__title}>По дате:</h2>
                <div className={styles.formSells__item}>
                  <span className={styles.formSells__text}>От</span>
                  <input
                    type="datetime-local"
                    className={clsx(
                      styles.formSells__input,
                      styles.formSells__input_date,
                      "input"
                    )}
                  />
                  <span className={styles.formSells__text}>до</span>
                  <input
                    type="datetime-local"
                    className={clsx(
                      styles.formSells__input,
                      styles.formSells__input_date,
                      "input"
                    )}
                  />
                </div>
                <div className={styles.formSells__item}>
                  <button type={"submit"} className="button button_success">
                    Найти
                  </button>
                  <button type={"reset"} className="button button_red">
                    Сбросить поиск
                  </button>
                </div>
                <div
                  className={clsx(
                    styles.formSells__item,
                    styles.formSells__item_column
                  )}
                >
                  <p
                    className={clsx(
                      styles.formSells__text,
                      styles.formSells__text_bold
                    )}
                  >
                    0
                  </p>
                  <p className={styles.formSells__text}>результатов найдено</p>
                </div>
                <div
                  className={clsx(
                    styles.formSells__item,
                    styles.formSells__item_column
                  )}
                >
                  <p
                    className={clsx(
                      styles.formSells__text,
                      styles.formSells__text_bold
                    )}
                  >
                    0₽
                  </p>
                  <p className={styles.formSells__text}>общая сумма покупок</p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className={clsx(styles.sells__row, "page__row")}>
          <div className={clsx(styles.sells__actions, styles.actionsSells)}>
            <div className={clsx(styles.actionsSells__pagging, "pagging")}>
              <button disabled type="button" className="pagging__arrow">
                Назад
              </button>
              <ul className="pagging__list">
                <li>
                  <button type="button" className="pagging__item _active">
                    1
                  </button>
                </li>
                <li>
                  <button type="button" className="pagging__item">
                    2
                  </button>
                </li>
                <li>
                  <button type="button" className="pagging__item">
                    3
                  </button>
                </li>
              </ul>
              <button type="button" className="pagging__arrow">
                Вперед
              </button>
            </div>
            <div className={clsx(styles.actionsSells__table, "table-blue")}>
              <table className="table-blue__content">
                <thead className="table-blue__head">
                  <tr className="table-blue__tr">
                    <th className="table-blue__th">Время</th>
                    <th className="table-blue__th">Товар</th>
                    <th className="table-blue__th">Категория</th>
                    <th className="table-blue__th">Оплачено с</th>
                    <th className="table-blue__th">Цена</th>
                    <th className="table-blue__th" style={{ width: "8%" }}>
                      Кол-во
                    </th>
                    <th className="table-blue__th">Связь</th>
                    <th className="table-blue__th">Платформа</th>
                    <th className="table-blue__th"></th>
                  </tr>
                </thead>
                <tbody className="table-blue__body">
                  <tr className="table-blue__tr">
                    <td
                      className="table-blue__td table-blue__td_center table-blue__td_bold"
                      colSpan={9}
                    >
                      Здесь пока пусто
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={clsx(styles.actionsSells__pagging, "pagging")}>
              <button disabled type="button" className="pagging__arrow">
                Назад
              </button>
              <ul className="pagging__list">
                <li>
                  <button type="button" className="pagging__item _active">
                    1
                  </button>
                </li>
                <li>
                  <button type="button" className="pagging__item">
                    2
                  </button>
                </li>
                <li>
                  <button type="button" className="pagging__item">
                    3
                  </button>
                </li>
              </ul>
              <button type="button" className="pagging__arrow">
                Вперед
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellsPage;
