CREATE DATABASE epatra;

CREATE TABLE users(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL UNIQUE,
    "password" VARCHAR(255) NOT NULL,
    "phoneNumber" VARCHAR(255) NOT NULL UNIQUE,
    "createdAt" TIMESTAMP,
    "updatedAt" TIMESTAMP,
    "deletedAt" TIMESTAMP
);
CREATE TABLE messages(
    "id" SERIAL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "senderId" VARCHAR(255) NOT NULL,
    "receiverId" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(0),
    "updatedAt" TIMESTAMP(0),
    "deletedAt" TIMESTAMP(0)
);

INSERT into Users(name,Email,Password,phoneNumber,createdAt) 
    values("kartik","kartik@gmail.com","2505","9068457747",NOW());

INSERT into messages("message","senderId","receiverId","createdAt") 
    values('initial message','kartik@gmail.com','dikshit@gmail.com',NOW());