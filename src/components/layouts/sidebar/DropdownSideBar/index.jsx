import React from "react";
import clsx from "clsx";

import styles from "./DropdownSideBar.module.scss";

const DropdownSideBar = ({ children, title = "Dropdown", hidden = true }) => {
  const [isHidden, setIsHidden] = React.useState(hidden);

  return (
    <div className={styles.dropdown}>
      <button onClick={() => setIsHidden(!isHidden)} type="button" className={clsx(styles.dropdown__button, "_icon-angle-right", { [styles.dropdown__button_open]: !isHidden })}>{title}</button>
      <ul hidden={isHidden} className={clsx(styles.dropdown__list, { [styles.dropdown__list_open]: isHidden })}>
        {
          React.Children.map(children, (child) => {
            const currentClassName = child.props.className;

            const element = React.cloneElement(child,
              {
                className: ({ isActive }) => clsx(styles.dropdown__link, currentClassName, { [styles.dropdown__link_active]: isActive }),
              }
            );

            return <li className={styles.dropdown__item}>{element}</li>;
          })
        }
      </ul>
    </div>
  )
}

export default DropdownSideBar;