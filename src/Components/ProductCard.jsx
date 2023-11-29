
import React, { useState } from 'react';
import DeleteButton from '../Pages/Delete';
import Update from '../Pages/Update';
import Historial from './Historial';
import Vista from './Vista';

export const Productcard = ({ id, nombre, descripcion, precio, stock }) => {
  const productIdToDelete = id;
  const [showHistorial, setShowHistorial] = useState(false);
  const [deletedItems, setDeletedItems] = useState([]);
  const handleDelete = (productId) => {
    setDeletedItems((prevItems) => [...prevItems, productId]);
  };

  return (
    <>
      <tbody>
        <tr>
          <td> {id} </td>
          <td>{nombre}</td>
          <td>{descripcion} </td>
          <td>{precio}</td>
          <td>{stock}</td>
          <td className="tbutton">
            <Update
              productId={id}
              nombre={nombre}
              descripcion={descripcion}
              precio={precio}
              stock={stock}
            />
            <DeleteButton
              productId={productIdToDelete}
              handleDelete={handleDelete}
            />
            <Vista
              product={{
                id,
                nombre,
                descripcion,
                precio,
                stock
              }}
            />
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Productcard;