# Blomstre
Blomstre is a prototype for a personal planttracker. It shows you if your plants is happy or if it needs water.

It was inially made on a one day sprint and was a part of the [SALTs](https://salt.study/) bootcamp in Stockholm fall 2020. It is now upgraded with Redux and Mongoose.

![](images/screencapture.jpg?raw=true)

## Details
Backend: API with Node, Express and Mongoose. 
Frontend: React and Redux

The data can either be stored in a mongoDB-database or locally in a json file.

Blomstre is a react/express implementation of an earlier project: [ha-plant-tracker](https://github.com/mountwebs/ha-plant-tracker), a python plant tracker for home assistant.

## How to use
### Prerequisites
Node and npm
### Setup
1. Clone this repository.
2. Install dependencies inside the client and server folders with "npm i".

## A) Run locally with a json file as db
1. Run "npm run start-local" inside both the server and client folders.

### Or B) Run with mongoDB
1. Create a .env file in the server folder with the variable "DB_URI" with a mongoDb uri.
2. Run "npm-start" inside both the client and server folders.

# Roadmap
Possible features that I would like to implement:
- Add a wall with information about each plant
  - "Calendar": A graph similar to githubs contribution graph that shows the plants each day.
    - The user can edit the plants history directly in the calendar.
  - Plant stats.
  - Possibility to edit or delete plant.
- Support for multiple users with authentification.
