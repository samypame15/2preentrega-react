import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarReact from "./Componentes/NavbarReact";
import Banner from "./Componentes/Banner";
import ItemListContainer from "./Componentes/ItemListContainer";
import Footer from "./Componentes/Footer";
import ItemDetail from "./Componentes/ItemDetail";
import Checkout from "./Componentes/Checkout";
import PaymentPage from "./Componentes/PaymentPage";

function App() {
  return (
    <Router>
      <div>
        <NavbarReact />
        <Banner>
          <main>
            <h2>Bienvenido a Pastelería y Repostería Emicake</h2>
            <p>
              Somos una pastelería y repostería que crea dulces irresistibles
              para cada ocasión. Desde pasteles personalizados hasta deliciosas
              galletas, nuestros productos te cautivarán con su sabor y calidad.
            </p>
          </main>
        </Banner>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/pago" element={<PaymentPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
