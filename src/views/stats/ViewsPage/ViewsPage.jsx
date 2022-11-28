import React from "react";
import clsx from "clsx";

import { CommonChart } from "@components/chart";

import styles from "./ViewsPage.module.scss";

const ViewsPage = () => {
  return (
    <div className={clsx(styles.views, "page")}>
      <div className={clsx(styles.views__body, "page__body")}>
        <div className={clsx(styles.views__row, "page__row")}>
          <div className={clsx(styles.views__charts, styles.chartsViews)}>
            <h1
              className={clsx(styles.chartsViews__title, "title title_large")}
            >
              Статистика просмотров
            </h1>
            <div className={styles.chartsViews__body}>
              <div className={styles.chartsViews__item}>
                <CommonChart />
              </div>
              <div className={styles.chartsViews__item}>
                <CommonChart />
              </div>
              <div className={styles.chartsViews__item}>
                <CommonChart />
              </div>
              <div className={styles.chartsViews__item}>
                <CommonChart />
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(styles.views__row, "page__row")}>
          <div
            className={clsx(
              styles.views__table,
              "table table_solid table_black"
            )}
          >
            <table className="table__wrapper">
              <thead className="table__head">
                <tr className="table__tr">
                  <th className="table__th">Дата</th>
                  <th className="table__th">IP (шифрованный)</th>
                  <th className="table__th">Откуда</th>
                  <th className="table__th">Страница</th>
                </tr>
              </thead>
              <tbody className="table__body">
                <tr className="table__tr">
                  <td className="table__td">28.11.2022 в 10:45</td>
                  <td className="table__td">
                    <button
                      type={"button"}
                      className={"button-link button-link_size"}
                    >
                      416.419.261.445
                    </button>
                  </td>
                  <td className="table__td">
                    <button
                      type={"button"}
                      className={"button-link button-link_size"}
                    >
                      https://anyshop.su/s/myshops?a=v...
                    </button>
                  </td>
                  <td className="table__td">
                    <button
                      type={"button"}
                      className={"button-link button-link_size"}
                    >
                      https://anyshop.su/s/myshops?a=views
                    </button>
                  </td>
                </tr>
                <tr className="table__tr">
                  <td className="table__td">28.11.2022 в 10:45</td>
                  <td className="table__td">
                    <button
                      type={"button"}
                      className={"button-link button-link_size"}
                    >
                      416.419.261.445
                    </button>
                  </td>
                  <td className="table__td">
                    <button
                      type={"button"}
                      className={"button-link button-link_size"}
                    >
                      https://anyshop.su/s/myshops?a=v...
                    </button>
                  </td>
                  <td className="table__td">
                    <button
                      type={"button"}
                      className={"button-link button-link_size"}
                    >
                      https://anyshop.su/s/myshops?a=views
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewsPage;
