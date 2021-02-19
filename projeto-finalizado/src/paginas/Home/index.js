import React from 'react';
import { Link } from 'react-router-dom';

import EstruturaPagina from '../../componentes/EstruturaPagina';

import './estilo.css';

const Home = (  ) => {
  return (
    <EstruturaPagina>

      <div className="home-apresentacao">
        <div className="limitar-container">
          <h1>O investimento em CDB pode ser <span>mais lucrativo e mais seguro</span> do que a poupança!</h1>

          <p>
            Quais são as principais vantagens de investir em CDB comparado a poupança ? 
          </p>

          <ul className="lista-vantagens">
            <li>
              <img src="assets/Vantagens-icon.png" alt="logo" title="logo"/>
              <p>Rendimento elevado para renda fixa</p>
            </li>

            <li>
              <img src="assets/Vantagens-icon.png" alt="logo" title="logo"/>
              <p>Proteção do Fundo Garantidor de Crédito</p>
            </li>

            <li>
              <img src="assets/Vantagens-icon.png" alt="logo" title="logo"/>
              <p>Valorizações competitivas</p>
            </li>

            <li>
              <img src="assets/Vantagens-icon.png" alt="logo" title="logo"/>
              <p>Tão seguro quanto a poupança</p>
            </li>
          </ul>
        </div>
      </div>

      <h2 className="titulo-sessao">Porque <b>investir</b> e porque <b>CDB</b>?</h2>

      <img className="img-porque-investir" src="assets/porque-investir-img.jpg" title="Imagem porque investir"/>

      <ul className="lista-sobre-vantagens limitar-container">
        <li>
          <h3>Porque investir é importante ?</h3>
          <p>Além de garantir tranquilidade financeira, poupar possibilita a realização de sonhos.</p>
        </li>
        <li>
          <h3>Qual o principal beneficio ?</h3>
          <p>Com hábitos de poupança e investindo adequadamente, uma pessoa pode aumentar seu patrimônio pessoal e familiar, aumentando as chances de alcançar seus objetivos.</p>
        </li>
        <li>
          <h3>É possivel ter uma renda mensal ?</h3>
          <p>Com planejamento, é possível ter uma renda mensal passiva que será resultado do que os seus investimentos poderão oferecer.</p>
        </li>
      </ul>      
      
      <div className="home-depoimentos">
        <h2 className="titulo-sessao">Veja o que nossos <b>clientes</b> estão falando...</h2>

        <ul className="lista-depoimentos">
          <li>
            <img className="img-porque-investir" src="assets/cliente01.png" alt="Cliente Alberto" title="Cliente Alberto"/>
            <p>Alberto</p>
            <p>Durante 6 anos venho investindo em CDB e hoje tenho uma renda mensal maior que meu salario</p>
          </li>

          <li>
            <img className="img-porque-investir" src="assets/cliente02.png" alt="Cliente Eliana" title="Cliente Eliana"/>
            <p>Eliana</p>
            <p>Investi durante 5 anos e hoje finalmente consegui realizar meu sonho de ter uma casa própria</p>
          </li>

          <li>
            <img className="img-porque-investir" src="assets/cliente03.png" alt="Cliente Carla" title="Cliente Carla"/>
            <p>Carla</p>
            <p>No começo fiquei um pouco apreensivo, pois nao conhecia muito sobre a area de investimentos, hoje tenho uma renda mensal que me ajuda muito em casa !   </p>
          </li>
        </ul>
      </div>

      <div>
        <Link to="/contato" className="btn-contato">Entrar em contato</Link>

      </div>
    </EstruturaPagina>
  );
}

export default Home;
