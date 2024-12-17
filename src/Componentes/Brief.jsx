import React from "react";

const Brief = ({ name, quantity, price }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <p>
        <strong>Producto:</strong> {name}
      </p>
      <p>
        <strong>Cantidad:</strong> {quantity}
      </p>
      <p>
        <strong>Precio unitario:</strong> ${price.toLocaleString()}
      </p>
    </div>
  );
};

export default Brief;
