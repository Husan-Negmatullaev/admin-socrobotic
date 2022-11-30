import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { CategoriesTable } from "@components/tables";

import styles from "./CategoriesPage.module.scss";

const CategoriesPage = () => {
  return (
    <div className={clsx(styles.categories, "page")}>
      <div className={clsx(styles.categories__body, "page__body")}>
        <div className={clsx(styles.categories__row, "page__row")}>
          <div className={styles.categories__header}>
            <Link
              to="categories/add"
              className={clsx(
                styles.categories__button,
                "button button_success-outline"
              )}
            >
              Новая категория
            </Link>
          </div>
          <CategoriesTable />
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
