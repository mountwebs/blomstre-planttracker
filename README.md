# Blomstre
Blomstre is a prototype for a personal planttracker. It shows you if your plants need water.

It was made on a one day sprint and was a part of the [SALTs](https://salt.study/) bootcamp in Stockholm fall 2020.

![](images/screencapture.jpg?raw=true)

## Details
Backend: API with Node and express  
Frontend: React

For now the data about each plant is only stored localy in a json file.

Blomstre is a react/express implementation of an earlier project: [ha-plant-tracker](https://github.com/mountwebs/ha-plant-tracker), a python plant tracker for home assistant.

## How to use
### Prerequisites
Node and npm
### How to run
1. Clone this repository.
2. Install dependencies and run in the client and server folder respectively from command line. ("npm i" and "npm start")

# Roadmap
Possible features that I would like to implement:
- Add a wall with information about each plant
  - "Calendar": A graph similar to githubs contribution graph that shows the plants each day.
    - The user can edit the plants history directly in the calendar.
  - Plant stats.
  - Possibility to edit or delete plant.
- Connect to mongoDB database with mongoose.
- Support for multiple users with authentification.
