import clsx from "clsx";
import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { AdminsTable } from "@components/tables";

import styles from "./AdminsPage.module.scss";


const Popup = withReactContent(Swal);

const AdminsPage = () => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    Swal.close();
  };

  const openPopup = () => Popup.fire({
    html: (
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="ID телеграм" className="swal2-input _fw" />
      </form>
    ),
    confirmButtonColor: "#3085d6",
    title: "Добавить нового админа",
  });

  return (
    <div className={clsx(styles.admin, "page")}>
      <div className={clsx(styles.admin__body, "page__body wrapper-container")}>
        <div className={clsx(styles.admin__row, "page__row")}>
          <div className={styles.admin__header}>
            <div className={styles.admin__actions}>
              <h1 className={clsx(styles.admin__title, "title title_medium")}>Администраторы</h1>
              <button onClick={openPopup} type="button" className={clsx(styles.admin__button, "button button_success-outline")}>Добавить админа</button>
            </div>
            <p className={clsx(styles.admin__text, "text")}>На этой странице вы можете добавлять пользователей, у которых будет доступ к админ-функционалу бота</p>
          </div>
          <AdminsTable classes={styles.admin__table} />
        </div>
      </div>
    </div>
  );
};

export default AdminsPage;