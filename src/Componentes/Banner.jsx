import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Banner() {
  return (
    <div className="banner">
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6} className="banner-text">
            <h1>Bienvenido a la Pastelería y Repostería Emicake</h1>
            <p>
              Somos una pastelería artesanal que crea dulces irresistibles para
              cada ocasión. Desde pasteles personalizados hasta deliciosas
              galletas, nuestros productos te cautivarán con su sabor y calidad.
            </p>
            {/* <Button className="banner-btn">Ordenar ahora</Button> */}
            <Button style={{ backgroundColor: '#f0b1dc', borderColor: '#ff69b4', color: 'white', transition: "all 0.3s ease", }}>
            Ordenar ahora
             </Button>

          </Col>
          <Col md={6} className="banner-image">
            <img src="./banner.png" alt="banner" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
