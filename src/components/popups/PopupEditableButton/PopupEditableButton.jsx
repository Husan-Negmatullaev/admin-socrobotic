import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import styles from "./PopupEditableButton.module.scss";

const Popup = withReactContent(Swal);

const PopupEditableButton = (props) => {
  const {
    buttonTitle,
    classes,
    children,
    popupTitle = "Редактировать элемент"
  } = props;

  const openPopup = () => Popup.fire({
    position: "bottom-end",
    showConfirmButton: false,
    html: (
      <div className={styles.editable}>
        <h5 className={styles.editable__title}>{popupTitle}</h5>
        {children}
      </div>
    ),
  });

  return (
    <button
      title={"Кликните дважды"}
      type="button"
      className={classes}
      onDoubleClick={openPopup}
    >
      {buttonTitle}
    </button>
  )
}

export default PopupEditableButton;