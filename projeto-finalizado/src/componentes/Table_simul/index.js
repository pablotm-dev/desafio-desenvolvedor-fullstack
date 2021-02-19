import React, { Component, useState } from 'react'
import './estilo.css';


export default function Table(props){
   function renderTableData() {
      const lista2 = props.json.simulacoes.map(item => ({
         quantidade: item[0],
         tempo: item[1],
         rendimento_cdb: item[2],
         rendimento_poupanca: [3],
         email: item[4] 
      }))
         return lista2.map((student, index) => {
         const { quantidade, tempo, rendimento_poupanca, rendimento_cdb, email } = student //destructuring
         return (
            <tr key={email}>
                  <td>{quantidade}</td>
                  <td>{tempo}</td>
                  <td>{rendimento_poupanca}</td>
                  <td>{rendimento_cdb}</td>
            </tr>
         )
         })
      }
   return (
      <div>
         <h1 id='title'>Suas Simulaçoes</h1>
         <table id='students'>
            <tbody>
               <tr>
                  <th>Investimento inicial</th>
                  <th>Tempo de investimento</th>
                  <th>Rendimento na poupança</th>
                  <th>Rendimento no CDB</th>
               </tr>
               {renderTableData()}
            </tbody>
         </table>
      </div>
   )

}



