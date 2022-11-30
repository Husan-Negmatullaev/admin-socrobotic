import React from "react";
import clsx from "clsx";

import styles from "./CategoriesTable.module.scss";

const CategoriesTableRow = () => {
  return (
    <tr className="table-blue__tr">
      {/*<td colSpan={8} className="table-blue__td table-blue__td_bold table-blue__td_center">Нет ни одной категории</td>*/}
      <td className="table-blue__td table-blue__td_bold">19643</td>
      <td className="table-blue__td table-blue__td_bold">
        Some Title (
        <button
          type={"button"}
          className={"button-link button-link_size button-link_bold"}
        >
          редактировать
        </button>
        )
      </td>
      <td className="table-blue__td"><button className={clsx(styles.button, styles.button_green, "_icon-eye")}>Нет</button></td>
      <td className="table-blue__td"><button className={clsx(styles.button, styles.button_red, "_icon-eye-slash")}>Да</button></td>
      <td className="table-blue__td">0 (<button className={"button-link button-link_size"}>список</button>)</td>
      <td className="table-blue__td"><button className={"button button_blue-outline"}>Написать</button></td>
      <td className="table-blue__td table-blue__td_center"><button className={clsx(styles.button, styles.button_grey, "_icon-trash-alt")}></button></td>
      <td className="table-blue__td table-blue__td_center"><button className={clsx(styles.button, styles.button_grey, "_icon-trash-alt")}></button></td>
    </tr>
  );
};

export default CategoriesTableRow;