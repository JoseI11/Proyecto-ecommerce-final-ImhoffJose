import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const OrderProductos = ({idCompra}) => {
  const [show, setShow] = useState(true);
  
  const handleClose = () => setShow(false);
  
  return (
    <>
      <Modal size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Compra exitosa</Modal.Title>
        </Modal.Header>
        <Modal.Body>Su compra fue realizada con exito ,utilice el siguiente codigo {idCompra} para el seguimiento de su compra</Modal.Body>
        <Modal.Footer>
          <Button as={Link} variant="primary" onClick={handleClose} to='/'>
            Finalizar compra
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default OrderProductos