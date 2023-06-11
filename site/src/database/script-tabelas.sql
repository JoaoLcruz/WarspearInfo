CREATE DATABASE WarspearInfo;

USE WarspearInfo;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    faccao VARCHAR(45),
    raca VARCHAR(45)
);

select * from usuario;