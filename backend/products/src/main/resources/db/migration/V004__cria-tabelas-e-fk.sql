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