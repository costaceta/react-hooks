import { forwardRef, useImperativeHandle, useRef } from "react";
interface ModalProps {
  children: React.ReactNode;
}

const Modal = forwardRef(function Modal(
  { children }: ModalProps,
  ref: React.ForwardedRef<{ open: () => void }>
) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        open() {
          if (modalRef.current) {
            modalRef.current.showModal();
          }
        },
        close() {
          if (modalRef.current) {
            modalRef.current.close();
          }
        },
      };
    },
    []
  );

  return (
    <dialog
      ref={modalRef}
      className="bg-black text-white w-[400px] p-4 rounded-lg"
    >
      {children}

      <form method="dialog">
        <button className="bg-white text-black px-6 py-2 mt-4 w-full">
          Close
        </button>
      </form>
    </dialog>
  );
});

export default Modal;
