import React from "react";
import clsx from "clsx";

import styles from "./AllHeadings.module.scss";
import { Link } from "react-router-dom";

const AllHeadings = () => {
  const handleSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div className={clsx(styles.headings, "page")}>
      <div className={clsx(styles.headings__body, "page__body")}>
        <div className={clsx(styles.headings__row, "page__row")}>
          <div className={styles.headings__header}>
            <form
              onSubmit={handleSubmitForm}
              className={clsx(styles.headings__form, styles.formHeadings)}
            >
              <div className={styles.formHeadings__row}>
                <div className={styles.formHeadings__column}>
                  <label htmlFor="0" className={styles.formHeadings__label}>
                    Поиск по позициям
                  </label>
                  <div className={styles.formHeadings__action}>
                    <input
                      id={"0"}
                      type="text"
                      placeholder={"Поисковый запрос"}
                      className={clsx(styles.formHeadings__input, "input")}
                    />
                    <button
                      type="button"
                      className={clsx(
                        styles.formHeadings__button,
                        "button button_success-outline"
                      )}
                    >
                      Поиск
                    </button>
                  </div>
                </div>
                <div className={styles.formHeadings__column}>
                  <label
                    className={clsx(
                      styles.formHeadings__label,
                      styles.formHeadings__label_title
                    )}
                  >
                    Категория
                  </label>
                  <div className={styles.formHeadings__action}>
                    <select
                      className={clsx(styles.formHeadings__select, "select")}
                    >
                      <option value="0">Без разницы</option>
                      <option value="1">Some title</option>
                      <option value="2">Some title 2</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
            <p className={clsx(styles.headings__text, "small")}>
              Вы можете нажать на ссылку в колонке &apos;ПП&apos; (Продано / Продаётся),
              чтобы прейти к списку загруженных товаров
            </p>
          </div>
          <div
            className={clsx(
              styles.headings__table,
              "table-blue table-blue_text-bottom"
            )}
          >
            <table className="table-blue__content">
              <thead className="table-blue__head">
                <tr className="table-blue__tr">
                  <th style={{ width: "5%" }} className="table-blue__th">
                    ID
                  </th>
                  <th style={{ width: "30%" }} className="table-blue__th">
                    Товар
                  </th>
                  <th style={{ width: "20%" }} className="table-blue__th">
                    Категория
                  </th>
                  <th style={{ width: "3%" }} className="table-blue__th">
                    Цена
                  </th>
                  <th style={{ width: "10%" }} className="table-blue__th">
                    Продаётся
                  </th>
                  <th className="table-blue__th">Проданные</th>
                  <th style={{ width: "12%" }} className="table-blue__th">
                    Скачать товары
                  </th>
                  <th style={{ width: "10%" }} className="table-blue__th">
                    Скрыт
                  </th>
                  <th style={{ width: "3%" }} className="table-blue__th">
                    На сайте
                  </th>
                  <th className="table-blue__th"></th>
                </tr>
              </thead>
              <tbody className="table-blue__body">
                <tr className="table-blue__tr">
                  {/*<td className="table-blue__td table-blue__td_center table-blue__td_bold" colSpan={10}>Нет ни одного товара</td>*/}
                  <td className="table-blue__td table-blue__td_bold">167011</td>
                  <td className="table-blue__td table-blue__td_bold">
                    Some title{" "}
                    <Link
                      to={"/categories/new-heading"}
                      className={"button-link button-link_size"}
                    >
                      (настройки)
                    </Link>
                  </td>
                  <td className="table-blue__td table-blue__td_bold">Some title</td>
                  <td className="table-blue__td table-blue__td_bold">10000₽</td>
                  <td className="table-blue__td table-blue__td_bold">0 <Link className={"button-link button-link_size"} to={"/categories/list-headings"}>(список)</Link></td>
                  <td className="table-blue__td table-blue__td_bold">0 <Link className={"button-link button-link_size"} to={"/categories/list-headings"}>(список)</Link></td>
                  <td className="table-blue__td table-blue__td_bold"><button type="button" className="button button_blue-outline">Скачать</button></td>
                  <td className="table-blue__td table-blue__td_bold"> <button type={"button"} className={clsx(styles.headings__type, styles.headings__type_green, "_icon-eye")}>Нет</button></td>
                  <td className="table-blue__td table-blue__td_bold"><button type={"button"} className={clsx(styles.headings__type, styles.headings__type_red, "_icon-eye-slash")}>Да</button></td>
                  <td className="table-blue__td table-blue__td_bold"><button type={"button"} className={clsx(styles.headings__type, styles.headings__type_grey, "_icon-trash-alt")}></button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllHeadings;
