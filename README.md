# my-react-spb

# react + vite 
npm create vite@latest  
√ Project name: ... my-react-demo  
√ Select a framework: » React  
√ Select a variant: » JavaScript  

cd my-react-demo  
npm install  
npm run dev  

### bootstrap + sass install
npm install bootstrap sass


### axios + cros
npm install axios@latest

//使用react-create-app时使用，使用vite在vite.config.js里直接写。  
npm install http-proxy-middleware

### react-router-dom
npm i react-router-dom

# mysql
show databases;  
create database my_db;  
use my_db;  
show tables;  
CREATE TABLE users (  
    id INT AUTO_INCREMENT PRIMARY KEY,  
    username VARCHAR(50) NOT NULL,  
    email VARCHAR(100) NOT NULL,  
    pwd VARCHAR(10) NOT NULL  
);  

insert into users(email,username,pwd) values('test1@demo','テスト１','test1');  
insert into users(email,username,pwd) values('test2@demo','テスト２','test2');  
insert into users(email,username,pwd) values('test3@demo','テスト３','test3');  

### mysql in spring boot setting
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver  
spring.datasource.url=jdbc:mysql://127.0.0.1:3306/my_db?useSSL=false&serverTimezone=GMT%2B8&characterEncoding=utf-8  
spring.datasource.username=root  
spring.datasource.password=root  



