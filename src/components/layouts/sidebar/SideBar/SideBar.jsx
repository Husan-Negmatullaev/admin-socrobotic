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
    return `${styles.menu__link} ${icon} ${isActive ? styles.menu__link_active : ""}`
  };

  return (
    <aside className={styles.sidebar}>
      <SimpleBar className={styles.menu__scrollbar} forceVisible="y" autoHide={false}>
        <div className={clsx(styles.sidebar__menu, styles.menu)}>
          <nav className={styles.menu__body}>
            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>
                <NavLink to="/" className={({ isActive }) => activeClassName(isActive, "_icon-plus-square")}>Новый магазин</NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink to="/shops" className={({ isActive }) => activeClassName(isActive, "_icon-list")}>Мои магазины</NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink to="/settings" className={({ isActive }) => activeClassName(isActive, "_icon-cogs")}>Настройки бота</NavLink>
              </li>
              {/* <li className={styles.menu__item}>
                <NavLink to="/shops" className={({ isActive }) => activeClassName(isActive, "_icon-money-bill-alt")}>Пополнить баланс</NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink to="/shops" className={({ isActive }) => activeClassName(isActive, "_icon-cogs")}>Настройки</NavLink>
              </li> */}
            </ul>
            <ul className={styles.menu__list}>
              <li>
                <DropdownSideBar title="Списки" hidden={false}>
                  <NavLink to="/shops" className="_icon-money-bill-wave">Пользователи</NavLink>
                  <NavLink to="/deposits" className="_icon-users">Пополнения</NavLink>
                </DropdownSideBar>
              </li>
              <li>
                <DropdownSideBar title="Меню пользователя" hidden>
                  <NavLink to="/constructor" className="_icon-info-circle">Кнопки</NavLink>
                  <NavLink to="/support" className="_icon-gift">Раздел "Помощь"</NavLink>
                  <NavLink to="/" className="_icon-toolbox">Раздел "Подарки"</NavLink>
                </DropdownSideBar>
              </li>
            </ul>
          </nav>
        </div>
      </SimpleBar>
    </aside>
  )
}

export default SideBar;