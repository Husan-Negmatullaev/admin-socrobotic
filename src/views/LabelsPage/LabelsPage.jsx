import React from "react";
import clsx from "clsx";

import styles from "./LabelsPage.module.scss";

const LabelsPage = () => {

  const handleSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className={clsx(styles.labels, "page")}>
      <div className={clsx(styles.labels__body, "page__body")}>
        <div className={clsx(styles.labels__row, styles.labels__row_min, "page__row")}>
          <h3 className={clsx(styles.labels__title, "title title_medium")}>Метки</h3>
          <p className={clsx(styles.labels__text, "text")}>Метки - специальный текст, который добавляется в ссылку на бота и позволяет отслеживать откуда к вам приходят пользователи. Вы можете вставить эту ссылку в ваши рекламные объявления и отслеживать откуда больше всего приходит пользователей. Благодаря этому вы сможете оценивать эффективность рекламы и многое другое</p>
        </div>
        <div className={clsx(styles.labels__row, styles.labels__row_margin, "page__row")}>
          <h4 className={clsx(styles.labels__title, "title")}>Генератор меток</h4>
          <h5 className={clsx(styles.labels__subtitle, "title title_small")}>Введите название метки.</h5>
          <p className={clsx(styles.labels__text, "text")}>Это может быть название магазина, где вы покупаете рекламу, либо любое другое слово</p>
          <form onSubmit={handleSubmitForm} className={styles.labels__form}>
            <input maxlength="32" className={clsx(styles.labels__input, "input")} />
            <button type="button" className="button button_success-outline">Добавить</button>
          </form>
        </div>
        <div className={clsx(styles.labels__row, "page__row")}>
          <div className={clsx(styles.labels__table, "table table_solid")}>
            <table className="table__wrapper">
              <thead className="table__head">
                <tr className="table__tr">
                  <th className="table__th">ID</th>
                  <th className="table__th">Название метки</th>
                  <th className="table__th">Новых пользователей</th>
                  <th className="table__th">Ссылка</th>
                  <th className="table__th">Покупок на сумму</th>
                  <th className="table__th">Время создания</th>
                  <th className="table__th"></th>
                </tr>
              </thead>
              <tbody className="table__body">
                <tr className="table__tr">
                  {/* <td className="table__td table__td_center" colSpan={7}>Ни одного перехода по меткам</td> */}
                  <td className="table__td">1</td>
                  <td className="table__td">some</td>
                  <td className="table__td">0</td>
                  <td className="table__td"><button type="button" className="button-link">t.me/yourshopsbot?start=m1</button></td>
                  <td className="table__td">0₽</td>
                  <td className="table__td">24.11.2022 в 16:43</td>
                  <td className="table__td"><button type="button" className="button button_red-outline">Удалить</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LabelsPage;