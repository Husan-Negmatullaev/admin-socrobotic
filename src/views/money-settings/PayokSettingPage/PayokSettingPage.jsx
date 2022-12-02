import React from "react";
import clsx from "clsx";

import styles from "./PayokSettingPage.module.scss";

const PayokSettingPage = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={clsx(styles.payok, "page")}>
      <div className={clsx(styles.payok__body, "page__body")}>
        <div className={clsx(styles.payok__row, "page__row")}>
          <div className={styles.payok__header}>
            <h1 className={clsx(styles.payok__title, "title title_medium")}>
              Настройки <a className={styles.payok__link} href={"https://payok.io/?referal=F5A061"} target={"_blank"} rel={"noreferrer"}>payok.io</a>
            </h1>
          </div>
          <form
            onSubmit={handleFormSubmit}
            className={clsx(styles.payok__form, styles.formPayok)}
          >
            <div className={styles.formPayok__body}>
              <div className={styles.formPayok__row}>
                <div className={styles.formPayok__column}>
                  <label htmlFor={"0"} className={styles.formPayok__label}>
                    ID проекта
                  </label>
                </div>
                <div className={styles.formPayok__column}>
                  <input
                    id={"0"}
                    type="text"
                    className={clsx(styles.formPayok__input, "input")}
                    placeholder={"1234"}
                  />
                </div>
              </div>
              <div className={styles.formPayok__row}>
                <div className={styles.formPayok__column}>
                  <label htmlFor={"1"} className={styles.formPayok__label}>
                    Секретный ключ
                  </label>
                </div>
                <div className={styles.formPayok__column}>
                  <input
                    id={"1"}
                    type="password"
                    className={clsx(styles.formPayok__input, "input")}
                    placeholder={"xxx"}
                  />
                </div>
              </div>
              <div
                className={clsx(
                  styles.formPayok__row,
                  styles.formPayok__row_right
                )}
              >
                <div
                  className={clsx(
                    styles.formPayok__column,
                    styles.formPayok__column_min
                  )}
                >
                  <div className={styles.formPayok__buttons}>
                    <button
                      type="button"
                      className={clsx(
                        styles.formPayok__button,
                        "button button_success"
                      )}
                    >
                      Сохранить
                    </button>
                    <button
                      type="button"
                      className={clsx(
                        styles.formPayok__button,
                        "button button_red"
                      )}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PayokSettingPage;
