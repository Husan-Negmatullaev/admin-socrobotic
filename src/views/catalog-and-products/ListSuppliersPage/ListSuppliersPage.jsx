import React from "react";
import clsx from "clsx";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import styles from "./ListSuppliersPage.module.scss";

const Popup = withReactContent(Swal);

const ListSuppliersPage = () => {

  const openPopup = () => Popup.fire({
    title: "Новый поставщик",
    input: "text",
    inputPlaceholder: "Введите логин поставщика на сайте",
    confirmButtonColor: "#3085d6"
  });

  return (
    <div className={clsx(styles.suppliers, "page")}>
      <div className={clsx(styles.suppliers__body, "page__body")}>
        <div className={clsx(styles.suppliers__row, "page__row")}>
          <div className={clsx(styles.suppliers__header, "table")}>
            <h1 className={clsx(styles.suppliers__title, "title title_large")}>
              Список поставщиков
            </h1>
            <button
              type={"button"}
              onClick={openPopup}
              className={clsx(
                styles.suppliers__button,
                "button button_success-outline"
              )}
            >
              Новый поставщик
            </button>
          </div>
          <div className={clsx(styles.suppliers__table, "table table_solid")}>
            <table className="table__wrapper">
              <thead className="table__head">
                <tr className="table__tr">
                  <th className="table__th">Логин</th>
                  <th className="table__th">Поставляет позиций</th>
                  <th className="table__th">Продано товаров</th>
                  <th className="table__th">Выплаты</th>
                  <th className="table__th"></th>
                </tr>
              </thead>
              <tbody className="table__body">
                <tr className="table__tr">
                  {/*<td className="table__td table__td_center" colSpan={5}>У вас пока нет ни одного поставщика</td>*/}
                  <td className="table__td">laza923</td>
                  <td className="table__td">0 (<button type="button" className="button-link">настройки</button>)</td>
                  <td className="table__td">0 (<button type="button" className="button-link">статистика</button>)</td>
                  <td className="table__td">Нет (<button type="button" className="button-link">Список</button>)</td>
                  <td className="table__td"><button type="button" className="button button_red-outline">Удалить</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSuppliersPage;
