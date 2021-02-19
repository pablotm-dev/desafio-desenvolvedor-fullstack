
CREATE TABLE usuario (
	"nome" VARCHAR(50) NOT NULL,
	"email" VARCHAR(50) NOT NULL,
	"telefone" VARCHAR(50) NOT NULL,
	"senha_acesso" VARCHAR(20) NULL DEFAULT NULL,
	PRIMARY KEY ("email")
);

CREATE TABLE simulacoes (
	"quantidade_investida" VARCHAR(50) NULL DEFAULT NULL,
	"tempo" VARCHAR(50) NULL DEFAULT NULL,
	"rendimento_cdb" VARCHAR(50) NULL DEFAULT NULL,
	"rendimento_poup" VARCHAR(50) NULL DEFAULT NULL,
	"email_usuario" VARCHAR(50) NULL DEFAULT NULL,
	CONSTRAINT "simulacoes_email_usuario_fkey" FOREIGN KEY ("email_usuario") REFERENCES "usuario" ("email") ON UPDATE NO ACTION ON DELETE NO ACTION
);