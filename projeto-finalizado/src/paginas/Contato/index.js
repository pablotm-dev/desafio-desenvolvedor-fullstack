import React from 'react';

import EstruturaPagina from '../../componentes/EstruturaPagina';
import Form from '../../componentes/Form';
import Graph from '../../componentes/graph';
import './estilo.css';

const Contato = () => {
  return (
    <EstruturaPagina>
      <div className="contato-container">
        <div className="contato-mapa">
          <h2 className="titulo-sessao">Nao espere mais, <b>nao perca dinheiro</b></h2>
        </div>
        <div className="contato-mapa">
          <h2 className="titulo-sessao">faça <b>agora mesmo</b> sua simulação</h2>
          <Form />
        </div>
      </div>
    </EstruturaPagina>
  );
}

export default Contato;
