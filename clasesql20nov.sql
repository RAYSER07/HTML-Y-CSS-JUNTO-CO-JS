CREATE DATABASE ECOMMERCE;
use ECOMMERCE;

CREATE TABLE usuarios (
-- atributo tipo_dato longitud_dato
	id_usuario int primary key auto_increment,
    nombre_usuario varchar (20),
    apellido_usuario varchar (20),
    fecha_nacimiento_usuario date,
    email varchar (100),
    clave varchar (255)
);
-- insertar usuario
insert into usuarios (nombre_usuario,apellido_usuario,email,clave)
values ("Leonado","D caprio","Leonito@gmail.com","Dcaprio123");

-- insetar varios a la vez
insert into usuarios (nombre_usuario,apellido_usuario,email,clave)
values
 ("Gustavo","Petro","petro777@gmail.com","Petroski123"),
 ("jhoan","Velazco","Velazqo@gmail.com","VJhoan123"),
 ("Carlos","Valencia","02Valencia@gmail.com","Carliños11"),
 ("juan","Savedra","JuanS@gmail.com","Juandi123");
 
 select * from usuarios;


