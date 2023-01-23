import React from "react";
import { PopupTemplateButton } from "@components/popups";
import Swal from "sweetalert2";

const TableUsersRow = () => {
  const [balance, setBalance] = React.useState(0);
  const [referral, setReferral] = React.useState(0);
  const [messages, setMessages] = React.useState("");

  const changeBalanceHandler = (event) => {
    event.preventDefault();

    const targetItemValue = event.target.value;
    setBalance(targetItemValue);
  };

  const changeReferralHandler = (event) => {
    event.preventDefault();
    const targetItemValue = event.target.value;

    if (targetItemValue.length !== 4) {
      setReferral(targetItemValue);
      return;
    }
  };

  const submitFormHandler = (event) => {
    Swal.close();
    event.preventDefault();
  };

  return (
    <tr className="table__tr">
      <td className="table__td">766811959</td>
      <td className="table__td"><button type="button" className="table__button">@chatbotzero</button></td>
      <td className="table__td">
        <PopupTemplateButton
          classes="table__button"
          title="Изменить баланс"
          buttonText={(balance || "0") + "₽"}
        >
          <form onSubmit={submitFormHandler}>
            <input
              placeholder="0₽"
              type={"tel"}
              inputMode={"numeric"}
              autoComplete={"cc-number"}
              className="swal2-input"
              value={balance}
              onChange={changeBalanceHandler}
            />
          </form>
        </PopupTemplateButton>
      </td>
      <td className="table__td">0 (<button type="button" className="table__button">список</button>)</td>
      <td className="table__td">0</td>
      <td className="table__td">0₽ (<button type="button" className="table__button">покупки</button>)</td>
      <td className="table__td">02.08.2022 в 10:32</td>
      <td className="table__td">
        <PopupTemplateButton
          classes="table__button"
          title="Изменить реферальные отчисления"
          buttonText={(referral || "0") + "%"}
        >
          <form onSubmit={submitFormHandler}>
            <input
              placeholder="0%"
              type={"tel"}
              inputMode={"numeric"}
              autoComplete={"cc-number"}
              className="swal2-input"
              value={referral}
              onChange={changeReferralHandler}
            />
          </form>
        </PopupTemplateButton>
      </td>
      <td className="table__td">0</td>
      <td className="table__td">
        <PopupTemplateButton
          classes="table__button button button_blue-outline"
          title="Изменить баланс"
          buttonText={balance || "Написать"}
        >
          <form onSubmit={submitFormHandler}>
            <textarea
              placeholder="Введите сообщение"
              type={"text"}
              className="swal2-textarea"
              value={messages}
              onChange={(event) => setMessages(event.target.value)}
            />
          </form>
        </PopupTemplateButton>
        {/* <button className="button button_blue-outline">Написать</button> */}
      </td>
    </tr>
  );
};

export default TableUsersRow;