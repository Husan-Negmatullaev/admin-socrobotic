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
      </div>
    </div>
  );
};

export default ViewsPage;
