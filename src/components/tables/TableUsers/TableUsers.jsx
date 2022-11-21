import React from "react";
import clsx from "clsx";

import TableUsersRow from "./TableUsersRow";

const TableUsers = ({ classes }) => {
  return (
    <div className={clsx(classes, "table")}>
      <table className="table__wrapper">
        <thead className="table__head">
          <tr className="table__tr">
            <th className="table__th">ID</th>
            <th className="table__th">Логин</th>
            <th className="table__th"><button type="button" className="table__button">Баланс</button></th>
            <th className="table__th"><button type="button" className="table__button">Рефералы</button></th>
            <th className="table__th"><button type="button" className="table__button">Заработано</button></th>
            <th className="table__th"><button type="button" className="table__button">Потрачено</button></th>
            <th className="table__th"><button type="button" className="table__button">Первый заход</button></th>
            <th className="table__th"><button type="button" className="table__button">Реф. %</button></th>
            <th className="table__th"><button type="button" className="table__button">Возвраты</button></th>
            <th className="table__th"></th>
          </tr>
        </thead>
        <tbody className="table__body">
          <TableUsersRow />
        </tbody>
      </table>
    </div>
  )
}

export default TableUsers
