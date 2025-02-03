set foreign_key_checks= 0;
SET SQL_SAFE_UPDATES = 0;

delete from usuario;
delete from usuario_grupo;
delete from grupo;


set foreign_key_checks= 1;

alter table grupo auto_increment = 1;
alter table usuario auto_increment = 1;


insert into grupo (id, nome) values (1, 'Gerente'), (2, 'Vendedor'), (3, 'Secretária'), (4, 'Cadastrador'), (5, 'Cliente');

insert into usuario (id, nome, email, senha, data_cadastro) values (1, 'Eduardo', 'eduardo@teste.com', '123', utc_timestamp);
insert into usuario (id, nome, email, senha, data_cadastro) values (2, 'Natany', 'natany@teste.com', '123', utc_timestamp);
insert into usuario (id, nome, email, senha, data_cadastro) values (3, 'Renoia', 'renoia@teste.com', '123', utc_timestamp);
insert into usuario (id, nome, email, senha, data_cadastro) values (4, 'Ariane', 'ariane@teste.com', '123', utc_timestamp);
insert into usuario (id, nome, email, senha, data_cadastro) values (5, 'Manoel Lima', 'manoel.loja@gmail.com', '123', utc_timestamp);

insert into usuario_grupo (usuario_id, grupo_id) values (1, 1), (1, 2), (2, 2);

