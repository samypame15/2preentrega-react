import React, { useState, useEffect } from "react";

const ItemQuantitySelector = ({ stock, initial, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initial);

  useEffect(() => {
    setQuantity(initial);
  }, [initial]);

  const sumar = () => {
    if (quantity < stock) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const restar = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "10px" }}>
      <div
        style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}
      >
        <button onClick={restar} disabled={quantity <= 1}>
          -
        </button>
        <span>{quantity}</span>
        <button onClick={sumar} disabled={quantity >= stock}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemQuantitySelector;
