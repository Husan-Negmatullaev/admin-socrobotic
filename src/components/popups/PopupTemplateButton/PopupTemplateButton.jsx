import React from "react";
import clsx from "clsx";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Popup = withReactContent(Swal);

const PopupTemplateButton = ({
  classes,
  title = "Popup Title",
  buttonText = "Button",
  children,
  ...props
}) => {

  const openPopup = () => Popup.fire({
    title: title,
    confirmButtonText: "ОК",
    confirmButtonColor: "#3085D6",
    html: children,
    ...props
  });

  return <button onClick={openPopup} type="button" className={clsx(classes, "button-link")}>{buttonText}</button>
}

export default PopupTemplateButton;
