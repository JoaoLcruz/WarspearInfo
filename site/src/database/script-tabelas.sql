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


INSERT INTO usuario VALUES (null, 'matheus', 'matheus@gmail.com', '123', 2, 2);
INSERT INTO faccao (NomeFaccao) VALUES ('Legião');
INSERT INTO raca (NomeRaca) VALUES ('Proscritos');

select * from raca;
select * from faccao;
select * from usuario;

-- SELECT Equipe.nome,COUNT(*) AS Votos
-- FROM Cadastro join Equipe on Voto_equipe = id_equipe
-- GROUP BY Voto_equipe;


select count(Fkfaccao) as qtdVotos , NomeFaccao as Faccao from usuario u join faccao f on Fkfaccao = idFaccao group by Fkfaccao;

select count(FkRaca) as qtdVotos2 , NomeRaca as Raca from usuario u join raca r on FkRaca = idRaca group by FkRaca;


select * from usuario join faccao on Fkfaccao = idFaccao join raca on FkRaca = idRaca ;

drop table usuario;
drop table faccao;
drop table raca;
drop database WarspearInfo;