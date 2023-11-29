import React, { useState, useEffect } from 'react';
import { Productcard } from '../Components/ProductCard';
import { Navxd } from '../Components/Navxd';
import { Main } from '../Components/Main';
import '../index.css'

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);


  const fetchProductsByName = async () => {
    try {
      const response = await fetch(`http://localhost:3000/productos/search?name=${searchTerm}`);
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      setProducts([]);
    }
  };



  const fetchProducts = async () => {
    try {
      const response = await fetch(`http://localhost:3000/productos`);
      if (response.ok) {
        const data = await response.json();
        setProducts(data.productos);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error('Error al obtener los productos:', error);
      setProducts([]);
    }
  };

  useEffect(() => {
    if (searchTerm !== '') {
      if (!isNaN(searchTerm)) {
        
      } else {
        fetchProductsByName();
      }
    } else {
      fetchProducts();
    }
  }, [searchTerm]);

  return (
    <>
    <Navxd/>
    <div className='MainBorder'>
      <Main/>
      <div className='d-flex pb-3 busqueda justify-content-center'>
        <label><i class="fa-solid fa-magnifying-glass"></i></label>
      <input
        type="text"
        placeholder='Busqueda por nombre'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      <div className="containertable">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Acciones</th>
        </tr>
      </thead>
      
      {products ? (
        
        products.map((product) => <Productcard key={product.id} {...product}/>
        )
      ) : (
        <p>No se encontró ningún producto con ese nombre.</p>
      )}
      
    </table>
      </div>
    </div>
    </>
  );
};

export default  Index;