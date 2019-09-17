CREATE DATABASE SAT;
USE  SAT;
CREATE TABLE usuarios(
    no_empleado int(10) NOT NULL ,
    passw varchar(45) NOT NULL
);

ALTER TABLE usuarios ADD PRIMARY KEY(id);