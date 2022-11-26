import React from "react";
import clsx from "clsx";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import styles from "./AdminsTable.module.scss";

const Popup = withReactContent(Swal);

const AdminsTableRow = () => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    Swal.close();
  };

  const openPopup = () => Popup.fire({
    html: (
      <form onSubmit={handleFormSubmit} className={styles.adminPopup}>
        <div className={styles.adminPopup__header}>
          <h4 className={clsx(styles.adminPopup__title, "title title_medium")}>Настройки прав администратора</h4>
          <div className={styles.adminPopup__actions}>
            <button className={clsx(styles.adminPopup__button, "button-link")}>@lazaSs</button>
            <p className={styles.adminPopup__text}>(ID: 633067570)</p>
          </div>
        </div>
        <div className={clsx(styles.adminPopup__subtitle, "title")}>Что может делать админ</div>
        <div className={styles.adminPopup__content}>
          <div className={styles.adminPopup__item}>
            <label htmlFor="0" className={styles.adminPopup__label}>Начинать рассылок</label>
            <input type="checkbox" id="0" className={styles.adminPopup__checkbox} />
          </div>
          <div className={styles.adminPopup__item}>
            <label htmlFor="0" className={styles.adminPopup__label}>Действия с пользователями (изменения баланса, блокировка, статистика)</label>
            <input type="checkbox" id="0" className={styles.adminPopup__checkbox} />
          </div>
          <div className={styles.adminPopup__item}>
            <label htmlFor="0" className={styles.adminPopup__label}>Смотреть статистику</label>
            <input type="checkbox" id="0" className={styles.adminPopup__checkbox} />
          </div>
          <div className={styles.adminPopup__item}>
            <label htmlFor="0" className={styles.adminPopup__label}>Исполнять команды бота</label>
            <input type="checkbox" id="0" className={styles.adminPopup__checkbox} />
          </div>
          <div className={styles.adminPopup__item}>
            <label htmlFor="0" className={styles.adminPopup__label}>Управление магазина (загрузка товаров)</label>
            <input type="checkbox" id="0" className={styles.adminPopup__checkbox} />
          </div>
          <button type="submit" className="button button_success-outline">Сохранить</button>
        </div>
      </form>
    ),
    background: "#f2f4f5",
    showConfirmButton: false,
    width: 400
  });

  return (
    <tr className="table__tr">
      {/* <td colSpan={5} className="table__td table__td_center">У бота пока нет администраторов</td> */}
      <td className="table__td">633067570</td>
      <td className="table__td"><button type="button" className="button-link">@lazaSs</button></td>
      <td className="table__td">Имеет доступ к панеле управления в телеграм</td>
      <td className="table__td"><button type="button" className="button button_red-outline">Удалить</button></td>
      <td className="table__td"><button type="button" onClick={openPopup} className="button button_blue-outline">Настройки</button></td>
    </tr>
  )
}

export default AdminsTableRow
