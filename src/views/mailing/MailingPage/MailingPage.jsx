import React from "react";
import clsx from "clsx";

import styles from "./MailingPage.module.scss";
import { Link } from "react-router-dom";

const MailingPage = () => {
  return (
    <div>
      <div className={clsx(styles.mailing, "page")}>
        <div className={clsx(styles.mailing__body, "page__body wrapper-container")}>
          <div className={clsx(styles.mailing__row, "page__row")}>
            <h1 className={clsx(styles.mailing__title, "title title_medium")}>Рассылка по пользователям</h1>
            <p className={styles.mailing__text}>
              Здесь вы можете начать рассылку по всем пользователям вашего бота. Если к вашему аккаунта привязан телеграм, то по окончании рассылки вы получите уведомление.
              <Link to={"/settings"} className={clsx(styles.mailing__link, "button-link")}> Привязать</Link>
            </p>
            <p className={styles.mailing__text}>
              Рассылка поддерживает форматирование текста, <br /> посредством языка HTML:
              <br />
              &lt;b&gt;<b>Жирный текст</b>&lt;/b&gt;<br />
              &lt;i&gt;<i>Курсивный текст</i>&lt;/i&gt;<br />
              &lt;u&gt;<u>Подчёркнутый текст</u>&lt;/u&gt;<br />
              &lt;strike&gt;<strike>Перечёркнутый текст</strike>&lt;/strike&gt;<br />
              &lt;code&gt;<code>Выделенный текст</code>&lt;/code&gt;<br />
              &lt;a href="Куда ведёт ссылка"&gt;<a href="Куда ведёт ссылка" className={clsx(styles.mailing__link, "button-link")}>Текст ссылки</a>&lt;/a&gt;
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MailingPage;