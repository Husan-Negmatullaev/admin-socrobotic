import React from "react";
import clsx from "clsx";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import styles from "./NewHeading.module.scss";
import uploadIcon from "@images/icons/cloud-icon.svg";

const Popup = withReactContent(Swal);

const NewHeading = () => {
  const [isSpollerSetting, setIsSpollerSetting] = React.useState(false);
  const [isSaleShow, setIsSaleShow] = React.useState(false);

  const [isPosition, setIsPosition] = React.useState(true);
  const [isUser, setIsUser] = React.useState(true);

  const handleSubmitForm = (event) => {
    event.preventDefault();
  };

  const openPopup = () =>
    Popup.fire({
      html: (
        <form className={styles.formPopup} onSubmit={handleSubmitForm}>
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
    <div className={clsx(styles.heading, "page")}>
      <div className={clsx(styles.heading__body, "page__body")}>
        <div className={clsx(styles.heading__row, "page__row")}>
          <div className={styles.heading__header}>
            <h1 className={clsx(styles.heading__title, "title title_medium")}>
              Новая товарная позиция
            </h1>
            <p className={clsx(styles.heading__text, "small")}>
              Кстати, вы можете добавлять свои категории во вкладке &apos;Категории&apos;.
            </p>
          </div>
          <form
            onSubmit={handleSubmitForm}
            className={clsx(styles.heading__form, styles.formHeading)}
          >
            <div className={styles.formHeading__body}>
              <div className={styles.formHeading__row}>
                <div className={styles.formHeading__column}>
                  <label htmlFor={"0"} className={styles.formHeading__label}>
                    Наименование
                  </label>
                </div>
                <div className={styles.formHeading__column}>
                  <input
                    id={"0"}
                    type="text"
                    placeholder={"Название"}
                    className={clsx(styles.formHeading__input, "input")}
                  />
                </div>
              </div>
              <div
                className={clsx(
                  styles.formHeading__row,
                  styles.formHeading__row_start
                )}
              >
                <div className={styles.formHeading__column}>
                  <label htmlFor={"1"} className={styles.formHeading__label}>
                    Описание
                  </label>
                </div>
                <div className={styles.formHeading__column}>
                  <textarea
                    id={"1"}
                    placeholder={"Описание"}
                    className={clsx(styles.formHeading__textarea, "textarea")}
                  />
                  <div className={styles.formHeading__actions}>
                    <button
                      onClick={openPopup}
                      type="button"
                      className={clsx(
                        styles.formHeading__button,
                        "button button_blue"
                      )}
                    >
                      Добавить фото
                    </button>
                    <button
                      type="reset"
                      className={clsx(
                        styles.formHeading__button,
                        "button button_red-outline"
                      )}
                    >
                      Очистить
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.formHeading__row}>
                <div className={styles.formHeading__column}>
                  <div
                    className={clsx(
                      styles.formHeading__label,
                      styles.formHeading__label_title
                    )}
                  >
                    Категории
                  </div>
                </div>
                <div className={styles.formHeading__column}>
                  <select
                    className={clsx(styles.formHeading__select, "select")}
                  >
                    <option value="0">Без категории</option>
                    <option value="1">Some title 1</option>
                    <option value="2">Some title 2</option>
                  </select>
                </div>
              </div>
              <div className={styles.formHeading__row}>
                <div className={styles.formHeading__column}>
                  <label htmlFor={"2"} className={styles.formHeading__label}>
                    Категории
                  </label>
                </div>
                <div className={styles.formHeading__column}>
                  <input
                    id={"2"}
                    type="text"
                    placeholder={"Цена"}
                    className={clsx(styles.formHeading__input, "input")}
                  />
                </div>
              </div>
              <div
                className={clsx(
                  styles.formHeading__row,
                  styles.formHeading__row_right
                )}
              >
                <div
                  className={clsx(
                    styles.formHeading__column,
                    styles.formHeading__column_min
                  )}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setIsSpollerSetting((prevState) => !prevState)
                    }
                    className={clsx(
                      styles.formHeading__link,
                      "button-link button-link_size _icon-arrow-down",
                      { [styles.formHeading__link_active]: isSpollerSetting }
                    )}
                  >
                    Расширенные настройки
                  </button>
                </div>
              </div>
              <div
                className={clsx(styles.formHeading__spoller, {
                  [styles.formHeading__spoller_show]: isSpollerSetting,
                })}
              >
                <div
                  className={clsx(
                    styles.formHeading__row,
                    styles.formHeading__row_start
                  )}
                >
                  <div className={styles.formHeading__column}>
                    <label htmlFor={"3"} className={styles.formHeading__label}>
                      Старая цена
                    </label>
                    <p className={styles.formHeading__text}>
                      Необязательно. Добавляет визуальную скидку на товар.
                    </p>
                  </div>
                  <div className={styles.formHeading__column}>
                    <input
                      id={"3"}
                      type="text"
                      placeholder={"Старая цена"}
                      className={clsx(styles.formHeading__input, "input")}
                    />
                  </div>
                </div>
                <div
                  className={clsx(
                    styles.formHeading__row,
                    styles.formHeading__row_start
                  )}
                >
                  <div className={styles.formHeading__column}>
                    <label htmlFor={"4"} className={styles.formHeading__label}>
                      Себестоимость
                    </label>
                    <p className={styles.formHeading__text}>
                      Необязательно. Пользователям не показывается, но улучшает
                      подсчёт статистики продаж
                    </p>
                  </div>
                  <div className={styles.formHeading__column}>
                    <input
                      id={"4"}
                      type="text"
                      placeholder={"Себестоимость"}
                      className={clsx(styles.formHeading__input, "input")}
                    />
                  </div>
                </div>
                <div className={styles.formHeading__row}>
                  <div className={styles.formHeading__column}>
                    <label htmlFor={"5"} className={styles.formHeading__label}>
                      Минимум для заказа
                    </label>
                  </div>
                  <div className={styles.formHeading__column}>
                    <input
                      id={"5"}
                      type="text"
                      placeholder={"Минимум"}
                      className={clsx(styles.formHeading__input, "input")}
                    />
                  </div>
                </div>
                <div className={styles.formHeading__row}>
                  <div className={styles.formHeading__column}>
                    <label htmlFor={"6"} className={styles.formHeading__label}>
                      Максимум для заказа
                    </label>
                  </div>
                  <div className={styles.formHeading__column}>
                    <input
                      id={"6"}
                      type="text"
                      placeholder={"Максимум"}
                      className={clsx(styles.formHeading__input, "input")}
                    />
                  </div>
                </div>
                <div
                  className={clsx(
                    styles.formHeading__row,
                    styles.formHeading__row_right
                  )}
                >
                  <div
                    className={clsx(
                      styles.formHeading__column,
                      styles.formHeading__column_min
                    )}
                  >
                    <div
                      className={clsx(
                        styles.formHeading__item,
                        styles.formHeading__item_margin
                      )}
                    >
                      <input
                        id={"7"}
                        type="checkbox"
                        className={styles.formHeading__checkbox}
                        checked={isSaleShow}
                        onChange={() =>
                          setIsSaleShow((prevState) => !prevState)
                        }
                      />
                      <label
                        htmlFor="7"
                        className={clsx(
                          styles.formHeading__label,
                          styles.formHeading__label_bold
                        )}
                      >
                        Скидка на опт
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles.formHeading__spoller,
                    styles.formHeading__spoller_margin,
                    { [styles.formHeading__spoller_show]: isSaleShow }
                  )}
                >
                  <div className={styles.formHeading__row}>
                    <div className={styles.formHeading__column}>
                      <label
                        htmlFor={"10"}
                        className={styles.formHeading__label}
                      >
                        Скидка
                      </label>
                    </div>
                    <div className={styles.formHeading__column}>
                      <input
                        id={"10"}
                        type="text"
                        placeholder={"%"}
                        className={clsx(
                          styles.formHeading__input,
                          styles.formHeading__input_min,
                          "input"
                        )}
                      />
                    </div>
                  </div>
                  <div className={styles.formHeading__row}>
                    <div className={styles.formHeading__column}>
                      <label
                        htmlFor={"11"}
                        className={styles.formHeading__label}
                      >
                        При заказе от
                      </label>
                    </div>
                    <div className={styles.formHeading__column}>
                      <input
                        id={"11"}
                        type="text"
                        placeholder={"шт"}
                        className={clsx(
                          styles.formHeading__input,
                          styles.formHeading__input_min,
                          "input"
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={clsx(
                    styles.formHeading__row,
                    styles.formHeading__row_right
                  )}
                >
                  <div
                    className={clsx(
                      styles.formHeading__column,
                      styles.formHeading__column_min
                    )}
                  >
                    <div className={styles.formHeading__item}>
                      <input
                        id={"8"}
                        type="checkbox"
                        className={styles.formHeading__checkbox}
                        checked={isPosition}
                        onChange={() =>
                          setIsPosition((prevState) => !prevState)
                        }
                      />
                      <label
                        htmlFor="8"
                        className={clsx(
                          styles.formHeading__label,
                          styles.formHeading__label_bold
                        )}
                      >
                        Сделать позицию видимой
                      </label>
                    </div>
                    <div className={styles.formHeading__item}>
                      <input
                        id={"9"}
                        type="checkbox"
                        className={styles.formHeading__checkbox}
                        checked={isUser}
                        onChange={() => setIsUser((prevState) => !prevState)}
                      />
                      <label
                        htmlFor="9"
                        className={clsx(
                          styles.formHeading__label,
                          styles.formHeading__label_bold
                        )}
                      >
                        Не показывать пользователям, если товар закончился
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={clsx(
                  styles.formHeading__row,
                  styles.formHeading__row_right
                )}
              >
                <div
                  className={clsx(
                    styles.formHeading__column,
                    styles.formHeading__column_min
                  )}
                >
                  <button
                    type="submit"
                    className={clsx(
                      styles.formHeading__button,
                      "button button_success"
                    )}
                  >
                    Добавить
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewHeading;
