import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = () => {
  const menuIcon = React.useRef(null);

  React.useEffect(() => {
    const { current } = menuIcon;

    const handleClickMenu = () => {
      document.documentElement.classList.toggle("menu-open");
    };

    current.addEventListener("click", handleClickMenu);

    return () => current.removeEventListener("click", handleClickMenu);
  }, []);

  return (
    <header className={styles.header}>
      <div className={clsx(styles.header__body)}>
        <div className={styles.header__logo}>
          <button ref={menuIcon} type="button" className={clsx(styles.header__icon, "icon-menu")}><span></span></button>
          <Link className={clsx(styles.header__linkLogo, "_icon-store")}>anyshop</Link>
        </div>
        <ul className={styles.header__list}>
          <li>
            Баланс: 0 <Link to="/" className={styles.header__button}>(пополнить)</Link>
          </li>
          <li>
            <span className={styles.header__username}>husan | </span> <Link className={styles.header__button} to="/">Выйти</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;