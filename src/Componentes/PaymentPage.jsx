import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root");

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item, quantity, subtotal } = location.state || {};

  const [modalIsOpen, setModalIsOpen] = useState(false);

  if (!item || !quantity || !subtotal) {
    setTimeout(() => navigate("/cart"), 2000);
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>No hay datos para mostrar. Serás redirigido al carrito.</p>
      </div>
    );
  }

  const handlePayment = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Página de Pago</h1>
      <p>
        <strong>Producto:</strong>{" "}
        {item && item.name ? item.name : "Sin nombre"}
      </p>
      <p>
        <strong>Cantidad:</strong> {quantity}
      </p>
      <p>
        <strong>Total a pagar:</strong>{" "}
        {new Intl.NumberFormat("es-CO", {
          style: "currency",
          currency: "COP",
        }).format(subtotal)}
      </p>
      <button
        style={{
          backgroundColor: "#f0b1dc",
          color: "white",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "5px",
          marginTop: "20px",
          fontSize: "16px",
        }}
        onClick={handlePayment}
      >
        Confirmar Pago
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Confirmación de pago"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          },
          content: {
            color: "#333",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "500px",
            margin: "0 auto",
          },
        }}
      >
        <h2>Pago realizado con éxito</h2>
        <p>Gracias por tu compra. Tu pago ha sido procesado correctamente.</p>
        <button
          onClick={handleCloseModal}
          style={{
            backgroundColor: "#f0b1dc",
            color: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          Cerrar
        </button>
      </Modal>
    </div>
  );
};

export default PaymentPage;
