import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import uploadIcon from "@images/icons/cloud-icon.svg";
import styles from "./MailingPage.module.scss";

const Popup = withReactContent(Swal);

const MailingPage = () => {
  const [typeButton, setTypeButton] = React.useState(0);

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const openPopup = () => Popup.fire({
    html: (
      <form className={styles.formPopup} onSubmit={handleFormSubmit}>
        <h4 className={clsx(styles.formPopup__title, "title title_medium")}>Загрузка фотографии</h4>
        <label className={styles.formPopup__image} htmlFor="0i:0">
          <img src={uploadIcon} alt="" />
        </label>
        <h4 className={clsx(styles.formPopup__title, "title title_medium")}>Перетащите файл</h4>
        <input accept={"image/png, image/gif, image/jpeg"} id="0i:0" type={"file"} className={styles.formPopup__input_image} />
        <h4 className={clsx(styles.formPopup__title, "title title_medium")}>ИЛИ</h4>
        <input className={clsx(styles.formPopup__input, "input")} type="text" placeholder={"Введите ссылку"} />
        <button type={"submit"} className="button button_success">Загрузить</button>
      </form>
    ),
    width: 400,
    showConfirmButton: false,
  });

  const setType = React.useCallback(() => {
    if (!typeButton) return null;

    if (typeButton === 1) {
      return (
        <form onSubmit={handleFormSubmit} className={styles.formMailing__inputLinks}>
          <input className={clsx(styles.formMailing__input, styles.formMailing__input_margin, "input")} placeholder="Текст кнопки" />
          <input className={clsx(styles.formMailing__input, styles.formMailing__input_margin, "input")} placeholder="Ссылка кнопки" />
        </form>
      );
    }

    if (typeButton === 2) {
      return (
        <form onSubmit={handleFormSubmit} className={styles.formMailing__polls}>
          <h3 className={clsx(styles.formMailing__subtitle, "title")}>Добавить кнопку под сообщение</h3>
          <p className={styles.formMailing__text}>Данный опрос вы сможете подключить для новой рассылки</p>
          <div className={styles.formMailing__pollsInputs}>
            <input className={clsx(styles.formMailing__input, "input")} placeholder="Название" />
            <input className={clsx(styles.formMailing__input, "input")} placeholder="1 вариант ответа" />
            <input className={clsx(styles.formMailing__input, "input")} placeholder="2 вариант ответа" />
            <input className={clsx(styles.formMailing__input, "input")} placeholder="3 вариант ответа" />
            <input className={clsx(styles.formMailing__input, "input")} placeholder="4 вариант ответа" />
            <input className={clsx(styles.formMailing__input, "input")} placeholder="5 вариант ответа" />
            <input className={clsx(styles.formMailing__input, "input")} placeholder="6 вариант ответа" />
            <input className={clsx(styles.formMailing__input, "input")} placeholder="7 вариант ответа" />
            <input className={clsx(styles.formMailing__input, "input")} placeholder="8 вариант ответа" />
            <input className={clsx(styles.formMailing__input, "input")} placeholder="9 вариант ответа" />
          </div>
          <button type={"submit"} className="button button_success-outline">Создать</button>
        </form>
      );
    }
  }, [typeButton]);

  return (
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
            &lt;a href=&quot;Куда ведёт ссылка&quot;&gt;<a href="Куда ведёт ссылка" className={clsx(styles.mailing__link, "button-link")}>Текст ссылки</a>&lt;/a&gt;
          </p>
        </div>
        <div className={clsx(styles.mailing__row, "page__row")}>
          <div className={clsx(styles.mailing__form, styles.formMailing)}>
            <div className={styles.formMailing__item}>
              <textarea maxLength={4096} className={styles.formMailing__textarea} placeholder="Сообщение"></textarea>
            </div>
            <div className={styles.formMailing__item}>
              <button onClick={openPopup} type="button" className={clsx(styles.formMailing__button, "button button_blue")}>Добавить фото</button>
            </div>
            <div className={styles.formMailing__item}>
              <h3 className={clsx(styles.formMailing__subtitle, "title")}>Фильтры</h3>
              <p className={styles.formMailing__text}>Фильтры, чтобы рассылка была более эффективной</p>
            </div>
            <div className={styles.formMailing__item}>
              <h3 className={clsx(styles.formMailing__subtitle, "title")}>Отложить начало до</h3>
              <input type="datetime-local" className={styles.formMailing__date} />
            </div>
            <div className={styles.formMailing__item}>
              <h3 className={clsx(styles.formMailing__subtitle, "title")}>Добавить кнопку под сообщение</h3>
              <label className={styles.formMailing__label}>Тип кнопки</label>
              <select onChange={(event) => setTypeButton(Number(event.target.value))} className={clsx(styles.formMailing__select, "select")}>
                <option value="0">Не добавлять</option>
                <option value="1">Ссылка</option>
                <option value="2">Опрос</option>
              </select>
            </div>
            <div className={styles.formMailing__item_margin}>
              {setType()}
            </div>
            <div className={styles.formMailing__item}>
              <p className={styles.formMailing__label}>Пользователей получат сообщение ~ 0</p>
              <button type="button" className={clsx(styles.formMailing__button, "button button_success")}>Начать рассылку</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailingPage;