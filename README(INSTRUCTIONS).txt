===================ABOUT===================
Foi desenvolvido uma API utilizando FLASK para receber as requisiçoes POST, realizar os calculos de rendimento,
inserir/consultar dados no banco de dados e retornar os dados necessarios ao front-end (Em formato de JSON através
de uma response), para fazer a conexão/consultas/inserçoes no banco de dados foi utilizado a lib psycopg2. 

Como sugerido, foi utilizado REACT para fazer o front-end e as requisiçoes POST para o server-side (FLASK-API)

Para o banco de dados foi utilizado POSTGRESQL como sugerido
===============REQUIREMENTS================
python ver. 3.9.1

para a API python, estes sao os pacotes PIP necessarios:
pip3 install flask; psycopg2; flask-cors

Para o projeto REACT:
Instalar NodeJS(LTS version)

Postgresql (12.6)

***O nome do banco de dados DEVE ser "simulacao" E o usuario admin "postgres" DEVE estar com as senha "postgres"***
***A estrutura do banco de dados DEVE ser criada dentro de um schema nomeado "public"***

execute o script.sql localizado no diretorio "ScriptSQL"

===========================================

Para executar o projeto siga os passos -->

1- No prompt de comando entre no diretorio "Flask-client" e execute o arquivo python
"router.py" (python router.pv)

2- Em outro prompt de comando entre no diretorio "React-server" e execute o comando 
"npm start"