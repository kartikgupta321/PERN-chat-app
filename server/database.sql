CREATE DATABASE epatra;

CREATE TABLE users(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255),
    "email" VARCHAR(255),
    "password" VARCHAR(255),
    "phoneNumber" VARCHAR(255),
    "createdAt" TIMESTAMP,
    "updatedAt" TIMESTAMP,
    "deletedAt" TIMESTAMP
);
CREATE TABLE messages(
    "id" SERIAL PRIMARY KEY,
    "message" VARCHAR(255),
    "senderId" VARCHAR(255),
    "receiverId" VARCHAR(255),
    "createdAt" TIMESTAMP,
    "updatedAt" TIMESTAMP,
    "deletedAt" TIMESTAMP
);

INSERT into Users (name,Email,Password,Phone_No,createdAt) 
    values("kartik","kartik@gmail.com","2505","9068457747",NOW());