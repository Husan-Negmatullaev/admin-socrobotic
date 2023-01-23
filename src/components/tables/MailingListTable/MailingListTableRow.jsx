import clsx from "clsx";
import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import styles from "./MailingListTable.module.scss";

const Popup = withReactContent(Swal);

const MailingListTableRow = () => {

  const openPopup = () => Popup.fire({
    background: "#f2f4f5",
    showConfirmButton: false,
    html: (
      <div className={styles.explain}>
        <div className={clsx(styles.explain__title, "title title_small")}>Расслка от 02.08.2022 в 17:28</div>
        <div className={styles.explain__content}>
          <p className={styles.explain__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia fuga culpa vero provident atque, quasi soluta tempora eius vitae? Dolore placeat porro obcaecati unde debitis! Ab sit culpa amet corrupti, voluptatem soluta odio, pariatur id eos odit aliquam incidunt ducimus blanditiis cumque nostrum? Qui praesentium vero iure voluptate dicta suscipit voluptatibus mollitia, necessitatibus minima maiores assumenda ea quibusdam aspernatur, rem saepe harum illum perferendis repellendus magnam vel. Impedit consectetur laudantium sapiente! Assumenda provident ex consequuntur veritatis placeat ratione similique quo iusto voluptatibus fugiat quod nam, non illum voluptatum natus in soluta dolorem necessitatibus tempora voluptas magnam doloribus! Perferendis, non voluptatem.</p>
        </div>
      </div>
    ),
  });

  return (
    <tr className="table-blue__tr">
      {/* <td colSpan={99} className="table-blue__td table-blue__td_center">Пока нет ни одной рассылки</td> */}
      <td className="table-blue__td">54036</td>
      <td className="table-blue__td">Привет</td>
      <td className="table-blue__td">Нет</td>
      <td className="table-blue__td"><span className="success">Завершено</span></td>
      <td className="table-blue__td">2</td>
      <td className="table-blue__td">02.08.2022 в 17:28</td>
      <td className="table-blue__td">
        <button type="button" onClick={openPopup} className="button button_blue-outline">Описание</button>
      </td>
    </tr>
  );
};

export default MailingListTableRow;