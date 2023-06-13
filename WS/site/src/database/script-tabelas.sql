CREATE DATABASE WarspearInfo;

USE WarspearInfo;

CREATE TABLE faccao (
	idFaccao INT PRIMARY KEY ,
    NomeFaccao VARCHAR(50)
);

INSERT INTO faccao VALUE 
 (1, 'Legião'),
 (2, 'Sentinelas');

CREATE TABLE raca (
	idRaca INT PRIMARY KEY,
    NomeRaca VARCHAR(50)
);

INSERT INTO raca VALUE 
 (1, 'Proscritos'),
 (2, 'Primogênitos'),
 (3, 'Escolhidos'),
 (4, 'Clã das Montanhas');

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    Fkfaccao INT,
    constraint Fkfaccao foreign key (Fkfaccao) references faccao(idFaccao),
    FkRaca INT,
    constraint FkRaca foreign key (FkRaca) references raca(idRaca)
);


CREATE TABLE quiz (
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    pontos INT,
    fkUsuario INT,
    constraint fkUsuario foreign key (fkUsuario) references usuario(idUsuario)
);


select * from raca;
select * from faccao;
select * from usuario;
select * from quiz;

select count(Fkfaccao) as qtdVotos , NomeFaccao as Faccao from usuario u join faccao f on Fkfaccao = idFaccao group by Fkfaccao;

select count(FkRaca) as qtdVotos2 , NomeRaca as Raca from usuario u join raca r on FkRaca = idRaca group by FkRaca;

select * from usuario join faccao on Fkfaccao = idFaccao join raca on FkRaca = idRaca join quiz on fkUsuario = idUsuario;

select nome, sum(pontos) as pto from quiz join usuario on fkUsuario = idUsuario group by nome order by pto desc;

INSERT INTO usuario (nome, email, senha, Fkfaccao, FkRaca) VALUES
('JoÃ£o Silva', 'joao.silva@gmail.com', 'senha123', 1, 1),
('Maria Santos', 'maria.santos@hotmail.com', 'senha456', 2, 3),
('Pedro Oliveira', 'pedro.oliveira@yahoo.com', 'senha789', 1, 2),
('Ana Souza', 'ana.souza@gmail.com', 'senha123', 2, 4),
('Lucas Pereira', 'lucas.pereira@hotmail.com', 'senha456', 1, 3),
('Julia Costa', 'julia.costa@yahoo.com', 'senha789', 2, 1);



drop table if exists usuario;
drop table if exists faccao;
drop table if exists raca;
drop database if exists WarspearInfo;
