DROP TABLE IF EXISTS `users`;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);
insert into users (name,email) values("Hussein","Hussein@gmail.com");
insert into users (name,email) values("Ahmed","Ahmed@gmail.com");
