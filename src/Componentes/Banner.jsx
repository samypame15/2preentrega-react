import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Banner() {
  return (
    <div className="banner" style={{ backgroundColor: "#fff3f5", padding: "50px 0" }}>
      <Container fluid>
        <Row className="align-items-center">
          <Col md={6} className="banner-text">
            <h1>Bienvenido a la Pastelería y Repostería Emicake</h1>
            <p>
              Somos una pastelería artesanal que crea dulces irresistibles para
              cada ocasión. Desde pasteles personalizados hasta deliciosas
              galletas, nuestros productos te cautivarán con su sabor y calidad.
            </p>
            <Button
              style={{
                backgroundColor: '#f0b1dc',
                borderColor: '#ff69b4',
                color: 'white',
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#ff69b4"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#f0b1dc"}
            >
              Ordenar ahora
            </Button>
          </Col>
          <Col md={6} className="banner-image">
            <img 
              src="./banner.png" 
              alt="Banner promocional de Emicake, mostrando productos de pastelería" 
              className="img-fluid" 
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;

