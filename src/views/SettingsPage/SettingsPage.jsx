import React from "react";
import clsx from "clsx";

import styles from "./SettingsPage.module.scss";

const SettingsPage = () => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className={clsx(styles.settings, "page")}>
      <div className={clsx(styles.settings__body, "page__body wrapper-container")}>
        <div className={clsx(styles.settings__row, "page__row")}>
          <div className={styles.settings__header}>
            <h1 className={clsx(styles.settings__title, "title title_large")}>Настройки телеграм бота</h1>
          </div>
          <div className={styles.settings__content}>
            <div className={clsx(styles.settings__item, styles.settingItem, styles.settingItem_padding)}>
              <h5 className={clsx(styles.settingItem__title, "title")}>Токен (cекретный ключ)</h5>
              <p className={styles.settingItem__text}>Получить можно у бота <a href="https://t.me/botfather" target={"_blank"} className={clsx(styles.settingItem__link, "button-link")} rel="noreferrer">@botfather</a> после создания нового бота</p>
              <form onSubmit={handleFormSubmit} className={styles.settingItem__form}>
                <input type="text" className={clsx(styles.settingItem__input, "input")} readOnly value={"****"} />
                <button type={"submit"} className={clsx(styles.settingItem__button, "button button_success")}>Сохранить</button>
              </form>
            </div>
            <div className={clsx(styles.settings__item, styles.settingItem)}>
              <h5 className={clsx(styles.settingItem__title, "title")}>Укажите ваш ID телеграм, чтобы открыть панель администрирования</h5>
              <p className={styles.settingItem__text}>После указания ID, вам будет доступна кнопка "Настройки бота" прямо в телеграм. Получить свой ID можно у <a href="https://t.me/getmyid_bot" target={"_blank"} className={clsx(styles.settingItem__link, "button-link")} rel="noreferrer">@getmyid_bot</a></p>
              <form onSubmit={handleFormSubmit} className={styles.settingItem__form}>
                <input type="text" className={clsx(styles.settingItem__input, styles.settingItem__input_id, "input")} placeholder="Ваш ID" />
                <button type={"submit"} className={clsx(styles.settingItem__button, "button button_success")}>Сохранить</button>
              </form>
            </div>
            <div className={clsx(styles.settings__item, styles.settingItem)}>
              <h5 className={clsx(styles.settingItem__title, "title")}>Минимальная сумма оплаты</h5>
              <form onSubmit={handleFormSubmit} className={styles.settingItem__form}>
                <input type="number" className={clsx(styles.settingItem__input, styles.settingItem__input_number, "input")} placeholder="2" />
                <button type={"submit"} className={clsx(styles.settingItem__button, "button button_success")}>Сохранить</button>
              </form>
            </div>
            <div className={clsx(styles.settings__item, styles.settingItem)}>
              <h5 className={clsx(styles.settingItem__title, "title")}>Максимальная сумма оплаты</h5>
              <form className={styles.settingItem__form}>
                <input type="number" className={clsx(styles.settingItem__input, styles.settingItem__input_number, "input")} placeholder="10000" />
                <button type={"submit"} className={clsx(styles.settingItem__button, "button button_success")}>Сохранить</button>
              </form>
            </div>
            <div className={clsx(styles.settings__item, styles.settingItem, styles.settingItem_padding)}>
              <h5 className={clsx(styles.settingItem__title, "title")}>Сообщение при старте</h5>
              <p className={clsx(styles.settingItem__text, styles.settingItem__text_margin)}>После того, как пользователь нажмёт кнопку "Старт", ему вышлется следующее сообщение:</p>
              <form className={styles.settingItem__form}>
                <textarea type="text" className={styles.settingItem__textarea} placeholder="Пусто" maxLength={4096} />
                <button type={"submit"} className={clsx(styles.settingItem__button, "button button_success")}>Сохранить</button>
              </form>
            </div>
            <div className={clsx(styles.settings__item, styles.settingItem, styles.settingItem_padding)}>
              <h5 className={clsx(styles.settingItem__title, "title")}>Сообщение после покупки</h5>
              <p className={clsx(styles.settingItem__text, styles.settingItem__text_margin)}>После покупки пользователю будет отправлено следующее сообщение (меньше 3 символов отправлено не будет):</p>
              <form className={styles.settingItem__form}>
                <textarea type="text" className={clsx(styles.settingItem__textarea, styles.settingItem__textarea_min)} placeholder="Пусто" maxLength={4096} />
                <button type={"submit"} className={clsx(styles.settingItem__button, "button button_success")}>Сохранить</button>
              </form>
            </div>
            <div className={clsx(styles.settings__item, styles.settingItem, styles.settingItem_padding)}>
              <h5 className={clsx(styles.settingItem__title, "title")}>Внутренний баланс бота</h5>
              <p className={clsx(styles.settingItem__text, styles.settingItem__text_margin)}>Если включен, то доступна реферальная программа. Если выключен, то реферальная программа для бота работать не будет, а оплата будет проходить напрямую за каждый товар. Настроить реферальную систему можно во вкладке "Реферальная система" в главном меню.</p>
              <form className={clsx(styles.settingItem__form, styles.settingItem__form_checkbox)}>
                <label className={styles.settingItem__label} htmlFor="r0">Включен</label>
                <input type="checkbox" className={styles.settingItem__checkbox} id="r0" />
              </form>
            </div>
            <div className={clsx(styles.settings__item, styles.settingItem, styles.settingItem_padding)}>
              <h5 className={clsx(styles.settingItem__title, "title")}>Как разделять товары?</h5>
              <p className={styles.settingItem__text}>Ограничение телеграм - максимум 4096 символов в одном сообщении. Если сообщение больше, то бот либо разделит текст на несколько сообщений, либо разделит товары на страницы, которые можно переключать кнопками.</p>
              <p className={styles.settingItem__subtitle}>Если сообщение со всеми товарами слишком длинное, то</p>
              <div className={styles.settingItem__actions}>
                <button type="button" className={clsx(styles.settingItem__action, "button button_success-outline")}>Разделить его на сообщения</button>
                <button type="button" disabled className={clsx(styles.settingItem__action, "button")}>Разделить его на страницы</button>
              </div>
            </div>
            <div className={clsx(styles.settings__item, styles.settingItem, styles.settingItem_padding)}>
              <h5 className={clsx(styles.settingItem__title, "title")}>Режим отображения кнопок</h5>
              <p className={styles.settingItem__text}>Кнопки могут отображаться в отдельном меню внизу экрана, либо под сообщениями (Инлайн режим).</p>
              <p className={styles.settingItem__subtitle}>Я хочу, чтобы кнопки выводились</p>
              <div className={styles.settingItem__actions}>
                <button type="button" className={clsx(styles.settingItem__action, "button button_success-outline")}>Под сообщениями</button>
                <button type="button" disabled className={clsx(styles.settingItem__action, "button")}>В меню снизу</button>
              </div>
            </div>
            <div className={clsx(styles.settings__item, styles.settingItem)}>
              <h5 className={clsx(styles.settingItem__title, "title")}>Авто-рассылка из канала</h5>
              <p className={clsx(styles.settingItem__text, styles.settingItem__text_margin)}>
                Каждый раз, когда вы выкладываете пост в канал, автоматически будет начинаться рассылка с этим сообщением. <br /> ID канала можно узнать у бота <a href="https://t.me/getmyid_bot" target={"_blank"} className={clsx(styles.settingItem__link, "button-link")} rel="noreferrer">@getmyid_bot</a>, просто перешлите ему любой пост из канала. ID должен начинаться с - (минуса) <br /> <b>Так же нужно добавить бота (магазин) в телеграм канал в качестве админа и дать ему доступ к чтению сообщений.</b>
              </p>
              <form onSubmit={handleFormSubmit} className={styles.settingItem__form}>
                <input type="number" placeholder="-1111111" className={clsx(styles.settingItem__input, styles.settingItem__input_number, "input")} />
                <button type={"submit"} className={clsx(styles.settingItem__button, "button button_success")}>Сохранить</button>
              </form>
            </div>
            <div className={clsx(styles.settings__item, styles.settingItem)}>
              <h5 className={clsx(styles.settingItem__title, "title")}>Уведомление о покупках в телеграм канал</h5>
              <p className={clsx(styles.settingItem__text, styles.settingItem__text_margin)}>
                Уведомления о покупках будут приходить в канал, который вы укажете ниже. <br /> ID канала можно узнать у бота <a href="https://t.me/getmyid_bot" target={"_blank"} className={clsx(styles.settingItem__link, "button-link")} rel="noreferrer">@getmyid_bot</a>, просто перешлите ему любой пост из канала. ID должен начинаться с - (минуса) <br /> <b>Так же нужно добавить бота (магазин) в телеграм канал в качестве админа и дать ему доступ к чтению сообщений.</b>
              </p>
              <form onSubmit={handleFormSubmit} className={styles.settingItem__form}>
                <input type="number" placeholder="-1111111" className={clsx(styles.settingItem__input, styles.settingItem__input_number, "input")} />
                <button type={"submit"} className={clsx(styles.settingItem__button, "button button_success")}>Сохранить</button>
              </form>
            </div>
            <div className={clsx(styles.settings__item, styles.settingItem)}>
              <h5 className={clsx(styles.settingItem__title, "title")}>Уведомление о покупках в телеграм канал</h5>
              <p className={clsx(styles.settingItem__text, styles.settingItem__text_margin)}>
                Уведомления о покупках будут приходить в канал, который вы укажете ниже. <br /> ID канала можно узнать у бота <a href="https://t.me/getmyid_bot" target={"_blank"} className={clsx(styles.settingItem__link, "button-link")} rel="noreferrer">@getmyid_bot</a>, просто перешлите ему любой пост из канала. ID должен начинаться с - (минуса) <br /> <b>Так же нужно добавить бота (магазин) в телеграм канал в качестве админа и дать ему доступ к чтению сообщений.</b>
              </p>
              <form onSubmit={handleFormSubmit} className={styles.settingItem__form}>
                <input type="number" placeholder="-1111111" className={clsx(styles.settingItem__input, styles.settingItem__input_number, "input")} />
                <button type={"submit"} className={clsx(styles.settingItem__button, "button button_success")}>Сохранить</button>
              </form>
            </div>
            <div className={clsx(styles.settings__item, styles.settingItem, styles.settingItem_padding)}>
              <h5 className={clsx(styles.settingItem__title, "title")}>Обязательная подписка на канал</h5>
              <p className={clsx(styles.settingItem__text, styles.settingItem__text_margin)}>
                Чтобы воспользоваться ботом, пользователь обязательно должен подписаться на канал. <br /> <b>Так же нужно добавить бота (магазин) в телеграм канал в качестве админа и дать ему доступ к чтению сообщений.</b> <br />
                Узнать ID канала можно, переслав любое сообщение из него боту <a href="https://t.me/getmyid_bot" target={"_blank"} className={clsx(styles.settingItem__link, "button-link")} rel="noreferrer">@getmyid_bot</a>
              </p>
              <form onSubmit={handleFormSubmit} className={styles.settingItem__form}>
                <input type="number" placeholder="-1111111" className={clsx(styles.settingItem__input, styles.settingItem__input_number, "input")} />
                <textarea type="text" className={styles.settingItem__textarea} placeholder="Перед использованием бота, Вы должны подписаться на наш канал @some_channel " maxLength={256} />
                <button type={"submit"} className={clsx(styles.settingItem__button, "button button_success")}>Сохранить</button>
              </form>
            </div>
            <div className={clsx(styles.settings__item, styles.settingItem, styles.settingItem_padding)}>
              <h5 className={clsx(styles.settingItem__title, "title")}>Обязательное вступление в чат</h5>
              <p className={clsx(styles.settingItem__text, styles.settingItem__text_margin)}>
                Чтобы воспользоваться ботом, пользователь обязательно должен подписаться на канал. <br /> <b>Так же нужно добавить бота (магазин) в телеграм канал в качестве админа и дать ему доступ к чтению сообщений.</b> <br />
                Узнать ID канала можно, переслав любое сообщение из него боту <a href="https://t.me/getmyid_bot" target={"_blank"} className={clsx(styles.settingItem__link, "button-link")} rel="noreferrer">@getmyid_bot</a>
              </p>
              <form onSubmit={handleFormSubmit} className={styles.settingItem__form}>
                <input type="number" placeholder="-1111111" className={clsx(styles.settingItem__input, styles.settingItem__input_number, "input")} />
                <textarea type="text" className={styles.settingItem__textarea} placeholder="Перед использованием бота, Вы должны войти в наш чат t.me/some_chat " maxLength={256} />
                <button type={"submit"} className={clsx(styles.settingItem__button, "button button_success")}>Сохранить</button>
              </form>
            </div>
            <div className={clsx(styles.settings__item, styles.settingItem, styles.settingItem_padding)}>
              <h5 className={clsx(styles.settingItem__title, "title")}>Обязательные правила перед использованием бота</h5>
              <p className={clsx(styles.settingItem__text, styles.settingItem__text_margin)}>
                Пока человек не согласится с правилами, он не сможет использовать бот. Длина текста до 4096 символов. Чтобы отключить функцию, установите текст равный пустой строке.
              </p>
              <form onSubmit={handleFormSubmit} className={styles.settingItem__form}>
                <textarea type="text" className={styles.settingItem__textarea} placeholder="Пусто " maxLength={4096} />
                <button type={"submit"} className={clsx(styles.settingItem__button, "button button_success")}>Сохранить</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage;