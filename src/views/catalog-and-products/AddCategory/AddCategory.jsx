import React from "react";
import clsx from "clsx";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {useNavigate} from "react-router-dom";

import styles from "./AddCategory.module.scss";
import uploadIcon from "@images/icons/cloud-icon.svg";

const Popup = withReactContent(Swal);

const AddCategory = () => {
  const navigation = useNavigate();

  const goBack = () => {
    navigation(-1);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const openPopup = () =>
    Popup.fire({
      html: (
        <form className={styles.formPopup} onSubmit={handleFormSubmit}>
          <h4 className={clsx(styles.formPopup__title, "title title_medium")}>
            Загрузка фотографии
          </h4>
          <label className={styles.formPopup__image} htmlFor="0i:0">
            <img src={uploadIcon} alt="" />
          </label>
          <h4 className={clsx(styles.formPopup__title, "title title_medium")}>
            Перетащите файл
          </h4>
          <input
            accept={"image/png, image/gif, image/jpeg"}
            id="0i:0"
            type={"file"}
            className={styles.formPopup__input_image}
          />
          <h4 className={clsx(styles.formPopup__title, "title title_medium")}>
            ИЛИ
          </h4>
          <input
            className={clsx(styles.formPopup__input, "input")}
            type="text"
            placeholder={"Введите ссылку"}
          />
          <button type={"submit"} className="button button_success">
            Загрузить
          </button>
        </form>
      ),
      width: 400,
      showConfirmButton: false,
    });

  return (
    <div className={clsx(styles.category, "page")}>
      <div className={clsx(styles.category__body, "page__body")}>
        <div className={clsx(styles.category__row, "page__row")}>
          <div className={styles.category__header}>
            <h1 className={styles.category__title}>Новая категория</h1>
            <button
              type="button"
              className={clsx(
                styles.category__button,
                "button-link button-link_size"
              )}
              onClick={goBack}
            >
              {"<"} Назад
            </button>
          </div>
          <form
            onSubmit={handleFormSubmit}
            className={clsx(styles.category__form, styles.formCategory)}
          >
            <div className={styles.formCategory__row}>
              <div className={styles.formCategory__column}>
                <label htmlFor="0" className={styles.formCategory__label}>
                  Наименование
                </label>
              </div>
              <div className={styles.formCategory__column}>
                <input
                  placeholder={"Название"}
                  id={"0"}
                  type={"text"}
                  className={clsx(styles.formCategory__input, "input")}
                />
              </div>
            </div>
            <div className={styles.formCategory__row}>
              <div className={styles.formCategory__column}>
                <div className={styles.formCategory__title}>Фотография</div>
                <p className={clsx(styles.formCategory__text, "small")}>
                  Будет отправлена пользователю в телеграм при выборе категории
                </p>
              </div>
              <div className={styles.formCategory__column}>
                <button
                  onClick={openPopup}
                  type={"button"}
                  className={clsx(
                    styles.formCategory__button,
                    "button button_blue"
                  )}
                >
                  Добавить фото
                </button>
                <button
                  type={"reset"}
                  className={clsx(
                    styles.formCategory__button,
                    "button button_red-outline"
                  )}
                >
                  Очистить
                </button>
              </div>
            </div>
            <div className={styles.formCategory__row}>
              <div className={styles.formCategory__column}>
                <div className={styles.formCategory__title}>
                  Родительская категория
                </div>
                <p className={clsx(styles.formCategory__text, "small")}>
                  Указывать необязательно.
                </p>
              </div>
              <div className={styles.formCategory__column}>
                <select className={clsx(styles.formCategory__select, "select")}>
                  <option value="0">Нет</option>
                  <option value="1">Some title</option>
                  <option value="2">Some title 2</option>
                </select>
              </div>
            </div>
            <div className={styles.formCategory__row}>
              <div className={styles.formCategory__column}>
                <label htmlFor={"2"} className={styles.formCategory__label}>
                  Скрывать, если товар закончился
                </label>
              </div>
              <div className={styles.formCategory__column}>
                <input
                  id={"2"}
                  type="checkbox"
                  className={styles.formCategory__checkbox}
                />
                <br />
                <button
                  type={"submit"}
                  className={clsx(
                    styles.formCategory__button,
                    "button button_success"
                  )}
                >
                  Добавить
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
