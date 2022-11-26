import React from "react";
import clsx from "clsx";
import { MailingListTable } from "@components/tables";

import styles from "./MailingListPage.module.scss";

const MailingListPage = () => {

  return (
    <div className={clsx(styles.mailing, "page")}>
      <div className={clsx(styles.mailing__body, "page__body")}>
        <div className={clsx(styles.mailing__row, "page__row")}>
          <h1 className={clsx(styles.mailing__title, "title")}>
            История ваших рассылок
          </h1>
          <MailingListTable />
        </div>
      </div>
    </div>
  )
}

export default MailingListPage;