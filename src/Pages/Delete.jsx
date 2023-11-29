import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function DeleteButton({ productId, handleDelete }) {
  const [showModal, setShowModal] = useState(false);

  const handleConfirmDelete = () => {
    fetch(`http://localhost:3000/productos/delete/${productId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          console.log('Producto eliminado correctamente.');
          setShowModal(false);
          window.location.reload(); // Recargar la página
          return response.json();
        } else {
          throw new Error(
            'No se pudo eliminar el producto. El ID del producto podría no existir.'
          );
        }
      })
      .then((data) => {
        // Hacer algo con los datos si es necesario
      })
      .catch((error) =>
        console.error('Error al eliminar el producto:', error)
      );
  };

  return (
    <>
      <Button
        variant="danger"
        onClick={() => setShowModal(true)}
        style={{}}
      >
        <i className="fa-solid fa-x"></i> Eliminar
      </Button>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar el siguiente elemento?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleConfirmDelete}>
            Confirmar
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteButton;