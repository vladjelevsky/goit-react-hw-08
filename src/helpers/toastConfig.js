import { toast } from "react-hot-toast";

const toastSuccessConfig = {
  duration: 3000,
  position: "top-center",
  style: {
    background: "#dce9f5",
    color: "#069631",
    padding: "10px",
    borderRadius: "12px",
    border: "2px solid #069631",
  },
};

const toastErrorConfig = {
  duration: 3000,
  position: "top-center",
  style: {
    background: "#f5f3ed",
    color: "#c0392b",
    padding: "10px",
    borderRadius: "12px",
    border: "2px solid #e74c3c", // Темно-червоний бордюр
  },
};

// Функції для відображення тостів
const toastSuccess = (message) => {
  toast.success(message, toastSuccessConfig);
};

const toastError = (message) => {
  toast.error(message, toastErrorConfig); // Використовуємо конфігурацію для помилок
};

export { toastSuccess, toastError };
