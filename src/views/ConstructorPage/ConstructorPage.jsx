import React from "react";
import clsx from "clsx";
import Swal from "sweetalert2";

import { PopupEditableButton } from "@components/popups";

import styles from "./ConstructorPage.module.scss";

const ConstructorPage = () => {

  const handleEditableForm = (event) => {
    event.preventDefault();

    Swal.close();
  };

  return (
    <div className={clsx(styles.constructor, "page")}>
      <div
        className={clsx(
          styles.constructor__body,
          "page__body wrapper-container"
        )}
      >
        <div className={clsx(styles.constructor__row, "page__row")}>
          <div className={styles.constructor__header}>
            <h3
              className={clsx(
                styles.constructor__mainTitle,
                "title title_large"
              )}
            >
              Конструктор телеграм бота
            </h3>
            <p className={clsx(styles.constructor__subtitle, "small")}>
              Чтобы редактировать поля, кликните дважды по тексту
            </p>
          </div>
          <div
            className={clsx(
              styles.constructor__actions,
              styles.constructorActions
            )}
          >
            <div className={styles.constructorActions__header}>
              <h4
                className={clsx(
                  styles.constructorActions__title,
                  "title title_medium"
                )}
              >
                Главное меню бота:
              </h4>
              <p className={clsx(styles.constructorActions__subtitle, "small")}>
                Кнопки с серым фоном отображаться не будут
              </p>
            </div>
            <div className={styles.constructorActions__actions}>
              <div className={styles.constructorActions__action}>
                <PopupEditableButton
                  classes={clsx(styles.constructorActions__button, {
                    [styles.constructorActions__button_disabled]: true,
                  })}
                  buttonTitle="😴 Дополнительная кнопка"
                >
                  <form
                    onSubmit={handleEditableForm}
                    className={styles.constructorActions__form}
                  >
                    <div className={styles.constructorActions__body}>
                      <div className={styles.constructorActions__item}>
                        <label
                          htmlFor="0i:0"
                          className={styles.constructorActions__label}
                        >
                          Текст кнопки:
                        </label>
                        <input
                          type="text"
                          id="0i:0"
                          value={"😴 Дополнительная кнопка"}
                          readOnly
                          className={clsx(
                            styles.constructorActions__input,
                            "input"
                          )}
                        />
                      </div>
                      <div className={styles.constructorActions__item}>
                        <label
                          htmlFor="0i:1"
                          className={styles.constructorActions__label}
                        >
                          Текст кнопки:
                        </label>
                        <select
                          type="text"
                          id="0i:1"
                          className={clsx(
                            styles.constructorActions__select,
                            "select"
                          )}
                        >
                          <option value="1">Все товары</option>
                          <option value="2">Начать покупку</option>
                          <option value="3">Личный кабинет</option>
                          <option value="4">Раздел &quot;Помощь&quot;</option>
                          <option value="5">Раздел &quot;Правила&quot;</option>
                          <option value="6">Не получил товар</option>
                          <option value="7">Вывести произвольный текст</option>
                          <option value="8">Пополнение баланса</option>
                          <option value="9">История покупок</option>
                          <option value="10">Активировать купон</option>
                          <option value="11">Реферальная система</option>
                          <option value="12">Раздел &quot;Подарки&quot;</option>
                        </select>
                      </div>
                      {/* <div className={styles.constructorActions__item}>
                        <label htmlFor="0i:3" className={styles.constructorActions__label}>Что вывести пользователю:</label>
                        <textarea maxLength={4096} placeholder="Текст" type="text" id="0i:3" className={styles.constructorActions__textarea} />
                      </div> */}
                      <div
                        className={clsx(
                          styles.constructorActions__item,
                          styles.constructorActions__item_checkbox
                        )}
                      >
                        <input
                          type={"checkbox"}
                          id="0i:2"
                          className={styles.constructorActions__input}
                        />
                        <label
                          className={styles.constructorActions__label}
                          htmlFor="0i:2"
                        >
                          Кнопка работает
                        </label>
                      </div>
                    </div>
                    <button type={"submit"} className="button button_blue">
                      Сохранить
                    </button>
                  </form>
                </PopupEditableButton>
              </div>
              <div className={styles.constructorActions__action}>
                <PopupEditableButton
                  classes={clsx(styles.constructorActions__button, {
                    [styles.constructorActions__button_disabled]: false,
                  })}
                  buttonTitle="🛒 Товары"
                />
              </div>
              <div className={styles.constructorActions__action}>
                <PopupEditableButton
                  classes={clsx(styles.constructorActions__button, {
                    [styles.constructorActions__button_disabled]: false,
                  })}
                  buttonTitle="💲 Купить"
                />
              </div>
              <div className={styles.constructorActions__action}>
                <PopupEditableButton
                  classes={clsx(styles.constructorActions__button, {
                    [styles.constructorActions__button_disabled]: true,
                  })}
                  buttonTitle="😴 Дополнительная кнопка"
                  isActive
                />
              </div>
              <div className={styles.constructorActions__action}>
                <PopupEditableButton
                  classes={clsx(styles.constructorActions__button, {
                    [styles.constructorActions__button_disabled]: false,
                  })}
                  buttonTitle="ℹ️ Личный кабинет"
                />
              </div>
              <div className={styles.constructorActions__action}>
                <PopupEditableButton
                  classes={clsx(styles.constructorActions__button, {
                    [styles.constructorActions__button_disabled]: true,
                  })}
                  buttonTitle="😴 Дополнительная кнопка"
                  isActive
                />
              </div>
              <div className={styles.constructorActions__action}>
                <PopupEditableButton
                  classes={clsx(styles.constructorActions__button, {
                    [styles.constructorActions__button_disabled]: true,
                  })}
                  buttonTitle="😴 Дополнительная кнопка"
                  isActive
                />
              </div>
              <div className={styles.constructorActions__action}>
                <PopupEditableButton
                  classes={clsx(styles.constructorActions__button, {
                    [styles.constructorActions__button_disabled]: false,
                  })}
                  buttonTitle="💬 Помощь"
                />
              </div>
              <div className={styles.constructorActions__action}>
                <PopupEditableButton
                  classes={clsx(styles.constructorActions__button, {
                    [styles.constructorActions__button_disabled]: false,
                  })}
                  buttonTitle="📔 Правила"
                />
              </div>
              <div className={styles.constructorActions__action}>
                <PopupEditableButton
                  classes={clsx(styles.constructorActions__button, {
                    [styles.constructorActions__button_disabled]: true,
                  })}
                  buttonTitle="😴 Дополнительная кнопка"
                  isActive
                />
              </div>
              <div className={styles.constructorActions__action}>
                <PopupEditableButton
                  classes={clsx(styles.constructorActions__button, {
                    [styles.constructorActions__button_disabled]: false,
                  })}
                  buttonTitle="🤷‍♂️ Не получил товар"
                />
              </div>
              <div className={styles.constructorActions__action}>
                <PopupEditableButton
                  classes={clsx(styles.constructorActions__button, {
                    [styles.constructorActions__button_disabled]: true,
                  })}
                  buttonTitle="😴 Дополнительная кнопка"
                  isActive
                />
              </div>
              <div className={styles.constructorActions__action}>
                <PopupEditableButton
                  classes={clsx(styles.constructorActions__button, {
                    [styles.constructorActions__button_disabled]: true,
                  })}
                  buttonTitle="😴 Дополнительная кнопка"
                  isActive
                />
              </div>
              <div className={styles.constructorActions__action}>
                <PopupEditableButton
                  classes={clsx(styles.constructorActions__button, {
                    [styles.constructorActions__button_disabled]: true,
                  })}
                  buttonTitle="😴 Дополнительная кнопка"
                  isActive
                />
              </div>
              <div className={styles.constructorActions__action}>
                <PopupEditableButton
                  classes={clsx(styles.constructorActions__button, {
                    [styles.constructorActions__button_disabled]: true,
                  })}
                  buttonTitle="😴 Дополнительная кнопка"
                  isActive
                />
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(styles.constructor__row, "page__row")}>
          <div
            className={clsx(
              styles.constructor__others,
              styles.constructorOthers
            )}
          >
            <div className={styles.constructorOthers__header}>
              <h3
                className={clsx(
                  styles.constructorOthers__title,
                  "title title_medium"
                )}
              >
                Остальные кнопки:
              </h3>
              <p className={styles.constructorOthers__subtitle}>
                Кнопка &quot;Назад&quot;:
                <PopupEditableButton
                  classes={styles.constructorOthers__back}
                  buttonTitle="⏪ Назад"
                >
                  <form
                    onSubmit={handleEditableForm}
                    className={clsx(
                      styles.constructorOthers__form,
                      styles.constructorOthersForm
                    )}
                  >
                    <div className={styles.constructorOthersForm__body}>
                      <div className={styles.constructorOthersForm__item}>
                        <label
                          htmlFor="0i:4"
                          className={styles.constructorOthersForm__label}
                        >
                          Текст кнопки:
                        </label>
                        <input
                          type="text"
                          id="0i:4"
                          className={clsx(
                            styles.constructorOthersForm__input,
                            "input"
                          )}
                        />
                      </div>
                    </div>
                    <button
                      type={"submit"}
                      className={clsx(
                        styles.constructorOthersForm__button,
                        "button button_blue"
                      )}
                    >
                      Сохранить
                    </button>
                  </form>
                </PopupEditableButton>
              </p>
            </div>
            <div className={styles.constructorOthers__actions}>
              <h5 className={styles.constructorOthers__description}>
                Смайлики в названиях платежных систем
              </h5>
              <p className={styles.constructorOthers__text}>
                Qiwi:{" "}
                <span>
                  <PopupEditableButton buttonTitle="$"></PopupEditableButton>
                </span>
              </p>
              <p className={styles.constructorOthers__text}>
                Qiwi банковская карта:{" "}
                <span>
                  <PopupEditableButton buttonTitle="$"></PopupEditableButton>
                </span>
              </p>
              <p className={styles.constructorOthers__text}>
                ЮMoney/Карта:{" "}
                <span>
                  <PopupEditableButton buttonTitle="$"></PopupEditableButton>
                </span>
              </p>
              <p className={styles.constructorOthers__text}>
                Енот:{" "}
                <span>
                  <PopupEditableButton buttonTitle="$"></PopupEditableButton>
                </span>
              </p>
              <p className={styles.constructorOthers__text}>
                Anypay:{" "}
                <span>
                  <PopupEditableButton buttonTitle="$"></PopupEditableButton>
                </span>
              </p>
              <p className={styles.constructorOthers__text}>
                Lava:{" "}
                <span>
                  <PopupEditableButton buttonTitle="$"></PopupEditableButton>
                </span>
              </p>
              <p className={styles.constructorOthers__text}>
                Webmoney Рубли:{" "}
                <span>
                  <PopupEditableButton buttonTitle="$"></PopupEditableButton>
                </span>
              </p>
              <p className={styles.constructorOthers__text}>
                Webmoney Доллары:{" "}
                <span>
                  <PopupEditableButton buttonTitle="$"></PopupEditableButton>
                </span>
              </p>
              <p className={styles.constructorOthers__text}>
                Payeer:{" "}
                <span>
                  <PopupEditableButton buttonTitle="$"></PopupEditableButton>
                </span>
              </p>
              <p className={styles.constructorOthers__text}>
                Payok.io:{" "}
                <span>
                  <PopupEditableButton buttonTitle="$"></PopupEditableButton>
                </span>
              </p>
            </div>
            <div className={styles.constructorOthers__body}>
              <form className={styles.constructorOthers__form}>
                <div className={styles.constructorOthers__row}>
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="Киви"
                    disabled
                  />
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="Киви"
                    readOnly
                  />
                </div>
                <div className={styles.constructorOthers__row}>
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="Банковская карта"
                    disabled
                  />
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="Банковская карта"
                    readOnly
                  />
                </div>
                <div className={styles.constructorOthers__row}>
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="enot.io"
                    disabled
                  />
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="enot.io"
                    readOnly
                  />
                </div>
                <div className={styles.constructorOthers__row}>
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="Киви - Юмани - Карты"
                    disabled
                  />
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="Киви - Юмани - Карты"
                    readOnly
                  />
                </div>
                <div className={styles.constructorOthers__row}>
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="ЮMoney/Карта"
                    disabled
                  />
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="ЮMoney/Карта"
                    readOnly
                  />
                </div>
                <div className={styles.constructorOthers__row}>
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="webmoney"
                    disabled
                  />
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="webmoney"
                    readOnly
                  />
                </div>
                <div className={styles.constructorOthers__row}>
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="Webmoney $"
                    disabled
                  />
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="Webmoney $"
                    readOnly
                  />
                </div>
                <div className={styles.constructorOthers__row}>
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="payeer"
                    disabled
                  />
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="payeer"
                    readOnly
                  />
                </div>
                <div className={styles.constructorOthers__row}>
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="Payok | Киви | Карты | USDT и другие"
                    disabled
                  />
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="Payok | Киви | Карты | USDT и другие"
                    readOnly
                  />
                </div>
                <div className={styles.constructorOthers__row}>
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="Free-Kassa"
                    disabled
                  />
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="Free-Kassa"
                    readOnly
                  />
                </div>
                <div className={styles.constructorOthers__row}>
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="Lava.ru - Киви - Карты"
                    disabled
                  />
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="Lava.ru - Киви - Карты"
                    readOnly
                  />
                </div>
                <div className={styles.constructorOthers__row}>
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="CrystalPay"
                    disabled
                  />
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="CrystalPay"
                    readOnly
                  />
                </div>
                <div className={styles.constructorOthers__row}>
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="USDT"
                    disabled
                  />
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="USDT"
                    readOnly
                  />
                </div>
                <div className={styles.constructorOthers__row}>
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="USDT (CryptoBot)"
                    disabled
                  />
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="USDT (CryptoBot)"
                    readOnly
                  />
                </div>
                <div className={styles.constructorOthers__row}>
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="Карта (ItPay.app)"
                    disabled
                  />
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="Карта (ItPay.app)"
                    readOnly
                  />
                </div>
                <div className={styles.constructorOthers__row}>
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="Банковская карта"
                    disabled
                  />
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="Банковская карта"
                    readOnly
                  />
                </div>
                <div className={styles.constructorOthers__row}>
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="СБП (Система Быстрых Переводов)"
                    disabled
                  />
                  <input
                    type="text"
                    className={clsx(styles.constructorOthers__input, "input")}
                    value="СБП (Система Быстрых Переводов)"
                    readOnly
                  />
                </div>
                <div className={styles.constructorOthers__row}>
                  <button
                    type={"submit"}
                    className={clsx(
                      styles.constructorOthers__button,
                      "button button_success-outline"
                    )}
                  >
                    Сохранить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructorPage;