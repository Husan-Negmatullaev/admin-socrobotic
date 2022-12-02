import React from "react";
import clsx from "clsx";

import styles from "./UMoneySettingPage.module.scss";

const UMoneySettingPage = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={clsx(styles.money, "page")}>
      <div className={clsx(styles.money__body, "page__body")}>
        <div className={clsx(styles.money__row, "page__row")}>
          <div className={styles.money__header}>
            <h1 className={clsx(styles.money__title, "title title_medium")}>
              Настройки ЮMoney/Карта
            </h1>
          </div>
          <form
            onSubmit={handleFormSubmit}
            className={clsx(styles.money__form, styles.formMoney)}
          >
            <div className={styles.formMoney__body}>
              <div className={styles.formMoney__row}>
                <div className={styles.formMoney__column}>
                  <label htmlFor={"0"} className={styles.formMoney__label}>
                    Номер кошелька
                  </label>
                </div>
                <div className={styles.formMoney__column}>
                  <input
                    id={"0"}
                    type="text"
                    className={clsx(styles.formMoney__input, "input")}
                    placeholder={"1234"}
                  />
                </div>
              </div>
              <div className={styles.formMoney__row}>
                <div className={styles.formMoney__column}>
                  <label htmlFor={"1"} className={styles.formMoney__label}>
                    Секрет
                  </label>
                </div>
                <div className={styles.formMoney__column}>
                  <input
                    id={"1"}
                    type="password"
                    className={clsx(styles.formMoney__input, "input")}
                    placeholder={"xxx"}
                  />
                </div>
              </div>
              <div className={clsx(styles.formMoney__row, styles.formMoney__row_right)}>
                <div className={clsx(styles.formMoney__column, styles.formMoney__column_min)}>
                  <div className={styles.formMoney__buttons}>
                    <button type="button" className={clsx(styles.formMoney__button, "button button_success")}>Сохранить</button>
                    <button type="button" className={clsx(styles.formMoney__button, "button button_red")}>Удалить</button>
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

export default UMoneySettingPage;
