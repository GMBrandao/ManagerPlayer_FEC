create database FeiraProfissao;
use FeiraProfissao;
CREATE TABLE Decisoes
(
	Id int Auto_increment,
	Nome varchar(200),
	Descricao varchar(200),
	OpcaoPositiva varchar(200),
	RespostaPositiva varchar(200),
	OpcaoNegativa varchar(200),
	RespostaNegativa varchar(200),
	Status int,

	CONSTRAINT PK_Decisoes PRIMARY KEY (Id)
);

describe Decisoes;