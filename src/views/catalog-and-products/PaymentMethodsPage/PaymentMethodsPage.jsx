import React from "react";
import clsx from "clsx";
import {Link} from "react-router-dom";

import styles from "./PaymentMethodsPage.module.scss";
import qiwi from "@images/payment-logos/01.png";
import uMoney from "@images/payment-logos/02.png";
import payok from "@images/payment-logos/03.png";

const PaymentMethodsPage = () => {

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
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodsPage;
