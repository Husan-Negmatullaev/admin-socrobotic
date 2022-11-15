import React from "react";
import clsx from "clsx";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx(styles.footer__container, "container")}>
        <a className={styles.footer__link} href="https://socrobotic.io/" target="_blank" rel="noreferrer">socrobotic.io</a>
      </div>
    </footer>
  )
}

export default Footer;