import React from 'react';
import DeleteButton from '../Pages/Delete';
import '../index.css'
import CreateButton from '../Pages/Create';


export const Productcard = ({ id, nombre, descripcion, precio, stock }) => {
  const productIdToDelete = id;

  return (
    <>
    
      <tbody>
        <tr>
        <td> {id} </td>
        <td>{nombre}</td> 
        <td>{descripcion} </td> 
        <td>{precio}</td> 
        <td>{stock}</td>
        <td><DeleteButton productId={productIdToDelete} /> <CreateButton productId={productIdToDelete} /> </td>
        </tr>
      </tbody>

    </>
  );
};

export default Productcard;