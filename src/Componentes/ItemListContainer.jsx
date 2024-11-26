import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddToCart = (item, quantity) => {
    alert(`Has añadido ${quantity} unidades de ${item.name} al carrito.`);
  };

  useEffect(() => {
    setTimeout(() => {
      const mockItems = [
        { id: 1, name: "Torta", 
          stock: 10, 
          price: 180000,
           image: "/torta.jpg" },
           
        {
          id: 2,
          name: "Postre",
          stock: 11,
          price: 150000,
          image: "/postre.jpg",
        },
        {
          id: 3,
          name: "Anchetas",
          stock: 5,
          price: 200000,
          image: "/anchetas.jpg",
        },
        {
          id: 4,
          name: "Desayunos",
          stock: 4,
          price: 190000,
          image: "/desayuno.jpg",
        },
      ];
      setItems(mockItems);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h1 className="text-center">Lista de Productos</h1>
      {loading ? (
        <p className="text-center">Cargando...</p>
      ) : (
        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="col-md-3 mb-4">
              <div className="card">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    Precio: ${item.price.toLocaleString()}
                  </p>
                  <ItemCount
                    stock={item.stock}
                    onAdd={(quantity) => handleAddToCart(item, quantity)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
