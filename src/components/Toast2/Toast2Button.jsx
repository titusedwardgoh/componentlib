import React from "react"
import { Toast2Context } from "./Toast2";

export default function Toast2Button({children}) {
  const { toastPop } = React.useContext(Toast2Context);

  return (
    <div className="toast-button" onClick = {toastPop}>
      {children}
    </div>
  );
}
