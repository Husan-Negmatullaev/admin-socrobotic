import React from "react";

export default function useOutsideAlerter(initialIsVisible) {
  const [isShow, setIsShow] = React.useState(initialIsVisible);
  const ref = React.useRef(null);

  const handleClickOutside = (event) => {
    event.preventDefault();
    if (ref.current && !ref.current.contains(event.target)) {
      setIsShow(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.addEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isShow, setIsShow };
}