import React from 'react';
import "./Footer.css"
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleReportProblem = () => {
    // Redirige al usuario a la página del formulario de reporte
    navigate('/reportProblem');
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 Biblioteca Virtual UTN. Todos los derechos reservados.</p>
        <div className="report-problem">
          <span>Reportar un problema</span>
          <button className="report-button" onClick={handleReportProblem}>
            Reportar
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
