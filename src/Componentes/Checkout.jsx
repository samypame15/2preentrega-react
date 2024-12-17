import React from "react";
import Brief from "./Brief";
import { useNavigate } from "react-router-dom";

const Checkout = ({ item, quantity }) => {
  const navigate = useNavigate();
  const subtotal = item.price * quantity;
  const handleCheckout = () => {
    navigate("/pago", { state: { item, quantity, subtotal } });
  };

  return (
    <div
      style={{
        marginTop: "30px",
        borderTop: "1px solid #ddd",
        paddingTop: "20px",
      }}
    >
      <h2>Resumen de compra</h2>
      <Brief name={item.name} quantity={quantity} price={item.price} />
      <p>
        <strong>Total:</strong> ${subtotal.toLocaleString()}
      </p>
      <button
        onClick={handleCheckout}
        style={{
          backgroundColor: "#f0b1dc",
          color: "white",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "5px",
          marginTop: "10px",
        }}
      >
        Proceder al pago
      </button>
    </div>
  );
};

export default Checkout;
