import classes from "./Modal.module.css";

type Props = {
  children?: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
};

const Modal: React.FC<Props> = ({ isOpen, children, toggle }) => {
  return (
    <>
      {isOpen && (
        <div className={classes.modalOverlay} onClick={toggle}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={classes.modalBox}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
