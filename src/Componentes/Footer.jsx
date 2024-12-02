import React from 'react';


const Footer = () => {
  return (
    <footer className="footer  text-black py-4">
      <div className="container text-center">
        <p className="mb-0">© 2024 Todos los derechos reservados a pasteleria y reposteria  Emicake.</p>
        <p className="mb-0">
          <a href="/privacidad" className="text-black text-decoration-none me-3">Política de Privacidad</a>
          <a href="/terminos" className="text-black text-decoration-none">Términos y Condiciones</a>
        </p>
        <div className="social-links mt-3">
          <a href="https://facebook.com" className="text-white me-3">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="text-white me-3">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
