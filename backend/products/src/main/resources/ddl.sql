create table produto (ativo bit not null, preco decimal(38,2) not null, id bigint not null auto_increment, descricao varchar(255) not null, nome varchar(255) not null, primary key (id)) engine=InnoDB;
insert into produto (nome, descricao, preco, ativo) values ('Porco com molho agridoce', 'Deliciosa carne suína ao molho especial', 78.90, 1);
insert into produto (nome, descricao, preco, ativo) values ('Camarão tailandês', '16 camarões grandes ao molho picante', 110, 1);
insert into produto (nome, descricao, preco, ativo) values ('Salada picante com carne grelhada', 'Salada de folhas com cortes finos de carne bovina grelhada e nosso molho especial de pimenta vermelha', 87.20, 1);
insert into produto (nome, descricao, preco, ativo) values ('Garlic Naan', 'Pão tradicional indiano com cobertura de alho', 21, 1);
insert into produto (nome, descricao, preco, ativo) values ('Murg Curry', 'Cubos de frango preparados com molho curry e especiarias', 43, 1);
insert into produto (nome, descricao, preco, ativo) values ('Bife Ancho', 'Corte macio e suculento, com dois dedos de espessura, retirado da parte dianteira do contrafilé', 79, 1);
insert into produto (nome, descricao, preco, ativo) values ('T-Bone', 'Corte muito saboroso, com um osso em formato de T, sendo de um lado o contrafilé e do outro o filé mignon', 89, 1);
insert into produto (nome, descricao, preco, ativo) values ('Sanduíche X-Tudo', 'Sandubão com muito queijo, hamburger bovino, bacon, ovo, salada e maionese', 19, 1);
insert into produto (nome, descricao, preco, ativo) values ('Espetinho de Cupim', 'Acompanha farinha, mandioca e vinagrete', 8, 1);

