import React from "react";
import clsx from "clsx";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import styles from "./ProviderNewPositionPage.module.scss";
import uploadIcon from "@images/icons/cloud-icon.svg";

const Popup = withReactContent(Swal);

const ProviderNewPositionPage = () => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const openPopup = () =>
    Popup.fire({
      html: (
        <form className={styles.formPopup} onSubmit={handleFormSubmit}>
          <h4 className={clsx(styles.formPopup__title, "title title_medium")}>
            Загрузка фотографии
          </h4>
          <label className={styles.formPopup__image} htmlFor="0i:0">
            <img src={uploadIcon} alt="" />
          </label>
          <h4 className={clsx(styles.formPopup__title, "title title_medium")}>
            Перетащите файл
          </h4>
          <input
            accept={"image/png, image/gif, image/jpeg"}
            id="0i:0"
            type={"file"}
            className={styles.formPopup__input_image}
          />
          <h4 className={clsx(styles.formPopup__title, "title title_medium")}>
            ИЛИ
          </h4>
          <input
            className={clsx(styles.formPopup__input, "input")}
            type="text"
            placeholder={"Введите ссылку"}
          />
          <button type={"submit"} className="button button_success">
            Загрузить
          </button>
        </form>
      ),
      width: 400,
      showConfirmButton: false,
    });

  return (
    <div className={clsx(styles.provider, "page")}>
      <div className={clsx(styles.provider__body, "page__body")}>
        <div className={clsx(styles.provider__row, "page__row")}>
          <div className={styles.provider__header}>
            <h1 className={clsx(styles.provider__title, "title title_big")}>
              Запрос новой позиции{" "}
            </h1>
            <p className={clsx(styles.provider__text, "small")}>
              Данный запрос будет отправлен владельцу магазина, если он
              согласиться, то новая товарная позиция добавиться в магазин.
            </p>
          </div>
          <form
            onSubmit={handleFormSubmit}
            className={clsx(styles.provider__form, styles.formProvider)}
          >
            <div className={styles.formProvider__body}>
              <div className={styles.formProvider__row}>
                <div
                  className={clsx(
                    styles.formProvider__column,
                    styles.formProvider__column_label
                  )}
                >
                  <label htmlFor="0" className={styles.formProvider__label}>
                    Наименование
                  </label>
                </div>
                <div className={styles.formProvider__column}>
                  <input
                    id={"0"}
                    type="text"
                    className={clsx(styles.formProvider__input, "input")}
                    placeholder={"Название"}
                  />
                </div>
              </div>
              <div className={styles.formProvider__row}>
                <div
                  className={clsx(
                    styles.formProvider__column,
                    styles.formProvider__column_label
                  )}
                >
                  <label htmlFor="1" className={styles.formProvider__label}>
                    Описание
                  </label>
                </div>
                <div className={styles.formProvider__column}>
                  <textarea
                    id={"1"}
                    type="text"
                    className={clsx(styles.formProvider__textarea, "textarea")}
                    placeholder={"Описание"}
                  />
                  <div className={styles.formProvider__buttons}>
                    <button
                      className={clsx(
                        styles.formProvider__button,
                        "button button_blue"
                      )}
                      type="button"
                      onClick={openPopup}
                    >
                      Добваить фото
                    </button>
                    <button
                      className={clsx(
                        styles.formProvider__button,
                        "button button_red-outline"
                      )}
                      type="reset"
                    >
                      Очистить
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.formProvider__row}>
                <div
                  className={clsx(
                    styles.formProvider__column,
                    styles.formProvider__column_label
                  )}
                >
                  <label htmlFor="2" className={styles.formProvider__label}>
                    Категория
                  </label>
                </div>
                <div className={styles.formProvider__column}>
                  <select
                    id={"2"}
                    className={clsx(styles.formProvider__select, "select")}
                    placeholder={"Описание"}
                  >
                    <option value="0">Без категории</option>
                    <option value="1">Some title</option>
                    <option value="2">Some title 2</option>
                  </select>
                </div>
              </div>
              <div className={styles.formProvider__row}>
                <div
                  className={clsx(
                    styles.formProvider__column,
                    styles.formProvider__column_label
                  )}
                >
                  <label htmlFor="3" className={styles.formProvider__label}>
                    Цена
                  </label>
                  <p className={clsx(styles.formProvider__text, "text")}>
                    Для покупателя
                  </p>
                </div>
                <div className={styles.formProvider__column}>
                  <input
                    id={"3"}
                    placeholder={"Цена"}
                    type={"text"}
                    className={clsx(styles.formProvider__input, "input")}
                  />
                </div>
              </div>
              <div className={styles.formProvider__row}>
                <div
                  className={clsx(
                    styles.formProvider__column,
                    styles.formProvider__column_label
                  )}
                >
                  <label htmlFor="4" className={styles.formProvider__label}>
                    Цена
                  </label>
                  <p className={clsx(styles.formProvider__text, "text")}>
                    Ваша прибыль
                  </p>
                </div>
                <div className={styles.formProvider__column}>
                  <input
                    id={"4"}
                    placeholder={"Сколько получаете вы "}
                    type={"text"}
                    className={clsx(styles.formProvider__input, "input")}
                  />
                </div>
              </div>
              <div className={styles.formProvider__row}>
                <div
                  className={clsx(
                    styles.formProvider__column,
                    styles.formProvider__column_label
                  )}
                >
                  <label htmlFor="5" className={styles.formProvider__label}>
                    Минимум для заказа
                  </label>
                </div>
                <div className={styles.formProvider__column}>
                  <input
                    id={"5"}
                    placeholder={"1"}
                    type={"text"}
                    className={clsx(styles.formProvider__input, "input")}
                  />
                  <div className={styles.formProvider__actions}>
                    <div className={styles.formProvider__action}>
                      <input
                        type="checkbox"
                        id={"6"}
                        className={styles.formProvider__checkbox}
                      />
                      <label
                        htmlFor="6"
                        className={clsx(
                          styles.formProvider__label,
                          styles.formProvider__label_bold,
                          styles.formProvider__label_margin
                        )}
                      >
                        Скидка на опт
                      </label>
                    </div>
                    <div className={styles.formProvider__action}>
                      <input
                        type="checkbox"
                        id={"7"}
                        className={styles.formProvider__checkbox}
                      />
                      <label
                        htmlFor="7"
                        className={clsx(
                          styles.formProvider__label,
                          styles.formProvider__label_margin,
                          styles.formProvider__label_bold
                        )}
                      >
                        Не показывать поьзователям, если товар закончился
                      </label>
                    </div>
                  </div>
                  <div className={styles.formProvider__buttons}>
                    <button
                      type="submit"
                      className={clsx(
                        styles.formProvider__button,
                        "button button_success"
                      )}
                    >
                      Добавить
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

export default ProviderNewPositionPage;
