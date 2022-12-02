import React from "react";
import clsx from "clsx";

import styles from "./ProviderSalesStatisticsPage.module.scss";

const ProviderSalesStatisticsPage = () => {
  return (
    <div className={clsx(styles.sales, "page")}>
      <div className={clsx(styles.sales__body, "page__body")}>
        <div className={clsx(styles.sales__row, "page__row")}>
          <div className={styles.sales__header}>
            <h1 className={clsx(styles.sales__title, "title title_big")}>
              Статистика продаж
            </h1>
            <p className={clsx(styles.sales__text, "small")}>
              для магазина yoooooo
            </p>
          </div>
          <form className={clsx(styles.sales__form, styles.formSales)}>
            <div className={styles.formSales__body}>
              <div className={styles.formSales__row}>
                <div className={styles.formSales__column}>
                  <label htmlFor={"0"} className={styles.formSales__label}>
                    Категория
                  </label>
                  <select
                    id={"0"}
                    className={clsx(styles.formSales__select, "select")}
                  >
                    <option value="0">Без разницы</option>
                    <option value="1">Some title 1</option>
                    <option value="2">Some title 2</option>
                  </select>
                </div>
                <div className={styles.formSales__column}>
                  <h3 className={styles.formSales__title}>По дате: </h3>
                  <div className={styles.formSales__dates}>
                    <label
                      htmlFor={"1"}
                      className={clsx(
                        styles.formSales__label,
                        styles.formSales__label_min
                      )}
                    >
                      От
                    </label>
                    <input
                      id={"1"}
                      type={"datetime-local"}
                      className={clsx(styles.formSales__date, "input")}
                    />
                    <label
                      htmlFor={"2"}
                      className={clsx(
                        styles.formSales__label,
                        styles.formSales__label_min
                      )}
                    >
                      до
                    </label>
                    <input
                      id={"2"}
                      type={"datetime-local"}
                      className={clsx(styles.formSales__date, "input")}
                    />
                  </div>
                </div>
                <div className={styles.formSales__column}>
                  <div className={styles.formSales__buttons}>
                    <button
                      type="submit"
                      className={clsx(
                        styles.formSales__button,
                        "button button_success-outline"
                      )}
                    >
                      Показать
                    </button>
                    <button
                      type="reset"
                      className={clsx(
                        styles.formSales__button,
                        "button button_red-outline"
                      )}
                    >
                      Очистить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className={clsx(styles.sales__table, "table table_solid")}>
            <table className="table__wrapper">
              <thead className="table__head">
                <tr className="table__tr">
                  <th className="table__th">Наименование</th>
                  <th className="table__th">Цена</th>
                  <th className="table__th">К выплате</th>
                  <th className="table__th">Время</th>
                </tr>
              </thead>
              <tbody className="table__body">
                <tr className="table__tr">
                  <td className="table__td table__td_center" colSpan={4}>Пока что ваших товаров никто не купил</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderSalesStatisticsPage;
