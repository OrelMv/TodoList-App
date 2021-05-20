# To Do List & Reminder Application
Using NodeJS, ReactJS & MongoDB.

## Introduction
- This project allows the client to list his tasks in a todo list.
- The client enters the task along with the date and time to do it.
- When it's time to do the task, the app remindes the client with a popup message.

## Back-End Summary
- There is one Rest API that manages the data of the todo list.
- MongoDB data base that stores the data.
- Modular structure, every module has his own job:
1. Controller - get the HTTP request from the client and return the response
2. todoBL(Business Logic) - responsible for all CRUD functionalities of the data base

## Set-Up
1. In the Back-End:
In MongoDB create a data base and do the following (I used Robo3T as GUI):
- In Server/configs/toDosDB.js change the connection URL.
- In the data base create an empty collection called: "todolist"
- In the console, Server directory, run npm install to download all the dependencies.
- In the console, Server directory, run node index.js to run the server.
2. In the Front-End:
- In the console, Client/todo-app directory, run npm install to download all the dependencies.
- In the console, Client/todo-app directory, run npm start to run the app.

## How To Use The Application
- Enter the task
- Pick the date and time the app should reminde you
- On each task you have the option to mark it as completed/uncompleted, and to delete it.

## Technologies 
- JavaScript
- NodeJS
- ReactJS
- Express
- MongoDB
