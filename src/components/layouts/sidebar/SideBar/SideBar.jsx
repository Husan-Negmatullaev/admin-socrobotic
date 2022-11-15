import React from "react";
import { NavLink } from "react-router-dom";
import SimpleBar from "simplebar-react";
import clsx from "clsx";

import styles from "./SideBar.module.scss";
import "simplebar-react/dist/simplebar.min.css";

const SideBar = () => {

  return (
    <aside className={styles.sidebar}>
      <SimpleBar className={styles.menu__scrollbar} forceVisible="y" autoHide={false}>
        <div className={clsx(styles.sidebar__menu, styles.menu)}>
          <nav className={styles.menu__body}>
            <ul className={styles.menu__list}>
              <li className={styles.menu__item}>
                <NavLink to="/shops" className={clsx(styles.menu__link, "_icon-plus-square")}>Новый магазин</NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink to="/shops" className={clsx(styles.menu__link, "_icon-list")}>Мои магазины</NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink to="/shops" className={clsx(styles.menu__link, "_icon-money-bill-alt")}>Пополнить баланс</NavLink>
              </li>
              <li className={styles.menu__item}>
                <NavLink to="/shops" className={clsx(styles.menu__link, "_icon-cogs")}>Настройки</NavLink>
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