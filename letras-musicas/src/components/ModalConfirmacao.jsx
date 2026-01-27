import { Modal, Button } from "react-bootstrap";

function ModalConfirmacao({ show, onHide, mensagem }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sucesso</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{mensagem}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalConfirmacao;
