import psycopg2
import sqlalchemy

conn = psycopg2.connect(dbname = "simulacao", user="postgres", password = "postgres", host="localhost")
db_string = "simulacao://postgres:@localhost"

cursor = conn.cursor()
cursor.execute("INSERT INTO usuario (nome, email, telefone) VALUES(\'pablo\', \'pablo.toldo3@outlook.com\', \'48 996724238\')")
conn.commit()
cursor.close()
conn.close()
