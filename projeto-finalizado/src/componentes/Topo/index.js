import React from 'react';
import { Link } from 'react-router-dom';

import './estilo.css';

const Topo = () => {
  return (
    <header className="topo">
      <div className="topo-conteudo">
        <Link className="topo-logo-box" to="/">
          <img className="topo-logo" src="assets/InvestLogo.png" alt="logo dentes saudáveis" title="logo dentes saudáveis"/>
          <p className="topo-nome-empresa">EQI Simulaçoes</p>
        </Link>

        <nav className="topo-links">
          <Link className="topo-link" to="/">Home</Link>
          <Link className="topo-link" to="/contato">Simule seu investimento</Link>
          <Link className="topo-link" to="/simulacoes">Consulte Simulaçoes</Link>
        </nav>
      </div>
    </header>
  );
}

export default Topo;