import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

import MailingListTableRow from "./MailingListTableRow";

import styles from "./MailingListTable.module.scss";

const MailingListTable = ({ classes }) => {

  return (
    <div className={clsx(styles.mailingTable, classes, "table-blue")}>
      <table className="table-blue__content">
        <thead className="table-blue__head">
          <tr className="table-blue__tr">
            <th className="table-blue__th" style={{ width: "5%" }}>ID</th>
            <th className="table-blue__th" style={{ width: "25%" }}>Сообщение</th>
            <th className="table-blue__th" style={{ width: "10%" }}>Фото</th>
            <th className="table-blue__th" style={{ width: "7%" }}>Статус</th>
            <th className="table-blue__th" style={{ width: "7%" }}>Получили</th>
            <th className="table-blue__th" style={{ width: "15%" }}>Время</th>
            <th className="table-blue__th"></th>
            <th className="table-blue__th" style={{ width: "5%" }}></th>
          </tr>
        </thead>
        <tbody className="table-blue__body">
          <MailingListTableRow />
        </tbody>
      </table>
    </div>
  );
};

MailingListTable.propTypes = {
  classes: PropTypes.object,
};

export default MailingListTable;