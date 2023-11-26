# CRUD operation using MySQL

## Overview
This project demonstrates basic CRUD (Create, Read, Update, Delete) operations using Node.js and MySQL. The project consists of two main files: connection.js and server.js.

## Getting Started

### Prerequisites
- Node.js
- MySQL
- Express.js

Step 1:
git clone https://github.com/your-username/CRUD_operation_MySQL.git
cd CRUD-MySQL

Step 2:
Install dependencies: npm install

Step 3:
Configure MySQL Connection:

Step 4:
Open connection.js and update the MySQL connection details (host, user, password, database) according to your setup.
Run the Server:node server.js

Step 5:
The server should be running at http://localhost:3000.

Files::
connection.js
This file establishes a connection to the MySQL database using the mysql npm package. Make sure to update the connection details before running the server.

server.js
This file contains the main application logic. It sets up a basic Express server and defines routes for CRUD operations:

Create: POST /create
Read: GET /read/:id (Read by ID), GET /read (Read all)
Update: PUT /update/:id
Delete: DELETE /delete/:id

#Author : Prakunj Vishwakarma