import psycopg2

def connect_process(process, DB_NAME, json_data, valor_final_cdb, valor_final_poupança):
    conn = psycopg2.connect(dbname=DB_NAME, user='postgres', password='postgres', host='localhost')
    if process == "insert":
        insert_into_usuar(json_data, conn, valor_final_cdb, valor_final_poupança)
    if process == "select":
        simulacoes = select_simul(json_data, conn)
        return simulacoes
    conn.close()

def insert_into_usuar(json_data, conn, valor_final_cdb, valor_final_poupança):
    cur = conn.cursor()
    cur.execute("SELECT email FROM usuario")
    emails = cur.fetchall()
    contain = False
    for email in emails:
        if (json_data['email'] in email):
            contain = True        
    if (not contain):
        cur.execute("INSERT INTO usuario (nome, email, telefone, senha_acesso) VALUES (\'"+json_data["nome"]+"\', \'"+json_data["email"]+"\', \'"+json_data["telefone"]+"\', \'"+json_data["senha_acesso"]+"\')")
    cur.execute("INSERT INTO simulacoes (email_usuario, quantidade_investida, tempo, rendimento_cdb, rendimento_poup) VALUES (\'"+json_data["email"]+"\', \'"+json_data['quantidade']+"\', \'"+json_data['tempo_investimento']+"\', \'"+str(valor_final_cdb)+"\', \'"+str(valor_final_poupança)+"\')")
    conn.commit()
    cur.close()

def select_simul(json, conn):
    cur = conn.cursor()
    cur.execute("SELECT * FROM simulacoes WHERE email_usuario = \'"+str(json['email'])+"\'")
    simulacoes = cur.fetchall()   
    cur.close()
    return simulacoes
