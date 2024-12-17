import React from "react";

const AddItemButton = ({ onAdd }) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <button
        onClick={onAdd}
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
  );
};

export default AddItemButton;
