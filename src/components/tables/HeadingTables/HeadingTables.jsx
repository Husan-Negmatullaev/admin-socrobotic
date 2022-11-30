import React from "react";
import clsx from "clsx";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import HeadingTablesRow from "./HeadingTablesRow";

import styles from "./HeadingTables.module.scss";

const Popup = withReactContent(Swal);

const HeadingTables = ({ classes }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const openPopup = () =>
    Popup.fire({
      showConfirmButton: false,
      width: 500,
      html: (
        <div className={styles.popup} onSubmit={handleFormSubmit}>
          <div className={styles.popup__header}>
            <h3 className={styles.popup__title}>Добавления нового товара</h3>
            <p className={clsx(styles.popup__text, "small")}>
              Это то, что получит покупатель после того как заплатит
            </p>
          </div>
          <div className={styles.popup__body}>
            <div className={styles.popup__breadcrumbs}>
              <ul className={styles.popup__list}>
                <li className={styles.popup__item}>
                  <button
                    type="button"
                    className={clsx(styles.popup__link, styles.popup__link_active)}
                  >
                    Один товар
                  </button>
                </li>
                <li className={styles.popup__item}>
                  <button
                    type="button"
                    className={clsx(styles.popup__link)}
                  >
                    Один товар
                  </button>
                </li>
              </ul>
            </div>
            <form
              onSubmit={handleFormSubmit}
              className={clsx(styles.popup__form, styles.formPopup)}
            >
              <div className={styles.formPopup__body}>
                <div className={styles.formPopup__row}>
                  <div className={styles.formPopup__column}>
                    <label htmlFor="0" className={styles.formPopup__label}>
                      Текст:
                    </label>
                    <textarea
                      id={"0"}
                      className={clsx(styles.formPopup__textarea, "textarea")}
                      placeholder={"login:password\nlogin:password"}
                    />
                  </div>
                  <div className={styles.formPopup__column}>
                    <label htmlFor="1" className={styles.formPopup__label}>
                      Или загрузить из файла:
                    </label>
                    <input id={"1"} accept={".txt"} type="file"  className={clsx(styles.formPopup__input, styles.formPopup__input_file)}/>
                  </div>
                </div>
                <div className={styles.formPopup__row}>
                  <div className={styles.formPopup__column}>
                    <p className={styles.formPopup__text}>Каждый товар должен нахожится на новой строке</p>
                  </div>
                  <div className={styles.formPopup__column}>
                    <div className={styles.formPopup__item}>
                      <input id={"2"} type="checkbox" className={clsx(styles.formPopup__input, styles.formPopup__input_checkbox)}/>
                      <label htmlFor="2" className={clsx(styles.formPopup__label, styles.formPopup__label_bold)}>Сделать позицию видимой</label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      ),
    });

  return (
    <div className={clsx(classes, "table")}>
      <button
        type="button"
        className={clsx(styles.table__link, "button-link button-link_size")}
      >
        Удалить все товары
      </button>
      <table className="table__wrapper">
        <thead className="table__head">
          <tr className="table__tr">
            <th className="table__th">ID</th>
            <th className="table__th">Товар</th>
            <th className="table__th">Загружен</th>
            <th className="table__th">Ссылка</th>
            <th className="table__th">Статус</th>
            <th className="table__th">Поставщик</th>
            <th className="table__th"></th>
          </tr>
        </thead>
        <tbody className="table__body">
          <tr className="table__tr">
            <td className="table__td table__td_center" colSpan={7}>
              <button onClick={openPopup} type="button" className="button-link">
                Добавить товар
              </button>
            </td>
          </tr>
          <HeadingTablesRow />
          <tr className="table__tr">
            <td className="table__td table__td_center" colSpan={7}>
              <button onClick={openPopup} type="button" className="button-link">
                Добавить товар
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HeadingTables;
