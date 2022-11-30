import React from "react";
import clsx from "clsx";

import styles from "./ListHeadings.module.scss";
import HeadingTables from "../../../components/tables/HeadingTables/HeadingTables";

const ListHeadings = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={clsx(styles.headings, "page")}>
      <div className={clsx(styles.headings__body, "page__body")}>
        <div className={clsx(styles.headings__row, "page__row")}>
          <div className={styles.headings__header}>
            <h1 className={styles.headings__title}>Some title</h1>
            <p className={clsx(styles.headings__text, "small")}>
              Эти товары получит пользователь после оплаты
            </p>
          </div>
          <form
            onSubmit={handleFormSubmit}
            className={clsx(styles.headings__form, styles.formHeader)}
          >
            <div className={styles.formHeader__row}>
              <div className={styles.formHeader__column}>
                <input
                  type={"text"}
                  className={clsx(styles.formHeader__input, "input")}
                  placeholder={"Поисковой запрос от 3 символов"}
                />
              </div>
              <div className={styles.formHeader__column}>
                <div className={styles.formHeader__buttons}>
                  <button
                    type={"button"}
                    className={clsx(
                      styles.formHeader__button,
                      "button button_success"
                    )}
                  >
                    Поиск
                  </button>
                  <button
                    type={"button"}
                    className={clsx(
                      styles.formHeader__button,
                      "button button_blue-outline"
                    )}
                  >
                    Скачать все товары
                  </button>
                </div>
              </div>
            </div>
          </form>
          <HeadingTables classes={styles.headings__table} />
          <div className={clsx(styles.headings__pagging, "pagging")}>
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
  );
};

export default ListHeadings;
