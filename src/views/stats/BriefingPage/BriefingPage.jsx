import React from "react";
import clsx from "clsx";

import styles from "./BriefingPage.module.scss";

const BriefingPage = () => {
  return (
    <div className={clsx(styles.brief, "page")}>
      <div className={clsx(styles.brief__body, "page__body")}>
        <div className={clsx(styles.brief__row, "page__row")}>
          <div className={styles.brief__header}>
            <h1 className={styles.brief__title}>Сводка</h1>
            <button
              type="button"
              className={clsx(styles.brief__button, "button-link")}
            >
              Администрация
            </button>
          </div>
          <div className={clsx(styles.brief__stats, styles.briefStats)}>
            <div className={styles.briefStats__body}>
              <div className={clsx(styles.briefStats__item, styles.itemStat)}>
                <div className={styles.itemStat__header}>
                  <div className={styles.itemStat__info}>
                    <span
                      className={clsx(
                        styles.itemStat__icon,
                        "_icon-piggy-bank"
                      )}
                    ></span>
                    <div className={styles.itemStat__title}>Продаж сегодня</div>
                  </div>
                  <div className={styles.itemStat__count}>0</div>
                </div>
                <div className={styles.itemStat__statusbar}>
                  <div
                    role="progressbar"
                    style={{ width: "25%" }}
                    className={clsx(
                      styles.itemStat__bar,
                      styles.itemStat__bar_green
                    )}
                  ></div>
                </div>
              </div>
              <div className={clsx(styles.briefStats__item, styles.itemStat)}>
                <div className={styles.itemStat__header}>
                  <div className={styles.itemStat__info}>
                    <span
                      className={clsx(
                        styles.itemStat__icon,
                        "_icon-piggy-bank"
                      )}
                    ></span>
                    <div className={styles.itemStat__title}>
                      Продаж с начала недели
                    </div>
                  </div>
                  <div className={styles.itemStat__count}>0</div>
                </div>
                <div className={styles.itemStat__statusbar}>
                  <div
                    role="progressbar"
                    style={{ width: "45%" }}
                    className={clsx(
                      styles.itemStat__bar,
                      styles.itemStat__bar_blue
                    )}
                  ></div>
                </div>
              </div>
              <div className={clsx(styles.briefStats__item, styles.itemStat)}>
                <div className={styles.itemStat__header}>
                  <div className={styles.itemStat__info}>
                    <span
                      className={clsx(
                        styles.itemStat__icon,
                        "_icon-piggy-bank"
                      )}
                    ></span>
                    <div className={styles.itemStat__title}>
                      Продаж с начала месяца
                    </div>
                  </div>
                  <div className={styles.itemStat__count}>0</div>
                </div>
                <div className={styles.itemStat__statusbar}>
                  <div
                    role="progressbar"
                    style={{ width: "60%" }}
                    className={clsx(
                      styles.itemStat__bar,
                      styles.itemStat__bar_yellow
                    )}
                  ></div>
                </div>
              </div>
              <div className={clsx(styles.briefStats__item, styles.itemStat)}>
                <div className={styles.itemStat__header}>
                  <div className={styles.itemStat__info}>
                    <span
                      className={clsx(
                        styles.itemStat__icon,
                        "_icon-piggy-bank"
                      )}
                    ></span>
                    <div className={styles.itemStat__title}>Всего продаж</div>
                  </div>
                  <div className={styles.itemStat__count}>0</div>
                </div>
                <div className={styles.itemStat__statusbar}>
                  <div
                    role="progressbar"
                    style={{ width: "100%" }}
                    className={clsx(
                      styles.itemStat__bar,
                      styles.itemStat__bar_red
                    )}
                  ></div>
                </div>
              </div>
              <div className={clsx(styles.briefStats__item, styles.itemStat)}>
                <div className={styles.itemStat__header}>
                  <div className={styles.itemStat__info}>
                    <span
                      className={clsx(
                        styles.itemStat__icon,
                        "_icon-piggy-bank"
                      )}
                    ></span>
                    <div className={styles.itemStat__title}>
                      Выручка сегодня
                    </div>
                  </div>
                  <div className={styles.itemStat__count}>0₽</div>
                </div>
                <div className={styles.itemStat__statusbar}>
                  <div
                    role="progressbar"
                    style={{ width: "25%" }}
                    className={clsx(
                      styles.itemStat__bar,
                      styles.itemStat__bar_green
                    )}
                  ></div>
                </div>
              </div>
              <div className={clsx(styles.briefStats__item, styles.itemStat)}>
                <div className={styles.itemStat__header}>
                  <div className={styles.itemStat__info}>
                    <span
                      className={clsx(
                        styles.itemStat__icon,
                        "_icon-piggy-bank"
                      )}
                    ></span>
                    <div className={styles.itemStat__title}>
                      Выручка с начала недели
                    </div>
                  </div>
                  <div className={styles.itemStat__count}>0₽</div>
                </div>
                <div className={styles.itemStat__statusbar}>
                  <div
                    role="progressbar"
                    style={{ width: "45%" }}
                    className={clsx(
                      styles.itemStat__bar,
                      styles.itemStat__bar_blue
                    )}
                  ></div>
                </div>
              </div>
              <div className={clsx(styles.briefStats__item, styles.itemStat)}>
                <div className={styles.itemStat__header}>
                  <div className={styles.itemStat__info}>
                    <span
                      className={clsx(
                        styles.itemStat__icon,
                        "_icon-piggy-bank"
                      )}
                    ></span>
                    <div className={styles.itemStat__title}>
                      Выручка с начала месяца
                    </div>
                  </div>
                  <div className={styles.itemStat__count}>0₽</div>
                </div>
                <div className={styles.itemStat__statusbar}>
                  <div
                    role="progressbar"
                    style={{ width: "60%" }}
                    className={clsx(
                      styles.itemStat__bar,
                      styles.itemStat__bar_yellow
                    )}
                  ></div>
                </div>
              </div>
              <div className={clsx(styles.briefStats__item, styles.itemStat)}>
                <div className={styles.itemStat__header}>
                  <div className={styles.itemStat__info}>
                    <span
                      className={clsx(
                        styles.itemStat__icon,
                        "_icon-piggy-bank"
                      )}
                    ></span>
                    <div className={styles.itemStat__title}>Всего выручка</div>
                  </div>
                  <div className={styles.itemStat__count}>0₽</div>
                </div>
                <div className={styles.itemStat__statusbar}>
                  <div
                    role="progressbar"
                    style={{ width: "100%" }}
                    className={clsx(
                      styles.itemStat__bar,
                      styles.itemStat__bar_red
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BriefingPage;
