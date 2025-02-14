import { useDispatch } from "react-redux";
import css from "./ConfirmDeleteModal.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import { FcOk, FcCancel } from "react-icons/fc";

import ReactDOM from "react-dom";
import useCloseModal from "../../helpers/hooks/useCloseModal";

const modalRoot = document.querySelector("#modal-root");
const ConfirmDeleteModal = ({ id, onClose }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  const { handleBackdropClick } = useCloseModal(onClose);

  return ReactDOM.createPortal(
    <div className={css.modalBackdrop} onClick={handleBackdropClick}>
      <div className={css.modalContent}>
        <p className={css.message}>
          Are you sure you want to <b>delete</b> this contact?
        </p>
        <div className={css.btnPanel}>
          <button className={css.btn} type="button" onClick={handleDelete}>
            Yes
            <FcOk size="30px" />
          </button>
          <button className={css.btn} type="button" onClick={handleCancel}>
            No
            <FcCancel size="30px" />
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ConfirmDeleteModal;
