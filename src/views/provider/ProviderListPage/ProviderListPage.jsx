import React from "react";
import clsx from "clsx";

import styles from "./ProviderListPage.module.scss";
import {Link} from "react-router-dom";

const ProviderListPage = () => {
  return (
    <div className={clsx(styles.provider, "page")}>
      <div className={clsx(styles.provider__body, "page__body")}>
        <div className={clsx(styles.provider__row, "page__row")}>
          <div className={styles.provider__content}>
            <div className={clsx(styles.provider__item, styles.itemProvider)}>
              <div className={styles.itemProvider__header}>
                <h3
                  className={clsx(
                    styles.itemProvider__title,
                    "title title_medium"
                  )}
                >
                  Поставляемые позиции
                </h3>
                <p className={styles.itemProvider__text}>
                  для машазина: someshop
                </p>
              </div>
              <div className={clsx(styles.itemProvider__table, "table-blue")}>
                <table className="table-blue__content">
                  <thead className="table-blue__head">
                    <tr className="table-blue__tr">
                      <th className="table-blue__th">Категория</th>
                      <th className="table-blue__th">Товар</th>
                      <th className="table-blue__th">Цена</th>
                      <th className="table-blue__th">Отчисления поставщику</th>
                      <th className="table-blue__th">Товары на продаже</th>
                    </tr>
                  </thead>
                  <tbody className="table-blue__body">
                    <tr className="table-blue__tr">
                      <td
                        className="table-blue__td table-blue__td_center"
                        colSpan={5}
                      >
                        Вы пока ничего не поставляете
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={clsx(styles.provider__item, styles.itemProvider)}>
              <div className={styles.itemProvider__header}>
                <h3
                  className={clsx(
                    styles.itemProvider__title,
                    "title title_medium"
                  )}
                >
                  Ваши запросы на новые позиции
                </h3>
                <p className={styles.itemProvider__text}>
                  <Link
                    to={"new-position"}
                    className={clsx(styles.itemProvider__button, "button button_success-outline")}
                  >
                    Новый запрос позиции
                  </Link>
                </p>
              </div>
              <div className={clsx(styles.itemProvider__table, "table-blue")}>
                <table className="table-blue__content">
                  <thead className="table-blue__head">
                    <tr className="table-blue__tr">
                      <th className="table-blue__th">Товар</th>
                      <th className="table-blue__th">Категория</th>
                      <th className="table-blue__th">Цена</th>
                      <th className="table-blue__th">Вознаграждение</th>
                      <th className="table-blue__th">Статус</th>
                    </tr>
                  </thead>
                  <tbody className="table-blue__body">
                    <tr className="table-blue__tr">
                      <td
                        className="table-blue__td"
                        colSpan={5}
                      >
                        Пока что вы не запрашивали ни одной новой позиции
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderListPage;
