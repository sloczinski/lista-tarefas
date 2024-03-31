"# lista-tarefas"
1 12 37
Docker =
docker run --name mysql -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql

database =
CREATE DATABASE IF NOT EXISTS todolist;

USE todolist;

CREATE TABLE tasks (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(45) NOT NULL,
status VARCHAR(45) NOT NULL,
created_at VARCHAR(45) NOT NULL
);
