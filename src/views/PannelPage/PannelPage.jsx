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
        <div className={styles.mainPannel__row}>
          <h3 className={clsx(styles.mainPannel__title, "title title_medium")}>
            Пользователи бота
          </h3>
          <p className={clsx(styles.mainPannel__text, "small")}>На этой странице список всех людей, которые ввели /start в вашем боте</p>
          <div className={clsx(styles.mainPannel__stats, "stats-info")}>
            <div className="stats-info__item">
              <div className="stats-info__title">1</div>
              <p className="stats-info__text">новых за сутки</p>
            </div>
            <div className="stats-info__item">
              <div className="stats-info__title">2</div>
              <p className="stats-info__text">новых за 7 дней</p>
            </div>
            <div className="stats-info__item">
              <div className="stats-info__title">2</div>
              <p className="stats-info__text">новых за 30 дней</p>
            </div>
            <div className="stats-info__item">
              <div className="stats-info__title">0 руб.</div>
              <p className="stats-info__text">всего пользователей</p>
            </div>
            <div className="stats-info__item">
              <div className="stats-info__title">2</div>
              <p className="stats-info__text">активных пользователей</p>
            </div>
            <div className="stats-info__item">
              <div className="stats-info__title">0</div>
              <p className="stats-info__text">неактивных пользователей</p>
            </div>
          </div>
        </div>
        <div className={styles.mainPannel__row}>
          <h3 className={clsx(styles.mainPannel__title, "title title_medium")}>
            Пополнить баланс по ID
          </h3>
          <div className={clsx(styles.mainPannel__formBalance, styles.formBalance)}>
            <div className={styles.formBalance__row}>
              <form className={styles.formBalance__column}>
                <span className={styles.formBalance__text}>Для ID</span>
                <input
                  type={"tel"}
                  inputMode={"numeric"}
                  autoComplete={"cc-number"}
                  placeholder={"00000000"}
                  className={clsx(styles.formBalance__input, "input")}
                />
                <span className={styles.formBalance__text}>добавить</span>
                <input
                  type={"tel"}
                  inputMode={"numeric"}
                  autoComplete={"cc-number"}
                  placeholder={"000"}
                  className={clsx(styles.formBalance__input, "input")}
                />
                <span className={styles.formBalance__text}>руб на баланс</span>
                <button type="button" className={clsx(styles.formBalance__button, "button button_success-outline")}>Готово</button>
              </form>
              <form className={styles.formBalance__column}>
                <span className={styles.formBalance__text}>Показать пользователя ID</span>
                <input
                  type={"tel"}
                  inputMode={"numeric"}
                  autoComplete={"cc-number"}
                  placeholder={"000"}
                  className={clsx(styles.formBalance__input, "input")}
                />
                <button type="button" className={clsx(styles.formBalance__button, "button button_success-outline")}>Готово</button>
              </form>
              <form className={clsx(styles.formBalance__column, styles.formBalance__column_direction)}>
                <div className={styles.formBalance__wrapper}>
                  <span className={styles.formBalance__text}>Показать пользователя ID</span>
                  <input
                    type={"tel"}
                    inputMode={"numeric"}
                    autoComplete={"cc-number"}
                    placeholder={"000"}
                    className={clsx(styles.formBalance__input, "input")}
                  />
                  <button type="button" className={clsx(styles.formBalance__button, "button button_success-outline")}>Готово</button>
                </div>
                <button type="button" className={clsx(styles.formBalance__button, "button button_grey-outline")}>Сбросить поиск</button>
              </form>
            </div>
          </div>
          <div className={clsx(styles.mainPannel__table, "table")}>
            <table className="table__wrapper">
              <thead className="table__head">
                <tr className="table__tr">
                  <th className="table__th">ID</th>
                  <th className="table__th">Логин</th>
                  <th className="table__th"><button type="button" className="table__button">Баланс</button></th>
                  <th className="table__th"><button type="button" className="table__button">Рефералы</button></th>
                  <th className="table__th"><button type="button" className="table__button">Заработано</button></th>
                  <th className="table__th"><button type="button" className="table__button">Потрачено</button></th>
                  <th className="table__th"><button type="button" className="table__button">Первый заход</button></th>
                  <th className="table__th"><button type="button" className="table__button">Реф. %</button></th>
                  <th className="table__th"><button type="button" className="table__button">Возвраты</button></th>
                  <th className="table__th"></th>
                </tr>
              </thead>
              <tbody className="table__body">
                <tr className="table__tr">
                  <td className="table__td">766811959</td>
                  <td className="table__td"><button type="button" className="table__button">@chatbotzero</button></td>
                  <td className="table__td"><button type="button" className="table__button">0₽</button></td>
                  <td className="table__td">0 (<button type="button" className="table__button">список</button>)</td>
                  <td className="table__td">0</td>
                  <td className="table__td">0₽ (<button type="button" className="table__button">покупки</button>)</td>
                  <td className="table__td">02.08.2022 в 10:32</td>
                  <td className="table__td"><button type="button" className="table__button">0%</button></td>
                  <td className="table__td">0</td>
                  <td className="table__td"><button className="button button_blue-outline">Написать</button></td>
                </tr>
                <tr className="table__tr">
                  <td className="table__td">766811959</td>
                  <td className="table__td"><button type="button" className="table__button">@chatbotzero</button></td>
                  <td className="table__td"><button type="button" className="table__button">0₽</button></td>
                  <td className="table__td">0 (<button type="button" className="table__button">список</button>)</td>
                  <td className="table__td">0</td>
                  <td className="table__td">0₽ (<button type="button" className="table__button">покупки</button>)</td>
                  <td className="table__td">02.08.2022 в 10:32</td>
                  <td className="table__td"><button type="button" className="table__button">0%</button></td>
                  <td className="table__td">0</td>
                  <td className="table__td"><button className="button button_blue-outline">Написать</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.mainPannel__row}>
          <div className={clsx(styles.mainPannel__users, styles.users)}>
            <button type="button" className={clsx(styles.users__button, "button button_success-outline _icon-download")}> Скачать всех пользователей списком</button>
            <p className={clsx(styles.users__text, "small")}>Формат: ID:Логин:Баланс</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PannelPage;