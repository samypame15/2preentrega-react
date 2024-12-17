import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import mockItems from "./mockItems"; 
import ItemQuantitySelector from "./ItemQuantitySelector";
import Description from "./Description";
import AddItemButton from "./AddItemButton";
import Checkout from "./Checkout";

const ItemDetail = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  useEffect(() => {
    const foundItem = mockItems.find((item) => item.id === parseInt(itemId));

    if (foundItem) {
      setItem(foundItem);
    } else {
      setError("Producto no encontrado");
    }
    setLoading(false); 
  }, [itemId]);

  const handleAddToCart = () => {
    if (selectedQuantity > item.stock) {
      alert("La cantidad seleccionada excede el stock disponible.");
    } else {
      alert(`Añadido al carrito: ${selectedQuantity} ${item.name}(s)`);
    }
  };


  const renderLoading = () => (
    <div className="container mt-5 text-center">
      <p>Cargando detalle del producto...</p>
      <div className="spinner-border text-primary" role="status"></div>
    </div>
  );

  const renderError = () => (
    <div className="container mt-5 text-center">
      <h2>{error}</h2>
      <Link to="/" className="btn btn-primary mt-3">
        Volver a la página principal
      </Link>
    </div>
  );


  const renderProductDetails = () => (
    <div className="container mt-5">
      <div className="text-center">
        <h1>{item.name}</h1>
        <img
          src={item.image}
          alt={item.name}
          style={{
            width: "300px",
            height: "auto",
            marginBottom: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          }}
        />
        <p>
          <strong>Precio:</strong> ${item.price.toLocaleString()}
        </p>
        <p>
          <strong>Disponibilidad:</strong> {item.stock > 0 ? `${item.stock} en stock` : "Agotado"}
        </p>
      </div>

      <Description text={item.description} />
      <ItemQuantitySelector
        stock={item.stock}
        initial={1}
        onQuantityChange={setSelectedQuantity}
      />
      <AddItemButton onAdd={handleAddToCart} disabled={item.stock <= 0} />
      <Checkout item={item} quantity={selectedQuantity} />
    </div>
  );

  if (loading) return renderLoading();
  if (error) return renderError();
  return item ? renderProductDetails() : null;
};

export default ItemDetail;

