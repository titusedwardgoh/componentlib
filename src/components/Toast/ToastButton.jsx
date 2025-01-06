import { useContext } from "react";
import { ToastContext } from "./Toast";

export default function ToastButton(props) {
  const { addToast } = useContext(ToastContext);

  const handleClick = () => {
    addToast(props);
  };

  return (
    <div onClick={handleClick} className="toast-button">
      {props.buttonTitle}
    </div>
  );
}
