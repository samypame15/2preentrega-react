import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const mockItems = [
      {
        id: 1,
        name: "Torta",
        stock: 10,
        price: 180000,
        image: "/torta.jpg",
        description:
          "Creamos tortas a medida para cualquier ocasión, con diseños únicos y sabores deliciosos",
      },
      {
        id: 2,
        name: "Postre",
        stock: 11,
        price: 150000,
        image: "/postre.jpg",
        description:
          "Desde tartaletas hasta trufas, nuestros postres artesanales son una delicia para el paladar",
      },
      {
        id: 3,
        name: "Anchetas",
        stock: 5,
        price: 200000,
        image: "/anchetas.jpg",
        description: "Anchetas para toda ocasión, cumpleaños, románticas.",
      },
      {
        id: 4,
        name: "Desayunos",
        stock: 4,
        price: 190000,
        image: "/desayuno.jpg",
        description: "Desayuno sorpresa",
      },
    ];

    const foundItem = mockItems.find((item) => item.id === parseInt(itemId));

    if (foundItem) {
      setItem(foundItem);
    } else {
      setError("Producto no encontrado");
    }
  }, [itemId]);

  const handleAddToCart = (quantity) => {
    alert(`Añadido al carrito: ${quantity} ${item.name}(s)`);
  };

  if (error) {
    return <p>{error}</p>;
  }

  return item ? (
    <div className="container mt-5">
      <h1>{item.name}</h1>
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: "300px",
          height: "auto",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      />
      <p>Precio: ${item.price.toLocaleString()}</p>
      <p>{item.description}</p>

      <ItemCount stock={item.stock} initial={1} onAdd={handleAddToCart} />
    </div>
  ) : (
    <p>Cargando detalle...</p>
  );
};

export default ItemDetail;
