import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import css from "./Contact.module.css";

import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";
import { useToggle } from "../../helpers/hooks/useToogle";
import EditContactModal from "../EditContactModal/EditContactModal";

const Contact = ({ id, name, number }) => {
  const {
    isOpen: isDeleteOpen,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
  } = useToggle();
  const {
    isOpen: isEditOpen,
    openModal: openEditModal,
    closeModal: closeEditModal,
  } = useToggle();

  return (
    <>
      <div className={css.contactInfo}>
        <p className={css.info}>
          <FaUser className={css.contactIcon} />
          {name}
        </p>
        <p className={css.info}>
          <FaPhoneAlt className={css.contactIcon} />
          {number}
        </p>
      </div>
      <div className={css.btnPanel}>
        <button className={css.editBtn} type="button" onClick={openEditModal}>
          <GrEdit className={css.editIcon} />
        </button>
        {isEditOpen && <EditContactModal id={id} onClose={closeEditModal} />}
        <button
          className={css.deleteBtn}
          type="button"
          onClick={openDeleteModal}
        >
          Delete
        </button>
      </div>
      {isDeleteOpen && (
        <ConfirmDeleteModal id={id} onClose={closeDeleteModal} />
      )}
    </>
  );
};

export default Contact;
