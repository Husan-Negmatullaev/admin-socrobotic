import React from "react";
import clsx from "clsx";

import styles from "./HeadingTables.module.scss";

const HeadingTablesRow = () => {

  return (
    <tr className="table__tr">
      <td className="table__td table__td_center" colSpan={7}>
        Не найден товар
      </td>
    </tr>
  );
};

export default HeadingTablesRow;
