import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();  

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      try {
        const mockItems = [
          { id: 1, name: "Torta", category: "pastelería", stock: 10, price: 180000, image: "/torta.jpg" },
          { id: 2, name: "Postre", category: "dulces", stock: 11, price: 150000, image: "/postre.jpg" },
          { id: 3, name: "Anchetas", category: "anchetas", stock: 5, price: 200000, image: "/anchetas.jpg" },
          { id: 4, name: "Desayunos", category: "desayunos", stock: 4, price: 190000, image: "/desayuno.jpg" },
        ];
        const filteredItems = categoryId
          ? mockItems.filter((item) => item.category === categoryId)
          : mockItems;

        setItems(filteredItems);
      } catch (err) {
        setError("Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    }, 2000);
  }, [categoryId]);  

  return (
    <div>
      <h1 className="text-center">Lista de Productos</h1>
      {error && <p className="text-center text-danger">{error}</p>}
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
                    onAdd={(quantity) => alert(`${quantity} de ${item.name} añadidos al carrito`)}
                  />
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                    <Link to={`/item/${item.id}`} className="btn btn-danger mt-2">
                      Ver Detalle
                    </Link>
                  </div>
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

