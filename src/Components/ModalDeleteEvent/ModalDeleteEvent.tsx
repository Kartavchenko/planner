import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

interface ModalPropsTypes {
  removeEvt: () => void;
}

export default function ModalDeleteEvent({ removeEvt }: ModalPropsTypes) {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className="event-btn__delete" type="button" onClick={handleOpen}>
        Delete event
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <div className="modal-box">
            <p className="modal-delete__text">
              Are you sure that you want to delete the event?
            </p>
            <div className="modal-box__btns">
              <button
                className="event-btn__cancel"
                type="button"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                className="event-btn__delete"
                type="button"
                onClick={() => removeEvt()}
              >
                Delete
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
