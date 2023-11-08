
CREATE DATABASE the_polleria;
USE the_polleria;

CREATE TABLE menu(
id int  primary key  auto_increment,
nombre varchar(50),
descripcion varchar(200),
precio int,
categoria varchar(50)
);

insert into menu (nombre, descripcion,precio,categoria)
value("PROMO DUO", "1/2 POLLO A LA LEÑA + PAPAS FRITAS MEDIANAS + ENSALADA CLASICA + ROLLS LEÑA + INCA KOLA 1 LT", 53, "Promocion")