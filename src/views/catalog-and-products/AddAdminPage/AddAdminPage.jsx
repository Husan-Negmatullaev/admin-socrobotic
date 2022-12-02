import React from "react";
import clsx from "clsx";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import styles from "./AddAdminPage.module.scss";

const Popup = withReactContent(Swal);

const AddAdminPage = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const openPopup = () =>
    Popup.fire({
      showConfirmButton: false,
      html: (
        <div className={styles.popupAdmin}>
          <h3 className={styles.popupAdmin__title}>
            Добавление нового пользователя
          </h3>
          <form
            onSubmit={handleFormSubmit}
            className={styles.popupAdmin__formPopup}
          >
            <div className={styles.popupAdmin__body}>
              <div className={styles.popupAdmin__row}>
                <div className={styles.popupAdmin__column}>
                  <label htmlFor={"0"} className={styles.popupAdmin__label}>
                    Логин
                  </label>
                </div>
                <div className={styles.popupAdmin__column}>
                  <input
                    id={"0"}
                    type="email"
                    placeholder={"Логин"}
                    className={clsx(styles.popupAdmin__input, "input")}
                  />
                </div>
              </div>
              <div className={styles.popupAdmin__row}>
                <div className={styles.popupAdmin__column}>
                  <label htmlFor={"1"} className={styles.popupAdmin__label}>
                    Приоритет
                  </label>
                </div>
                <div className={styles.popupAdmin__column}>
                  <input
                    id={"1"}
                    type="text"
                    placeholder={"0-254"}
                    className={clsx(styles.popupAdmin__input, "input")}
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className={clsx(
                styles.popupAdmin__button,
                "button button_success"
              )}
            >
              Добавить
            </button>
          </form>
        </div>
      ),
    });

  return (
    <div className={clsx(styles.admin, "page")}>
      <div className={clsx(styles.admin__body, "page__body")}>
        <div className={clsx(styles.admin__row, "page__row")}>
          <div className={styles.admin__header}>
            <h1 className={clsx(styles.admin__title)}>
              Пользователи админ панели
            </h1>
            <p className={clsx(styles.admin__description, "text")}>
              Если вам необходимо поделиться доступом с другим пользователем, то
              вы можете сделать это здесь. Приоритет пользователя означает кого
              он сможет удалить из списка администраторов, а кого нет
              (пользовать с меньшим приоритетом не может удалить пользователя с
              большим). Пользователю доступно полное управление магазином,
              будьте осторожны!
            </p>
            <p className={styles.admin__text}>
              <span className={styles.admin__bold}>
                Пользователи с приоритетом ниже 100
              </span>{" "}
              не смогут смотреть/менять реквизиты оплаты, настройки магазина,
              бота. Не смогут добавлять администраторов (ни на сайт, ни в бота),
              не смогут удалить магазин <br />{" "}
              <span className="styles admin__bold">
                Все, у кого приоритет выше 100
              </span>{" "}
              смогут делать всё вышесказанное.
            </p>
          </div>
          <div className={clsx(styles.admin__table, "table")}>
            <table className="table__wrapper">
              <thead className="table__head">
                <tr className="table__tr">
                  <th className="table__th table__th_bolder">ID</th>
                  <th className="table__th table__th_bolder">Логин</th>
                  <th className="table__th table__th_bolder">Приоритет</th>
                  <th className="table__th table__th_bolder"></th>
                </tr>
              </thead>
              <tbody className="table__body">
                <tr className="table__tr">
                  <td className="table__td">5527</td>
                  <td className="table__td">hasan</td>
                  <td className="table__td">127 (создатель)</td>
                  <td className="table__td"></td>
                </tr>
                <tr className="table__tr">
                  <td className="table__td">5528</td>
                  <td className="table__td">husan</td>
                  <td className="table__td">128</td>
                  <td className="table__td"><button type="button" className="button button_success">Удалить</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            type={"button"}
            onClick={openPopup}
            className={clsx(
              styles.admin__button,
              "button-link button-link_size"
            )}
          >
            Добавить пользователя
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAdminPage;
