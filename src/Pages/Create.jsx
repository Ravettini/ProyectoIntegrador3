import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function CreateButton({ productId }) {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
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
      .catch((error) => console.error('Error al eliminar el producto:', error));
  };

  return (
    <>
      <Button
        variant="success"
        onClick={() => setShowModal(true)}
        style={{
          
        }}
      >
        Crear
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación de eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¿Estás seguro de que deseas eliminar el siguiente elemento?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            No
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Sí
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateButton;