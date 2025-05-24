create database if not exists Dummy_DB;

drop table users;

use Dummy_DB;

CREATE TABLE users (
    id VARCHAR(100) PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);