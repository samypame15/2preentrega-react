import React, { useState } from "react";

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (onAdd) {
      onAdd(count);
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "10px" }}>
      <div
        style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}
      >
        <button onClick={restar} disabled={count <= 1}>
          -
        </button>
        <span>{count}</span>
        <button onClick={sumar} disabled={count >= stock}>
          +
        </button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button
          onClick={handleAdd}
          style={{
            backgroundColor: "#f0b1dc",
            color: "white",
            border: "none",
            padding: "5px 15px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;

