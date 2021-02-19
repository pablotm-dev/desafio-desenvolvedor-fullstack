import React, { useEffect } from "react";
import Chart from "chart.js";

export default function App(props) {
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    if (props.json == ''){
        var colunas = ['Jan', "Feb", "Mar", "Apr", "May", "Jun"];
        var cdb_values = [33, 25, 35, 51, 54, 76];
        var poup_values = [33, 53, 85, 41, 44, 65];
    }else{
        var colunas = props.json.lista_intervalo;
        console.log(props.json.lista_intervalo)
        var cdb_values = props.json.valores_cdb;
        var poup_values = props.json.valores_poupanca;
        new Chart(ctx, {
        type: "line",
        data: {
            labels: colunas,
            datasets: [
                {
                label: "Poupança",
                data: poup_values,
                fill: false,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
                },
                {
                label: "CDB",
                data: cdb_values,
                fill: false,
                borderColor: "#742774"
                }
            ]
        }
        });
    }
});
  return (
    <div className="App">
        <canvas id="myChart" width="400" height="400" />
    </div>
  );
}
