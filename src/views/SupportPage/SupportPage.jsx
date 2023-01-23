import React from "react";
import clsx from "clsx";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import styles from "./SupportPage.module.scss";

const Popup = withReactContent(Swal);

const SupportPage = () => {

  const handleAddSupport = (event) => {
    event.preventDefault();
  };

  const openPopup = () => Popup.fire({
    title: "Новый пункт помощи",
    showCloseButton: true,
    showCancelButton: true,
    confirmButtonText: "OK",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#3085d6",
    allowOutsideClick: () => {
      const popup = Swal.getPopup();
      popup.classList.remove("swal2-show");

      setTimeout(() => {
        popup.classList.add("shake-horizontal");
      });

      setTimeout(() => {
        popup.classList.remove("shake-horizontal");
      }, 500);

      return false;
    },
    html: (
      <form className={styles.support__form} onSubmit={handleAddSupport}>
        <input placeholder="Текст кнопки" type="text" className={clsx(styles.support__input, "input")} />
        <textarea placeholder="Текст, который выведет кнопка" className={styles.support__textarea}></textarea>
      </form>
    ),
  });

  return (
    <div className={clsx(styles.support, "page")}>
      <div className={clsx(styles.support__body, "page__body")}>
        <div className={clsx(styles.support__row, "page__row")}>
          <div className={styles.support__header}>
            <h2 className={clsx(styles.support__title, "title title_medium")}>Раздел &quot;Помощь&quot;</h2>
            <button onClick={openPopup} type="button" className={clsx(styles.support__button, "button button_success-outline")}>Добавить новый пункт</button>
          </div>
          <div className={clsx(styles.support__table, "table-blue")}>
            <table className="table-blue__content">
              <thead className="table-blue__head">
                <tr className="table-blue__tr">
                  <th style={{ width: "5%" }} className="table-blue__th">ID</th>
                  <th style={{ width: "40%" }} className="table-blue__th">Заголовок</th>
                  <th style={{ width: "50%" }} className="table-blue__th">Текст</th>
                  <th style={{ width: "5%" }} className="table-blue__th"></th>
                  <th style={{ width: "5%" }} className="table-blue__th"></th>
                </tr>
              </thead>
              <tbody className="table-blue__body">
                <tr className="table-blue__tr">
                  {/* <td colSpan={8} className="table-blue__td table-blue__td_center">Помощь не настроена</td> */}
                  <td className="table-blue__td">545</td>
                  <td className="table-blue__td">Test</td>
                  <td className="table-blue__td">Test Test Test Test Test Test Test Test</td>
                  <td className="table-blue__td"><button type="button" className="button button_success-outline">Редактировать</button></td>
                  <td className="table-blue__td"><button type="button" className="button button_red-outline">Удалить</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;