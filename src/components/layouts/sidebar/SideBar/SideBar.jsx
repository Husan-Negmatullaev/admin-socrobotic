import React from "react";
import { NavLink } from "react-router-dom";
import DropdownSideBar from "../DropdownSideBar";
import SimpleBar from "simplebar-react";
import clsx from "clsx";

import styles from "./SideBar.module.scss";
import "simplebar-react/dist/simplebar.min.css";

const SideBar = () => {
  const activeClassName = (isActive, icon = "") => {
    // console.log(isActive);
    return `${styles.menu__link} ${icon} ${
      isActive ? styles.menu__link_active : ""
    }`;
  };

  return (
    <aside className={styles.sidebar}>
      <SimpleBar
        className={styles.menu__scrollbar}
        forceVisible="y"
        autoHide={false}
      >
        <div className={clsx(styles.sidebar__menu, styles.menu)}>
          <nav className={styles.menu__body}>
            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    activeClassName(isActive, "_icon-plus-square")
                  }
                >
                  Новый магазин
                </NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink
                  to="/shops"
                  className={({ isActive }) =>
                    activeClassName(isActive, "_icon-list")
                  }
                >
                  Мои магазины
                </NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink
                  to="/settings"
                  className={({ isActive }) =>
                    activeClassName(isActive, "_icon-cogs")
                  }
                >
                  Настройки бота
                </NavLink>
              </li>
            </ul>
            <ul className={styles.menu__list}>
              <li>
                <DropdownSideBar title="Списки" hidden>
                  <NavLink to="/shops" className="_icon-money-bill-wave">
                    Пользователи
                  </NavLink>
                  <NavLink to="/deposits" className="_icon-users">
                    Пополнения
                  </NavLink>
                </DropdownSideBar>
              </li>
              <li>
                <DropdownSideBar title="Меню пользователя" hidden>
                  <NavLink to="/constructor" className="_icon-info-circle">
                    Кнопки
                  </NavLink>
                  <NavLink to="/support" className="_icon-gift">
                    Раздел "Помощь"
                  </NavLink>
                  <NavLink to="/" className="_icon-toolbox">
                    Раздел "Подарки"
                  </NavLink>
                </DropdownSideBar>
              </li>
              <li>
                <DropdownSideBar title="Рассылки" hidden>
                  <NavLink end to="/mailing" className="_icon-envelope">
                    {" "}
                    Новая рассылка{" "}
                  </NavLink>
                  <NavLink
                    end
                    to="/mailing/list"
                    className="_icon-clipboard-list"
                  >
                    {" "}
                    История рассылок{" "}
                  </NavLink>
                </DropdownSideBar>
              </li>
              <li>
                <DropdownSideBar title="Скидки" hidden>
                  <NavLink
                    end
                    to="/permanent_discount"
                    className="_icon-percent"
                  >
                    {" "}
                    Вечная скидка{" "}
                  </NavLink>
                  <NavLink end to="/coupons" className="_icon-percentage">
                    {" "}
                    Купоны{" "}
                  </NavLink>
                </DropdownSideBar>
              </li>
              <li>
                <DropdownSideBar title="Другое" hidden>
                  <NavLink to="/admins" className="_icon-user-shield">
                    {" "}
                    Администраторы{" "}
                  </NavLink>
                  <NavLink to="/labels" className="_icon-tags">
                    {" "}
                    Метки{" "}
                  </NavLink>
                </DropdownSideBar>
              </li>
              <li>
                <DropdownSideBar title="Статистика" hidden>
                  <NavLink to="/stats" className="_icon-tachometer-alt">
                    Сводка
                  </NavLink>
                  <NavLink to="/sells" className="_icon-coins">
                    Продажи
                  </NavLink>
                  <NavLink to="/views" className="_icon-users">
                    Просмотры
                  </NavLink>
                </DropdownSideBar>
              </li>
              <li>
                <DropdownSideBar title="Каталог и товары" hidden>
                  <NavLink end to="/categories" className="_icon-align-left">
                    Категории
                  </NavLink>
                  <NavLink to="/categories/new-heading" className="_icon-cart-plus">
                    Новая позиция
                  </NavLink>
                  <NavLink to="/categories/all-headings" className="_icon-box">
                    Все позиции
                  </NavLink>
                </DropdownSideBar>
              </li>
            </ul>
          </nav>
        </div>
      </SimpleBar>
    </aside>
  );
};

export default SideBar;
