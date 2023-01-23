import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import AdminsTableRow from "./AdminsTableRow";

const AdminsTable = ({ classes }) => {
  return (
    <div className={clsx(classes, "table table_solid")}>
      <table className="table__wrapper">
        <thead className="table__head">
          <tr className="table__tr">
            <th className="table__th" style={{ width: "25%" }}>ID Пользователя</th>
            <th className="table__th" style={{ width: "25%" }}>Логин</th>
            <th className="table__th" style={{ width: "25%" }}></th>
            <th className="table__th"></th>
            <th className="table__th"></th>
          </tr>
        </thead>
        <tbody className="table__body">
          <AdminsTableRow />
          <AdminsTableRow />
        </tbody>
      </table>
    </div>
  );
};

AdminsTable.propTypes = {
  classes: PropTypes.object,
};

export default AdminsTable;
