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
                <NavLink to="/deposits" className={({ isActive }) => activeClassName(isActive, "_icon-list")}>Мои магазины</NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink to="/shops" className={({ isActive }) => activeClassName(isActive, "_icon-money-bill-alt")}>Пополнить баланс</NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink to="/shops" className={({ isActive }) => activeClassName(isActive, "_icon-cogs")}>Настройки</NavLink>
              </li>
              <li>
                <DropdownSideBar title="Списки" hidden={false}>
                  <NavLink to="/shops" className="_icon-money-bill-wave">Пользователи</NavLink>
                  <NavLink to="/deposits" className="_icon-users">Пополнения</NavLink>
                </DropdownSideBar>
              </li>
            </ul>
            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>
                <NavLink to="/shops" className={styles.menu__link}>Новый магазин</NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink to="/shops" className={styles.menu__link}>Мои магазины</NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink to="/shops" className={styles.menu__link}>Пополнить баланс</NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink to="/shops" className={styles.menu__link}>Настройки</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </SimpleBar>
    </aside>
  )
}

export default SideBar;