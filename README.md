# Dev-Connector

### Full Stack Application utilizing React, Redux & Node.js

### Created NOSQL Data Base with MongoDB.
Document database very similar to json objects.
Easy to manage, no installs. 
Cross-compatable.

## Getting Started

These instructions will give you a copy of the project up and running on
your local machine for development and testing purposes. See deployment
for notes on deploying the project on a live system.

### Prerequisites

Requirements for the software and other tools to build, test and push 
- [Node.js] - (https://nodejs.org/en/)
- [npm] - (https://www.npmjs.com/)

### Developer Tools:
[React Dev Tools] -(https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
[Redux Devtools] - (https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
[Postman] - Test our API (https://www.postman.com/)


### Collections => Tables
Using mongoose to interact with our DB

### Config:
Can create global values within our application and will 
store in default.json

** If get 'DeprecationWarning': **
    Add the options suggested options to the connectDB
    function inside of config/db.js 

Each users password will be enrypted by salting and 
hashing each password using bcrypt.js
(https://preview.npmjs.com/package/bcryptjs/v/1.0.1)

Each user will recieve a jwt when registering and 
signing in for access to private pages:
(https://github.com/auth0/node-jsonwebtoken)
find info at (https://jwt.io/)

### Installing

A step by step series of examples that tell you how to get a development
environment running


Install dependencies

    npm i

Start server

    npm run server


## Built With

  - [React](https://reactjs.org/)
  - [Express](https://expressjs.com/)
  - [Node](https://nodejs.org/en/) 


## Authors

  - **Jacob Short** 


  - **Billie Thompson** - *Provided README Template* -
    [PurpleBooth](https://github.com/PurpleBooth)

  - **Brad Traversy** - *Tutorial* - 
    (https://www.udemy.com/course/mern-stack-front-to-back/)

Secion 3: video 13

