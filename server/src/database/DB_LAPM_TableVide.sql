CREATE DATABASE IF NOT EXISTS DB_LAPM;
USE DB_LAPM;

DROP TABLE IF EXISTS album;
CREATE TABLE album (
    id INT NOT NULL AUTO_INCREMENT,
    date DATE NOT NULL DEFAULT curdate(),
    lien VARCHAR(255) NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    KEY user_id (user_id),
    CONSTRAINT album_ibfk_1 FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS facture;
CREATE TABLE facture (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    file_name VARCHAR(255) NOT NULL,
    montant DECIMAL(10,2) NOT NULL,
    date DATE NOT NULL DEFAULT curdate(),
    PRIMARY KEY (id),
    UNIQUE KEY file_name (file_name),
    KEY user_id (user_id),
    CONSTRAINT facture_ibfk_1 FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS reset_password;
CREATE TABLE reset_password (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    user_id INT UNSIGNED NOT NULL,
    token VARCHAR(255) NOT NULL,
    expires_at DATETIME NOT NULL,
    PRIMARY KEY (id),
    KEY user_id (user_id),
    CONSTRAINT reset_password_ibfk_1 FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS user;
CREATE TABLE user (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    address VARCHAR(255) DEFAULT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    date_save TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    role ENUM('user','admin') NOT NULL DEFAULT 'user',
    PRIMARY KEY (id),
    UNIQUE KEY email (email)
);
