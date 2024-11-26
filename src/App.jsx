import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarReact from "./Componentes/NavbarReact";
import Banner from "./Componentes/Banner";
import ItemListContainer from "./Componentes/ItemListContainer";
import Footer from "./Componentes/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
        <ItemListContainer />
        <Footer />

      </div>
    </>
  );
}

export default App;
