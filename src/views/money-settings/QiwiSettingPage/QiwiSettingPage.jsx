import React from "react";
import clsx from "clsx";

import styles from "./QiwiSettingPage.module.scss";

const QiwiSettingPage = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={clsx(styles.qiwi, "page")}>
      <div className={clsx(styles.qiwi__body, "page__body")}>
        <div className={clsx(styles.qiwi__row, "page__row")}>
          <h1 className={clsx(styles.qiwi__title, "title title_medium")}>
            Настройки кошелька QIWI
          </h1>
          <form
            onSubmit={handleFormSubmit}
            className={clsx(styles.qiwi__form, styles.formQiwi)}
          >
            <div className={styles.formQiwi__body}>
              <div className={styles.formQiwi__row}>
                <div className={styles.formQiwi__column}>
                  <label htmlFor="0" className={styles.formQiwi__label}>
                    Номер кошелька
                  </label>
                  <p className={clsx(styles.formQiwi__text, "text")}>
                    Или никнейм
                  </p>
                </div>
                <div className={styles.formQiwi__column}>
                  <input
                    id={"0"}
                    placeholder={"+78000000000"}
                    type="text"
                    className={clsx(styles.formQiwi__input, "input")}
                  />
                </div>
              </div>
              <div className={styles.formQiwi__row}>
                <div className={styles.formQiwi__column}>
                  <label htmlFor="1" className={styles.formQiwi__label}>
                    Токен
                  </label>
                  <p className={clsx(styles.formQiwi__text, "text")}>
                    При получении токена нужно указать разрешения &apos;Просмотр
                    истории платежей&apos; и &apos;Запрос информации о профиле кошелька&apos;.{" "}
                    <a
                      href={"https://qiwi.com/api"}
                      rel={"noreferrer"}
                      target={"_blank"}
                      className={"button-link"}
                    >
                      Ссылка
                    </a>
                  </p>
                </div>
                <div className={styles.formQiwi__column}>
                  <input
                    id={"1"}
                    placeholder={"xxx"}
                    type="text"
                    className={clsx(styles.formQiwi__input, "input")}
                  />
                </div>
              </div>
              <div className={styles.formQiwi__row}>
                <div className={styles.formQiwi__column}>
                  <label htmlFor="2" className={styles.formQiwi__label}>
                    Дизайн
                  </label>
                  <p className={clsx(styles.formQiwi__text, "text")}>
                    Чтобы использовать ваш дизайн, введите в поле &quot;Дизайн&quot; текст
                    в кавычках, полученную на странице
                    <a
                      href={"https://qiwi.com/p2p-admin/transfers/link"}
                      rel={"noreferrer"}
                      target={"_blank"}
                      className={"button-link"}
                    >
                      {" "}
                      настройка дизайна P2P{" "}
                    </a>
                    после текста &quot;themeCode&quot;:
                  </p>
                </div>
                <div className={styles.formQiwi__column}>
                  <input
                    id={"2"}
                    placeholder={"Aleksei-I3onxzS46V"}
                    type="text"
                    className={clsx(styles.formQiwi__input, "input")}
                  />
                </div>
              </div>
              <div
                className={clsx(
                  styles.formQiwi__row,
                  styles.formQiwi__row_right
                )}
              >
                <div
                  className={clsx(
                    styles.formQiwi__column,
                    styles.formQiwi__column_min
                  )}
                >
                  <div className={styles.formQiwi__item}>
                    <div className={styles.formQiwi__actions}>
                      <label
                        htmlFor={"3"}
                        className={clsx(
                          styles.formQiwi__label,
                          styles.formQiwi__label_bold
                        )}
                      >
                        Использовать p2p
                      </label>
                      <input
                        id={"3"}
                        type="checkbox"
                        className={styles.formQiwi__checkbox}
                      />
                    </div>
                  </div>
                  <div className={styles.formQiwi__item}>
                    <div className={styles.formQiwi__actions}>
                      <label
                        htmlFor={"4"}
                        className={clsx(
                          styles.formQiwi__label,
                          styles.formQiwi__label_bold
                        )}
                      >
                        Переводы без комментария
                      </label>
                      <input
                        id={"4"}
                        type="checkbox"
                        className={styles.formQiwi__checkbox}
                      />
                    </div>
                  </div>
                  <div className={styles.formQiwi__buttons}>
                    <button
                        type="submit"
                        className={clsx(
                            styles.formQiwi__button,
                            "button button_success"
                        )}
                    >
                      Созранить
                    </button>
                    <button
                        type="reset"
                        className={clsx(styles.formQiwi__button, "button button_red")}
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

export default QiwiSettingPage;
