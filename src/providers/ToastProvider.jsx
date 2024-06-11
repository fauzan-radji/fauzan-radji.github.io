import PropTypes from "prop-types";
import { Toast } from "../components";
import { ToastContext } from "../contexts/useToast";
import { useState } from "react";

export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function push(text) {
    setToasts((prevToasts) => [
      ...prevToasts,
      {
        id: Date.now(),
        text,
      },
    ]);

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.slice(1));
    }, 5000);
  }

  return (
    <ToastContext.Provider value={push}>
      {toasts.map((toast) => (
        <Toast key={toast.id}>{toast.text}</Toast>
      ))}
      {children}
    </ToastContext.Provider>
  );
}

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
