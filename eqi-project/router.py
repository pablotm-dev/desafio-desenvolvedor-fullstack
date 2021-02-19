from flask import Flask, request
from flask_cors import CORS, cross_origin
import conection

app = Flask("Simulacao_investimento")
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)
@app.route("/simulacao", methods=["POST"])
def SimulaInvestimento():

    body = request.get_json(force=True)
    # bloco de if's para checar se esta faltando algum dado necessario para realizar uma simulação
    if ("nome" not in body):
        return CreateResponse(400, {'resultado': 'okay'})
    if ("email" not in body):
        return CreateResponse(400, "O parametro email é obrigátorio")
    if ("telefone" not in body):
        return CreateResponse(400, "O parametro telefone é obrigátorio")
    if ("quantidade" not in body):
        return CreateResponse(400, "O parametro quantidade é obrigátorio")
    if ("tempo_investimento" not in body):
        return CreateResponse(400, "O parametro tempo_investimento é obrigátorio")

    # Valor inicial aplicado
    valor_do_investimento = int(body['quantidade'])

    # Rentabilidade mensagem, em %
    rentabilidade_mensal_poupanca = float(0.11)

    # Transformando a porcentagem em valor numérico
    rentabilidade_mensal_poupanca = rentabilidade_mensal_poupanca / 100

    # Tempo de investimento
    tempo_investimento = int(body['tempo_investimento'])
    lista_valores_cdb = []
    lista_intervalo = []
    lista_valores_poupanca = []
    valor_final_cdb = valor_do_investimento
    valor_final_poupanca = valor_do_investimento
    for iterator in range(tempo_investimento):
        valor_final_cdb += valor_final_cdb * 0.0022
        valor_final_poupanca += valor_final_poupanca * 0.0011
        lista_valores_cdb.append(int(valor_final_cdb))
        lista_valores_poupanca.append(int(valor_final_poupanca))
        lista_intervalo.append(iterator+1)
    conection.connect_process('insert', 'simulacao', body, int(valor_final_cdb), valor_final_poupanca)

    return {"valores_poupanca": lista_valores_poupanca,
            "valores_cdb": lista_valores_cdb,
            "lista_intervalo": lista_intervalo
            }

@app.route("/consulta_simulacoes", methods=["POST"])
def Consulta_Simul():
    lista = []
    body = request.get_json(force=True)
    simulacoes = conection.connect_process('select', 'simulacao', body, 0, 0)
    return{'simulacoes': simulacoes}

    
def CreateResponse(status, mensagem, nome_conteudo=False, conteudo=False):
    response = {}
    response['status'] = status
    response['mensagem'] = mensagem
    
    if (nome_conteudo and conteudo):
        response[nome_conteudo]=conteudo
    
    return response
app.run()

