import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function Historial({ deletedItems, showHistorial, setShowHistorial }) {
  return (
    <>
      <Button variant="primary" onClick={() => setShowHistorial(true)}>
        Historial
      </Button>
      <Modal show={showHistorial} onHide={() => setShowHistorial(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Historial de elementos borrados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {deletedItems.length > 0 ? (
            <ul>
              {deletedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>No hay elementos borrados.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowHistorial(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Historial;

