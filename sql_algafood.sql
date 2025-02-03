create table produto (
id bigint not null auto_increment, 
nome varchar(255) not null, 
descricao varchar(255) not null, 
preco decimal(38,2) not null, 
ativo bit not null,  
primary key (id)
) engine=InnoDB default charset=utf8;

create  table grupo (
id bigint not null auto_increment,
nome varchar(255),
primary key (id)
) engine=InnoDB default charset=utf8;

create table usuario (
data_cadastro datetime, 
id bigint not null auto_increment, 
email varchar(255), 
nome varchar(255), 
senha varchar(255), 
primary key (id)
) engine=InnoDB default charset=utf8;

create table usuario_grupo (
grupo_id bigint not null, 
usuario_id bigint not null
) engine=InnoDB default charset=utf8;

alter table usuario_grupo add constraint fk_usuario_grupo_grupo foreign key (grupo_id) references grupo (id);

alter table usuario_grupo add constraint fk_usuario_grupo_usuario foreign key (usuario_id) references usuario (id);

set foreign_key_checks= 0;
SET SQL_SAFE_UPDATES = 0;

delete from produto;
delete from usuario;
delete from usuario_grupo;
delete from grupo;

set foreign_key_checks= 1;

alter table produto auto_increment = 1;

alter table grupo auto_increment = 1;
alter table usuario auto_increment = 1;

insert into produto (nome, descricao, preco, ativo) values ('Porco com molho agridoce', 'Deliciosa carne suína ao molho especial', 78.90, 1);
insert into produto (nome, descricao, preco, ativo) values ('Camarão tailandês', '16 camarões grandes ao molho picante', 110, 1);
insert into produto (nome, descricao, preco, ativo) values ('Salada picante com carne grelhada', 'Salada de folhas com cortes finos de carne bovina grelhada e nosso molho especial de pimenta vermelha', 87.20, 1);
insert into produto (nome, descricao, preco, ativo) values ('Garlic Naan', 'Pão tradicional indiano com cobertura de alho', 21, 1);
insert into produto (nome, descricao, preco, ativo) values ('Murg Curry', 'Cubos de frango preparados com molho curry e especiarias', 43, 1);
insert into produto (nome, descricao, preco, ativo) values ('Bife Ancho', 'Corte macio e suculento, com dois dedos de espessura, retirado da parte dianteira do contrafilé', 79, 1);
insert into produto (nome, descricao, preco, ativo) values ('T-Bone', 'Corte muito saboroso, com um osso em formato de T, sendo de um lado o contrafilé e do outro o filé mignon', 89, 1);
insert into produto (nome, descricao, preco, ativo) values ('Sanduíche X-Tudo', 'Sandubão com muito queijo, hamburger bovino, bacon, ovo, salada e maionese', 19, 1);
insert into produto (nome, descricao, preco, ativo) values ('Espetinho de Cupim', 'Acompanha farinha, mandioca e vinagrete', 8, 1);


insert into grupo (id, nome) values (1, 'Gerente'), (2, 'Vendedor'), (3, 'Secretária'), (4, 'Cadastrador'), (5, 'Cliente');

insert into usuario (id, nome, email, senha, data_cadastro) values (1, 'Eduardo', 'eduardo@teste.com', '123', utc_timestamp);
insert into usuario (id, nome, email, senha, data_cadastro) values (2, 'Natany', 'natany@teste.com', '123', utc_timestamp);
insert into usuario (id, nome, email, senha, data_cadastro) values (3, 'Renoia', 'renoia@teste.com', '123', utc_timestamp);
insert into usuario (id, nome, email, senha, data_cadastro) values (4, 'Ariane', 'ariane@teste.com', '123', utc_timestamp);
insert into usuario (id, nome, email, senha, data_cadastro) values (5, 'Manoel Lima', 'manoel.loja@gmail.com', '123', utc_timestamp);

insert into usuario_grupo (usuario_id, grupo_id) values (1, 1), (1, 2), (2, 2);
