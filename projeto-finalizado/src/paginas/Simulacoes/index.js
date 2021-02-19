import React from 'react';

import EstruturaPagina from '../../componentes/EstruturaPagina';
import FormConsulta from '../../componentes/FormConsulta';
import Table from '../../componentes/Table_simul';
import './estilo.css';

const Contato = () => {
  return (
    <EstruturaPagina>
      <div className="contato-container">
        <div className="contato-mapa">
          <h2 className="titulo-sessao">Para consultar suas simulaçoes, digite seu <b>E-mail</b></h2>
        </div>
        <div className="contato-mapa">
          <FormConsulta />
        </div>
      </div>
    </EstruturaPagina>
  );
}

export default Contato;
