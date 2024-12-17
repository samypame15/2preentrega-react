import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { Spinner } from "react-bootstrap";

const mockItems = [
  {
    id: 1,
    name: "Torta de Cumpleaños",
    category: "tortas",
    stock: 10,
    price: 180000,
    image: "/torta.jpg",
  },
  {
    id: 2,
    name: "Postre Artesanal",
    category: "postres",
    stock: 11,
    price: 150000,
    image: "/postre.jpg",
  },
  {
    id: 3,
    name: "Anchetas de Regalo",
    category: "anchetas",
    stock: 5,
    price: 200000,
    image: "/anchetas.jpg",
  },
  {
    id: 4,
    name: "Desayuno Sorpresa",
    category: "desayunos",
    stock: 4,
    price: 190000,
    image: "/desayuno.jpg",
  },
  {
    id: 5,
    name: "Torta personalizada",
    category: "tortas",
    stock: 20,
    price: 170000,
    image: "/personalizada.png",
  },
  {
    id: 6,
    name: "Cupcake Gourmet",
    category: "postres",
    stock: 30,
    price: 30000,
    image: "/cupcake.png",
  },
  {
    id: 7,
    name: "Ancheta Personalizada",
    category: "anchetas",
    stock: 7,
    price: 120000,
    image: "/anchetas.png",
  },
  {
    id: 8,
    name: "Desayuno sorpresas Especial",
    category: "desayunos",
    stock: 8,
    price: 70000,
    image: "./desayunosorpresas.png",
  },
];

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchItems = () => {
      setTimeout(() => {
        try {
          const filteredItems = categoryId
            ? mockItems.filter(
                (item) =>
                  item.category.toLowerCase() === categoryId.toLowerCase()
              )
            : mockItems;
          setItems(filteredItems);
        } catch (err) {
          setError(
            "Error al cargar los productos. Por favor, inténtelo nuevamente."
          );
        } finally {
          setLoading(false);
        }
      }, 2000);
    };

    fetchItems();
  }, [categoryId]);

  return (
    <div>
      <h1 className="text-center">Lista de Productos</h1>
      {error && <p className="text-center text-danger">{error}</p>}

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Cargando...</span>
          </Spinner>
        </div>
      ) : items.length === 0 ? (
        <p className="text-center text-warning">
          No se encontraron productos en esta categoría.
        </p>
      ) : (
        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="col-md-3 mb-4">
              <div className="card h-100">
                <img
                  src={item.image}
                  alt={`Imagen de ${item.name}`}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">
                    Precio:{" "}
                    {new Intl.NumberFormat("es-CO", {
                      style: "currency",
                      currency: "COP",
                    }).format(item.price)}
                  </p>
                  <ItemCount
                    stock={item.stock}
                    onAdd={(quantity) =>
                      alert(`${quantity} de ${item.name} añadidos al carrito`)
                    }
                  />
                  <Link
                    to={`/item/${item.id}`}
                    className="btn btn-danger mt-auto"
                  >
                    Ver Detalle
                  </Link>
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
