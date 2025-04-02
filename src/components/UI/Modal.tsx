import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FaWindowClose } from "react-icons/fa";

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  open,
  onClose,
  className = "",
}) => {
  const dialog = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (dialog.current) {
      dialog.current.style.display = open ? "block" : "none";
    }
  }, [open]);

  return createPortal(
    <>
      {open && <div className="backdrop" onClick={onClose} />}
      <div className={`modal-class ${className}`} ref={dialog}>
        <div className="modal-close-btn" onClick={onClose}>
          <FaWindowClose />
        </div>
        {children}
      </div>
    </>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
