import React from "react";
import clsx from "clsx";

import { LineChart } from "@components/chart";

import styles from "./PannelPage.module.scss";

const PannelPage = () => {
  return (
    <div className={styles.mainPannel}>
      <div className={styles.mainPannel__body}>
        <div className={styles.mainPannel__row}>
          <h4 className={clsx(styles.mainPannel__title, "title")}>Сводка</h4>
          <div className={clsx(styles.mainPannel__stats, "stats-info")}>
            <div className="stats-info__item">
              <div className="stats-info__title">0 руб.</div>
              <p className="stats-info__text">заработано сегодня</p>
            </div>
            <div className="stats-info__item">
              <div className="stats-info__title">0 руб.</div>
              <p className="stats-info__text">заработано сегодня</p>
            </div>
            <div className="stats-info__item">
              <div className="stats-info__title">0 руб.</div>
              <p className="stats-info__text">заработано сегодня</p>
            </div>
            <div className="stats-info__item">
              <div className="stats-info__title">0 руб.</div>
              <p className="stats-info__text">заработано сегодня</p>
            </div>
          </div>
          <div className={styles.mainPannel__chart}>
            <LineChart />
          </div>
          <div className={clsx(styles.mainPannel__stats, "stats-info")}>
            <div className="stats-info__item">
              <div className="stats-info__title">1 пользователей.</div>
              <p className="stats-info__text">сегодня</p>
            </div>
            <div className="stats-info__item">
              <div className="stats-info__title">2 пользователей.</div>
              <p className="stats-info__text">за 7 дней</p>
            </div>
            <div className="stats-info__item">
              <div className="stats-info__title">2 пользователей.</div>
              <p className="stats-info__text">за 30 дней</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PannelPage;