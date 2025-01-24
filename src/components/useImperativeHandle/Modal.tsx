import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal(
  { children }: { children: React.ReactNode },
  ref: any
) {
  const dialog = useRef<HTMLDialogElement>();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        if (dialog.current) {
          dialog.current.showModal();
        }
      },
      close: () => {
        if (dialog.current) {
          dialog.current.close();
        }
      },
    };
  });

  return (
    <dialog ref={dialog} className="w-[400px] p-8 bg-black text-white">
      {children}

      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default Modal;
