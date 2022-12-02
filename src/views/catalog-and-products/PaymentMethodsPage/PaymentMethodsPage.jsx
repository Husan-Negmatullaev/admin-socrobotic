import React from "react";
import clsx from "clsx";
import {Link} from "react-router-dom";

import styles from "./PaymentMethodsPage.module.scss";
import qiwi from "@images/payment-logos/01.png";
import uMoney from "@images/payment-logos/02.png";
import payok from "@images/payment-logos/03.png";

const PaymentMethodsPage = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={clsx(styles.payment, "page")}>
      <div className={clsx(styles.payment__body, "page__body")}>
        <div className={clsx(styles.payment__row, "page__row")}>
          <h1 className={clsx(styles.payment__title, "title title_large")}>
            Способы оплаты
          </h1>
          <div className={styles.payment__content}>
            <div className={clsx(styles.payment__item, styles.itemPayment)}>
              <h3 className={styles.itemPayment__title}>QIWI</h3>
              <div className={styles.itemPayment__type}>(выключено)</div>
              <div className={styles.itemPayment__logo}>
                <img src={qiwi} alt="Qiwi логотип" />
              </div>
              <Link
                to={"/methods/qiwi"}
                className={clsx(
                  styles.itemPayment__link,
                  "button-link button-link_size"
                )}
              >
                Настройки
              </Link>
            </div>
            <div className={clsx(styles.payment__item, styles.itemPayment)}>
              <h3 className={styles.itemPayment__title}>
                Юмани (Яндекс.деньги)
              </h3>
              <div className={styles.itemPayment__type}>(выключено)</div>
              <div className={styles.itemPayment__logo}>
                <img src={uMoney} alt="Юмани логотип" />
              </div>
              <Link
                to={"/methods/umoney"}
                className={clsx(
                  styles.itemPayment__link,
                  "button-link button-link_size"
                )}
              >
                Настройки
              </Link>
            </div>
            <div className={clsx(styles.payment__item, styles.itemPayment)}>
              <h3 className={styles.itemPayment__title}>
                <a
                  rel={"noreferrer"}
                  href={"https://payok.io/"}
                  target={"_blank"}
                  className={clsx(
                    styles.itemPayment__link,
                    "button-link button-link_size"
                  )}
                >
                  Payok.io
                </a>
              </h3>
              <div className={styles.itemPayment__type}>(выключено)</div>
              <div className={styles.itemPayment__logo}>
                <img src={payok} alt="Payok логотип" />
              </div>
              <Link
                to={"/methods/payok"}
                className={clsx(
                  styles.itemPayment__link,
                  "button-link button-link_size"
                )}
              >
                Настройки
              </Link>
            </div>
          </div>
          <form onSubmit={handleFormSubmit} className={clsx(styles.payment__form, styles.formPayment)}>
            <div className={styles.formPayment__body}>
              <div className={styles.formPayment__row}>
                <div className={styles.formPayment__column}>
                  <label htmlFor="0" className={styles.formPayment__label}>Реферальная система для телеграм</label>
                  <p className={clsx(styles.formPayment__text, "small")}>Чтобы включить рефералтную систему для телеграм, просто укажите процент отчислений больше нуля</p>
                </div>
                <div className={styles.formPayment__column}>
                  <div className={styles.formPayment__actions}>
                    <input placeholder={"1-99"} id={"0"} type="text" className={clsx(styles.formPayment__input, "input")}/>
                    <button type="submit" className={clsx(styles.formPayment__button, "button button_success")}>Сохранить</button>
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

export default PaymentMethodsPage;
