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
                      Прибыль сегодня
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
                      Прибыль с начала недели
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
                      Прибыль с начала месяца
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
                    <div className={styles.itemStat__title}>Всего прибыль</div>
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
        <div className={clsx(styles.brief__row, "page__row")}>
          <div className={clsx(styles.brief__stats, styles.briefStats)}>
            <h2 className={styles.briefStats__title}>Средние значения</h2>
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
                    <div className={styles.itemStat__title}>
                      Средняя выручка в день
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
                      Средняя выручка в неделю
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
                      Средняя прибыль в день
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
                    <div className={styles.itemStat__title}>
                      Средняя прибыль в неделю
                    </div>
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
        <div
          className={clsx(
            styles.brief__row,
            styles.brief__row_margin,
            "page__row"
          )}
        >
          <div className={clsx(styles.brief__stats, styles.briefStats)}>
            <h2 className={styles.briefStats__title}>Возвраты</h2>
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
                    <div className={styles.itemStat__title}>
                      Возвратов сегодня
                    </div>
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
                      Возвратов с начала недели
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
                      Возвратов с начала месяца
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
                    <div className={styles.itemStat__title}>
                      Всего возвратов
                    </div>
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
            </div>
          </div>
        </div>
        <div className={clsx(styles.brief__row, "page__row")}>
          <div className={clsx(styles.brief__chartBrief, styles.chartBrief)}>
            <div className={styles.chartBrief__row}>
              <div className={styles.chartBrief__item}>
                <div className={styles.chartBrief__card}>
                  <div
                    className={clsx(
                      styles.chartBrief__header,
                      styles.chartBrief__header_between
                    )}
                  >
                    <h4 className={styles.chartBrief__title}>
                      Прибыль по дням
                    </h4>
                    <p className={styles.chartBrief__date}>Ноябрь 2022</p>
                  </div>
                  <div className={styles.chartBrief__gain}>
                    <div className={styles.chartBrief__column}>
                      <div className={styles.chartBrief__info}>
                        <div className={styles.chartBrief__subtitle}>
                          Эти 7 дней
                        </div>
                        <div className={styles.chartBrief__value}>
                          0.0₽
                          <span className={styles.chartBrief__reject}>
                            0%{" "}
                            <span
                              className={clsx(
                                styles.chartBrief__icon,
                                "_icon-arrow-down"
                              )}
                            ></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.chartBrief__item}>
                <div className={styles.chartBrief__card}></div>
                <div className={styles.chartBrief__card}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(styles.brief__row, "page__row")}>
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
                    <div className={styles.itemStat__title}>
                      Сумма реф. отчислений за последние сутки
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
                      Сумма реф. отчислений за последние 7 дней
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
                      Сумма реф. отчислений за последние 30 дней
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
                    <div className={styles.itemStat__title}>
                      Общая сумма реф. отчислений
                    </div>
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
        <div
          className={clsx(
            styles.brief__row,
            styles.brief__row_margin,
            "page__row"
          )}
        >
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
                    <div className={styles.itemStat__title}>
                      Пополнения бота за сутки
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
                      Пополнения бота за последние 7 дней
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
                      Пополнения бота за последние 30 дней
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
                    <div className={styles.itemStat__title}>
                      Общая сумма пополнений бота
                    </div>
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
        <div className={clsx(styles.brief__row, "page__row")}>
          <div className={clsx(styles.brief__sales, styles.salesBrief)}>
            <div className={styles.salesBrief__header}>
              <h2 className={styles.salesBrief__title}>Последние продажи</h2>
              <div className={styles.salesBrief__date}>Ноябрь 2022</div>
            </div>
            <div className={styles.salesBrief__info}>
              <div className={styles.salesBrief__content}>
                <h3 className={styles.salesBrief__subtitle}>Ноябрь 2022</h3>
                <p className={styles.salesBrief__text}>Сводка продаж</p>
              </div>
              <div className={styles.salesBrief__price}>0₽</div>
            </div>
            <div className={styles.salesBrief__table}>
              <table className={styles.salesBrief__wrapper}>
                <thead className={styles.salesBrief__head}>
                  <tr className={styles.salesBrief__tr}>
                    <th className={styles.salesBrief__th}>Наименование</th>
                    <th className={styles.salesBrief__th}>Кол-во</th>
                    <th className={styles.salesBrief__th}>Прибыль</th>
                    <th className={styles.salesBrief__th}>Время</th>
                  </tr>
                </thead>
                <tbody className={styles.salesBrief__body}>
                  <tr className={styles.salesBrief__tr}>
                    <td
                      colSpan={5}
                      className={clsx(
                        styles.salesBrief__td,
                        styles.salesBrief__td_center
                      )}
                    >
                      В этом месяце пока нет продаж :(
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BriefingPage;
