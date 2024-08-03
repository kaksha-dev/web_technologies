import { Modal } from "react-bootstrap";
import UButton from "../ubutton";

function UModal({
  show,
  handleClose,
  handleAccept,
  heading,
  body,
  acceptButtonText = "Save",
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <UButton variant="secondary" onClick={handleClose}>
          Close
        </UButton>
        <UButton variant="primary" onClick={handleAccept}>
          {acceptButtonText}
        </UButton>
      </Modal.Footer>
    </Modal>
  );
}

export default UModal;
