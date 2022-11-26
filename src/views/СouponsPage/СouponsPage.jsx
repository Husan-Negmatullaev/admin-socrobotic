import React from "react";
import clsx from "clsx";
// import Swal from "sweetalert2";
import { CouponsTable } from "@components/tables";
// import withReactContent from "sweetalert2-react-content";

import styles from "./СouponsPage.module.scss";

// const Popup = withReactContent(Swal);

const СouponsPage = () => {

  return (
    <div className={clsx(styles.coupons, "page")}>
      <div className={clsx(styles.coupons__body, "page__body")}>
        <div className={clsx(styles.coupons__row, "page__row")}>
          <div className={styles.coupons__header}>
            <h1 className={clsx(styles.coupons__title, "title title_medium")}>Купоны на баланс</h1>
            <p className={styles.coupons__text}>Пользователи могут активировать данные купоны, чтобы получить деньги на баланс бота</p>
          </div>
          <CouponsTable classes={styles.coupons__table} />
        </div>
      </div>
    </div>
  )
}

export default СouponsPage;