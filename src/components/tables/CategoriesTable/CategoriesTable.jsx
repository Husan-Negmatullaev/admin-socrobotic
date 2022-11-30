import React from "react";
import clsx from "clsx";
import CategoriesTableRow from "./CategoriesTableRow";

const CategoriesTable = ({ classes }) => {
  return (
    <div className={clsx(classes, "table-blue table-blue_text-bottom")}>
      <table className="table-blue__content">
        <thead className="table-blue__head">
          <tr className="table-blue__tr">
            <th style={{ width: "8%" }} className="table-blue__th">
              ID
            </th>
            <th style={{ width: "70%" }} className="table-blue__th">
              Категория
            </th>
            <th style={{ width: "5%" }} className="table-blue__th">
              Скрыта
            </th>
            <th style={{ width: "8%" }} className="table-blue__th">
              Скрыта на сайте
            </th>
            <th className="table-blue__th">Подкатегории</th>
            <th style={{ width: "15%" }} className="table-blue__th">
              Скачать товары
            </th>
            <th className="table-blue__th">Удалить товары</th>
            <th style={{ width: "5%" }} className="table-blue__th">
              Удалить
            </th>
          </tr>
        </thead>
        <tbody className="table-blue__body">
          <CategoriesTableRow />
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesTable;